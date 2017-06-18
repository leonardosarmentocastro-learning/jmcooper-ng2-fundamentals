/**
 * NPM Packages.
 */
import {Component}  from '@angular/core';
import {Router}     from '@angular/router';

/**
 * Project packages.
 */
import {AuthService} from './index';

@Component({
    templateUrl: 'app/user/login.template.html'
})
export class LoginComponent {
    constructor(
        private authService:AuthService,
        private router:Router) {

    }
    
    login(loginForm) {
        let userName = loginForm.userName;
        let password = loginForm.password;
        this.authService.login(userName, password);
    }

    cancel() {
        let route = ['events'];
        this.router.navigate(route);
    }
}