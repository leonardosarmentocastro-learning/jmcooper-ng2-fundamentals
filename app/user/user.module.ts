/**
 * NPM package.
 */
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {NgModule}       from '@angular/core';
import {RouterModule}   from '@angular/router';

/**
 * Project packages.
 */
import {
    LoginComponent,
    ProfileComponent
} from './index';

/**
 * @name NOTE:
 * Don't know why but importing "userRoutes" from the "Barrel" `./index` was serving an `undefined  value.
 * So, I manually imported it. 
 */
import {userRoutes} from './user.routes';

@NgModule({
    /**
     * Components needs to be registred on a module in order to work.
     */
    declarations: [
        ProfileComponent,
        LoginComponent
    ],

    /**
     * TODO: I don't why this needs to be done.
     * I think it is might be used to import "Angular modules" related stuff.
     */
    imports: [
        CommonModule,
        
        /**
         * @name IMPORTANT:
         * In order to the 'ngForm' directive in our templates like "login.template", we need to import the "FormsModule"
         * and declare it here, otherwise it will throw errors when rendering the form.
         */
        FormsModule,

        RouterModule.forChild(userRoutes)
    ],

    /**
     * When you declare a service as a "@Injectable" and you want it to be usable on other components, you need
     * to specify it on the "providers" module attribute so Angular can correctly do the "dependency injection" on other modules for you.
     */
    providers: [
        /**
         * @name IMPORTANT:
         * Different from "imports" and "declarations", the "providers" from a "NgModule" are shared accross others "NgModules".
         * Since we are going to use the "AuthService" on the "navbar" and on the "login.component", which are defined on different modules,
         * we define them on the first level module, in this case, the "app.module" and not the "user.module".
         */
    ]
})
export class UserModule {

}