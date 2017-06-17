/**
 * NPM Packages.
 */
import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser'; 
import {RouterModule}   from '@angular/router';

/**
 * Project packages.
 */
import {appRoutes}                  from './routes';
import {CreateEventComponent}       from './events/create-event.component';
import {Error404Component}          from './errors/404.component';
import {EventDetailsComponent}      from './events/event-details/event-details.component';
import {EventRouteActivator}        from './events/event-details/event-route-activator.service';
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
        CreateEventComponent,
        Error404Component,
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
        EventRouteActivator,
        
        /** NOTE: This is a "syntax sugar" and Could also be written as: */
        /** {provide: EventService, useValue: EventService} */
        EventService,
        ToastrService,

        /**
         * As we are using a "function" as a "canDeactivate" provider on "events/new" routes, we need to
         * defined it here to be able to use it.
         * This is the "non sugar syntax" for providers, because we are using a function here, which means:
         * When you find a reference to "canDeactivateCreateEvent", use this function "checkDirtyState".
         */
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ]
})
export class AppModule {}

/**
 * Used to check if a user can leave a route or not.
 * @param component
 */
function checkDirtyState(component: CreateEventComponent) {
    let canDeactivate = true;
    if (component.isDirty) {
        let message = 'You have not saved this event, do you really want to cancel?';
        return window.confirm(message);
    }

    return canDeactivate;
}