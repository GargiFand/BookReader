import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AlertifyService } from '../service/alertify.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {

  isExpanded = false;
  loggedInUser: string;

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) { }

  ngOnInit(): void {
    this.authService.currentLoggedInUser.subscribe(loggedInUser => {
      this.loggedInUser = loggedInUser;
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.alertify.message('User logged out');
    window.location.href = '/books';
  }

  testUserRoles() {
    this.authService.roleMatch('Admin,Moderator');
  }

}
