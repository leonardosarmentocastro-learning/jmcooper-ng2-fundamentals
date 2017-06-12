/**
 * NPM Packages.
 */
import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser'; 

/**
 * Project packages.
 */
import {EventsAppComponent} from './events-app.component';

@NgModule({
    /**
     * Components needs to be registred on a module in order to work.
     */
    declarations: [
        EventsAppComponent
    ],

    /**
     * TODO: I don't why this needs to be done.
     */
    imports: [
        BrowserModule
    ],

    /**
     * This is the top level componenet which will load all the other componenets.
     * Because of that, we need to tell Angular that the "EventsAppComponent" will be used
     * to bootstrap our application.
     */
    bootstrap: [
        EventsAppComponent
    ]
})
export class AppModule {

}