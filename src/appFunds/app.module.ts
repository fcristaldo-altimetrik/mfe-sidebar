import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { FundTableComponent } from './funds/fund-table/fund-table.component';
import { FundModalComponent } from './funds/fund-modal/fund-modal.component';

const appRoutes: Routes = [
  { path: '', component: FundsComponent },
  { path: 'funds', component: FundsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    FundTableComponent,
    FundModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class FundsModule {}
