import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { AlertifyService } from '../service/alertify.service';
import { Router } from '@angular/router';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ])
  ]
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  forgotPasswordForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {
  }

  ngOnInit() {
    document.body.className = 'hidescrollbar';
    this.createForgotPasswordForm();
  }

  createForgotPasswordForm() {
    this.forgotPasswordForm = this.fb.group({
      username: [''],
      email: ['', Validators.email]
    });
  }

  resetPassword() {
    this.isSubmitting = true;
    this.authService.resetPassword(this.forgotPasswordForm.value).subscribe(() => {
      this.router.navigateByUrl('/login');
      this.alertify.success('Check your mail for the new password');
    }, error => {
      this.alertify.error(error);
    });
  }

  ngOnDestroy() {
    document.body.className = '';
  }
}
