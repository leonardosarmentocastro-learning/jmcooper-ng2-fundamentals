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
    templateUrl: 'app/user/login.template.html',
    styles: [`
        em { float:right; color: #E05C65; padding-left: 10px;}
    `]
})
export class LoginComponent {
    mouseoverLogin:boolean;
    constructor(
        private authService:AuthService,
        private router:Router) {

    }
    
    cancel() {
        let route = ['events'];
        this.router.navigate(route);
    }

    /**
     * Validating if a given input is valid by code instead of doing it directly on the template.
     * @param input
     */
    hasToShowInputErrorMessage(input) {
        let hasToShowInputErrorMessage = true;
        if (input) {
            let mouseoverLogin = this.mouseoverLogin;
            if (input.invalid && (input.touched || mouseoverLogin)) 
                return hasToShowInputErrorMessage;

            return !hasToShowInputErrorMessage;
        }

        return !hasToShowInputErrorMessage;
    }

    login(loginForm) {
        let userName = loginForm.userName;
        let password = loginForm.password;
        this.authService.login(userName, password);
    }
}