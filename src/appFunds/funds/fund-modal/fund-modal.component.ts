import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { FundsService } from '../../services/funds.service';

@Component({
  selector: 'app-fund-modal',
  templateUrl: './fund-modal.component.html',
  styleUrls: ['./fund-modal.component.scss'],
})
export class FundModalComponent {
  @Input() activeModal: boolean = false;
  email: String = '';

  // eslint-disable-next-line
  constructor(
    private formBuilder: FormBuilder,
    private fundsService: FundsService,
    private appService: AppService,
  ) {}

  ngOnInit(): void {
    this.email = this.appService.getCurrentEmail();
  }

  fundSubmit = this.formBuilder.group({
    fundName: '',
    fundAmount: '',
  });

  onSubmit = async () => {
    const newFund = {
      date: new Date(),
      concept: this.fundSubmit.value.fundName,
      amount: Number(this.fundSubmit.value.fundAmount),
      userEmail: this.email,
      id: 0,
    };
    const response = await this.fundsService.addFund(newFund);
    this.fundsService.fundAdded.emit(response);
    this.fundSubmit.reset();
    this.activeModal = false;
  };
}
