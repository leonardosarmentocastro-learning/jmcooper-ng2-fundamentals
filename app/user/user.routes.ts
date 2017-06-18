/**
 * NPM packages.
 */
import {Routes} from '@angular/router';

/**
 * Project packages.
 */
import {ProfileComponent} from './profile.component';

export const userRoutes:Routes = [
    {path: 'profile', component: ProfileComponent}
];