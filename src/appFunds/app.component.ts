import { Component, ElementRef } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-funds-mfe',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService],
})
export class AppComponent {
  title = 'funds';
  email: String = '';
  role: String = '';

  constructor(private elementRef: ElementRef, private appService: AppService) {
    this.email = this.elementRef.nativeElement.getAttribute('email');
    this.role = this.elementRef.nativeElement.getAttribute('role');
  }

  ngOnInit(): void {
    this.appService.setCurrentEmail(this.email);
    this.appService.setCurrentRole(this.role);
  }
}
