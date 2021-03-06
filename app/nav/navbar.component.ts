/**
 * NPM packages.
 */
import {Component} from '@angular/core';

/**
 * Project packages.
 */
import {AuthService} from './../user/index';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.template.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px}
        @media (max-width: 1200px) { #searchForm {display: none}}
        li > a.userIsOnThisPage { color: #F97924; }
    `]
})
export class NavbarComponent {
    constructor(private authService:AuthService) {

    }
}