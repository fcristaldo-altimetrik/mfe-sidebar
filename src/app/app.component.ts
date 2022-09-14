import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sidebar';
  role: string = '';
  email: string = '';

  ngOnInit(): void {}
  constructor(private elementRef: ElementRef) {
    this.role = this.elementRef.nativeElement.getAttribute('role');
    this.email = this.elementRef.nativeElement.getAttribute('email');
  }
}
