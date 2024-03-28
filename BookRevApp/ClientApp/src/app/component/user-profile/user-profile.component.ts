import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/model/user/user';
import { AuthService } from 'src/app/service/auth.service';
import { AlertifyService } from 'src/app/service/alertify.service';
import { CustomValidators } from '../../validators/custom-validators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  private userId: number;
  public currentUser: User;
  public profileForm: FormGroup;
  private decodedToken: any;

  constructor(
    private alertify: AlertifyService,
    private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.profileForm = this.formBuilder.group({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
    });
  }

  ngOnInit() {
    this.getUserDetails();
    this.createUserProfileForm();
    document.body.classList.add('book-list-background');
  }

  createUserProfileForm() {
    this.profileForm = this.formBuilder.group({
      name: ['', CustomValidators.patternValidator(/^[a-zA-Z ]*$/, { hasOnlyLetters: true })],
      username: ['', Validators.required],
      email: ['', Validators.email]
    });

  }

  getUserDetails() {
    this.userId = this.authService.decodedToken.nameid;
    this.authService.getUserById(this.userId).subscribe(
      user => {
        this.currentUser = user;
        this.profileForm.patchValue(
          {
            name: this.currentUser.name,
            username: this.currentUser.username,
            email: this.currentUser.email
          }
        );
      }
    );
  }

  saveUserData() {
    this.currentUser = this.profileForm.value;
    this.authService.updateUser(this.userId, this.currentUser).subscribe(_ => {
      localStorage.setItem('loggedInUser', this.profileForm.value.username);
      this.authService.changeLoggedInUser(this.profileForm.value.username);
      this.router.navigate(['/books']);
    }, error => this.alertify.error(error)
    );
  }

  goBack() {
    this.router.navigate(['/books']);
  }

  ngOnDestroy() {
    document.body.classList.remove('book-list-background');
  }

}
