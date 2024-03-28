import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../model/user/user';
import { environment } from 'src/environments/environment';
import { AlertifyService } from './alertify.service';
import { Book } from '../model/book/book';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

    private baseUrl = environment.apiUrl + '/users';

    jwtHelper = new JwtHelperService();
    decodedToken: any;
    loggedInUser = new BehaviorSubject<string>('');
    currentLoggedInUser = this.loggedInUser.asObservable();

    constructor(
        private http: HttpClient,
        private alertify: AlertifyService,
    ) { }

    changeLoggedInUser(loggedInUser: string) {
        this.loggedInUser.next(loggedInUser);
    }

    registerUser(user: User) {
        return this.http.post<any>(this.baseUrl, user);
    }

    loginUser(user: User) {
        return this.http.post<User>(this.baseUrl + '/authenticate', user);
            // .pipe(
            // map((response: any) => {
            //     const user = response;
            //     if (user) {
            //         localStorage.setItem('token', user.token);
            //     }
            // })
        // );
    }

    getUserById(id: number) {
        return this.http.get<User>(this.baseUrl + `/${id}`);
    }

    updateUser(id: number, user: User) {
        return this.http.put<User>(this.baseUrl + `/${id}`, user);
    }

    isLoggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }

    decodeToken() {
        this.decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        return this.decodedToken;
    }

    getToken() {
        return localStorage.getItem('token');
    }

    getUserRole(): string {
        if (this.isLoggedIn()) {
            return this.decodeToken().role;
        }
        return '';
    }

    roleMatch(allowedRoles): boolean {
        let isMatch = false;
        if (this.isLoggedIn) {
            const userRole = this.decodeToken().role;
            if (allowedRoles.includes(userRole)) {
                isMatch = true;
            }
        }
        return isMatch;
    }

    resetPassword(userForPasswordRecorer: any) {
        console.log(this.baseUrl + '/forgotPassword');
        return this.http.post(this.baseUrl + '/forgotPassword', userForPasswordRecorer);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        this.decodedToken = null;
    }

    getFavouriteBooks(userId: number): Observable<Book[]> {
        return this.http.get<Book[]>(`${this.baseUrl}/${userId}/favouritebooks`);
    }

}
