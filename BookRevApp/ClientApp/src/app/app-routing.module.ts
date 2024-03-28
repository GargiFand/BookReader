import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './component/book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './component/book-details/book-details.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { ApproveCommentsComponent } from './approve-comments/approve-comments.component';
import { AuthGuardChild } from './service/auth-guard-child.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddBookComponent } from './component/add-book/add-book.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BookListComponent },
  {
    path: 'books/new',
    component: AddBookComponent,
    data: { roles: ['Admin'] },
    canActivate: [AuthGuardChild],
  },
  { path: 'books/:id', component: BookDetailsComponent },
  { path: 'favourites', component: BookListComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  {
    path: 'commentsToApprove',
    component: ApproveCommentsComponent,
    data: { roles: ['Admin', 'Moderator'] },
    canActivate: [AuthGuardChild],
  },
  { path: '**', redirectTo: 'books', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
