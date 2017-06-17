/**
 * NPM packages.
 */
import {Routes} from '@angular/router';

/**
 * Project packages.
 */
import {CreateEventComponent}   from './events/create-event.component';
import {Error404Component}      from './errors/404.component';
import {EventDetailsComponent}  from './events/event-details/event-details.component';
import {EventRouteActivator}    from './events/event-details/event-route-activator.service';
import {EventsListComponent}    from './events/events-list.component';

export const appRoutes:Routes = [
    /** @name errors */
    {path: '404', component: Error404Component},

    /** @name events */
    /**
     * IMPORTANT: 
     * 
     * 1. The order that you specify the routes really matter, because Angular can't distinguish between
     * 'events/new' and 'events/:id' without thinking that 'new' is actually a value for ':id'.
     * So, if you put the 'events/new' route first, it will match it first and not give you that problem.
     * 
     * 2. "canDeactivate" and "canActivate" can receive an array of "Services" or "functions".
     * If you use a function, you need to register it on the given "NgModule's" provider.
     */
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},

    /** @name default */
    {path: '', redirectTo: 'events', pathMatch: 'full'}
];