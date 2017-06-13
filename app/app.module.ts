/**
 * NPM Packages.
 */
import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser'; 

/**
 * Project packages.
 */
import {EventsAppComponent}         from './events-app.component';
import {EventsListComponent}        from './events/events-list.component'; 
import {EventThumbnailComponent}    from './events/event-thumbnail.component';
import {NavbarComponent}            from './nav/navbar.component';

@NgModule({
    /**
     * Components needs to be registred on a module in order to work.
     */
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent
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