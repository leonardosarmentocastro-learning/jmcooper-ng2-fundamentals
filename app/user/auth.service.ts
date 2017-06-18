/**
 * NPM packages.
 */
import {Injectable} from '@angular/core';
import {Router}     from '@angular/router';

/**
 * Project packages.
 */
import {IUser} from './index';

@Injectable()
export class AuthService {
    currentUser:IUser;
    constructor(private router:Router) {

    }

    isAuthenticated() {
        let isAuthenticated = Boolean(this.currentUser);
        return isAuthenticated;
    }

    login(userName:string, password:string) {
        this.currentUser = {
            id: 1,
            userName,
            firstName: 'John',
            lastName: 'Papa'
        };

        let route = ['events'];
        this.router.navigate(route);
    }
}