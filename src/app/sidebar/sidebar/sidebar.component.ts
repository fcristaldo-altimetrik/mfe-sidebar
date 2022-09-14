import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  expandedDashboard: boolean = true;
  expandedPages: boolean = false;
  expandedDocuments: boolean = false;
  expandedUser: boolean = false;
  activeTab: string = 'Dashboard';
  activeInnerTab: string = '/';
  @Input() role: string = '';
  @Input() email: string = '';

  // eslint-disable-next-line
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onUserClick() {
    this.expandedUser = !this.expandedUser;
    this.activeTab = 'User';
  }

  onDashboardClick() {
    this.expandedDashboard = !this.expandedDashboard;
    this.activeTab = 'Dashboard';
  }

  onPagesClick() {
    this.expandedPages = !this.expandedPages;
    this.activeTab = 'Pages';
  }

  onDocumentsClick() {
    this.expandedDocuments = !this.expandedDocuments;
    this.activeTab = 'Documents';
  }
}
