/**
 * NPM Packages.
 */
import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser'; 
import {RouterModule}   from '@angular/router';

/**
 * Project packages.
 */
import {appRoutes} from './routes';
import {EventDetailsComponent}      from './events/event-details/event-details.component';
import {EventsAppComponent}         from './events-app.component';
import {EventsListComponent}        from './events/events-list.component'; 
import {EventService}               from './events/shared/event.service';
import {EventThumbnailComponent}    from './events/event-thumbnail.component';
import {NavbarComponent}            from './nav/navbar.component';
import {ToastrService}              from './common/toastr.service';


@NgModule({
    /**
     * This is the top level componenet which will load all the other componenets.
     * Because of that, we need to tell Angular that the "EventsAppComponent" will be used
     * to bootstrap our application.
     */
    bootstrap: [
        EventsAppComponent
    ],

    /**
     * Components needs to be registred on a module in order to work.
     */
    declarations: [
        EventDetailsComponent,
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent
    ],

    /**
     * TODO: I don't why this needs to be done.
     * I think it is might be used to import "Angular modules" related stuff.
     */
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],

    /**
     * When you declare a service as a "@Injectable" and you want it to be usable on other components, you need
     * to specify it on the "providers" module attribute so Angular can correctly do the "dependency injection" on other modules for you.
     */
    providers: [
        EventService,
        ToastrService
    ]
})
export class AppModule {

}