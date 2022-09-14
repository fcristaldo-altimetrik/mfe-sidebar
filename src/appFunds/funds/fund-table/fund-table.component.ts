import { Component, OnInit } from '@angular/core';
import { FundsService } from '../../services/funds.service';
import { AppService } from 'src/appFunds/services/app.service';
@Component({
  selector: 'app-fund-table',
  templateUrl: './fund-table.component.html',
  styleUrls: ['./fund-table.component.scss'],
})
export class FundTableComponent implements OnInit {
  funds: any = [];
  role: String = '';

  // eslint-disable-next-line
  constructor(
    private fundsService: FundsService,
    private appService: AppService,
  ) {}

  async ngOnInit(): Promise<any> {
    this.role = this.appService.getCurrentRole();
    this.funds = await this.fundsService.getFunds();
    this.fundsService.fundAdded.subscribe(newFund => {
      this.funds.push(newFund);
    });
  }

  dateFormatter(date: string): string {
    const utcDate: Date = new Date(date);
    const formattedDate: string = `${
      utcDate.getMonth() + 1
    }/${utcDate.getDate()}/${utcDate.getFullYear()}`;
    return formattedDate;
  }

  async onDelete(id: string): Promise<any> {
    const deletedFund = await this.fundsService.deleteFunds(id);
    this.funds = this.funds.filter((fund: any) => fund.id !== deletedFund.id);
  }
}
