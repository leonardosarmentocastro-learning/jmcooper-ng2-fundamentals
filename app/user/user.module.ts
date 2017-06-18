/**
 * NPM package.
 */
import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {RouterModule}   from '@angular/router';

/**
 * Project packages.
 */
import {ProfileComponent}   from './profile.component';
import {userRoutes}         from './user.routes';

@NgModule({
    /**
     * Components needs to be registred on a module in order to work.
     */
    declarations: [
        ProfileComponent
    ],

    /**
     * TODO: I don't why this needs to be done.
     * I think it is might be used to import "Angular modules" related stuff.
     */
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],

    /**
     * When you declare a service as a "@Injectable" and you want it to be usable on other components, you need
     * to specify it on the "providers" module attribute so Angular can correctly do the "dependency injection" on other modules for you.
     */
    providers: [

    ]
})
export class UserModule {

}