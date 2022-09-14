import { Component, OnInit } from '@angular/core';
import { FundsService } from '../services/funds.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss'],
  providers: [FundsService],
})
export class FundsComponent implements OnInit {
  activeModal: boolean = false;
  role: String = '';

  // eslint-disable-next-line
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.role = this.appService.getCurrentRole();
  }

  onClick() {
    this.activeModal = !this.activeModal;
  }
}
