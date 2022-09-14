import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArrowIconComponent } from './icons/arrowIcon/arrow.component';
import { DashboardIconComponent } from './icons/dashboardIcon/dashboard.component';
import { PageIconComponent } from './icons/pageIcon/pages.component';
import { DocumentIconComponent } from './icons/documentIcon/documents.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';

const appRoutes: Routes = [
  { path: '', component: SidebarComponent },
  { path: 'funds', component: SidebarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ArrowIconComponent,
    DashboardIconComponent,
    PageIconComponent,
    DocumentIconComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
