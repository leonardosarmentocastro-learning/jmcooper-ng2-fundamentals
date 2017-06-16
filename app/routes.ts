/**
 * NPM packages.
 */
import {Routes} from '@angular/router';

/**
 * Project packages.
 */
import {EventDetailsComponent}  from './events/event-details/event-details.component';
import {EventsListComponent}    from './events/events-list.component';

export const appRoutes:Routes = [
    /** @name events */
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent},

    /** @name default */
    {path: '', redirectTo: 'events', pathMatch: 'full'}
];