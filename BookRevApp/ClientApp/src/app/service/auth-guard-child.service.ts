import { CanActivate, Router, CanActivateChild, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AlertifyService } from './alertify.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardChild implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private alertify: AlertifyService,
        private router: Router
    ) { }

    canActivate(next: ActivatedRouteSnapshot): boolean {
        const roles = next.data.roles as Array<string>;
        if (roles) {
            const match = this.authService.roleMatch(roles);
            if (match) {
                return true;
            } else {
                this.router.navigate(['books']);
                this.alertify.error('You are not authorized to access this area');
            }
        }

        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/books']);
        return false;
    }

    canActivateChild(): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/books']);
        return false;
    }

}
