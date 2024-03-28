import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user/user';
import { AuthService } from '../service/auth.service';
import { AlertifyService } from '../service/alertify.service';
import { CustomValidators } from '../validators/custom-validators';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit, OnDestroy {

  public user: User;
  public errorMessage = [];
  public submitted = false;
  public form: FormGroup;

  constructor(
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    document.body.className = 'hidescrollbar';
  }

  ngOnInit() {
    this.authService.logout();
    this.form = this.formBuilder.group({
      name: [null, Validators.compose([
        Validators.required,
        CustomValidators.patternValidator(/^[a-zA-Z ]*$/, { hasOnlyLetters: true }),
      ])],
      username: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([
        Validators.email,
        Validators.required])
      ],
      password: [null, Validators.compose([
        Validators.required,
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        Validators.minLength(8)])
      ],
      confirmedPassword: [null, Validators.compose([Validators.required])]
    },
      {
        validator: CustomValidators.mustMatch('password', 'confirmedPassword')
      });
  }

  addUser() {
    const pswd = this.form.get('password').value;
    const confPswd = this.form.get('confirmedPassword').value;
    if (pswd === confPswd) {
      this.authService.registerUser(this.form.value).subscribe(_ => {
        this.router.navigate(['/login']);
        this.alertify.success('User successfully created');
      },
        err => {
          this.alertify.error(err);
        });
    } else {
      this.alertify.error('Passwords are not the same!');
    }
  }

  resetForm() {
    this.submitted = false;
    this.form.reset();
  }

  ngOnDestroy() {
    document.body.className = '';
  }
}

