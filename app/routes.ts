/**
 * NPM packages.
 */
import {Routes} from '@angular/router';

/**
 * Project packages.
 */
import {
    CreateEventComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventsListComponent,
    EventsListResolver
}                           from './events/index';
import {Error404Component}  from './errors/404.component';

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
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']}, // Refers to "IMPORTANT": 1. / 2.
    {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},

    /** @name user */
    /**
     * IMPORTANT:
     * 
     * The "loadChildren" attribute will "Lazy load" the module specified on the "path" provided to it.
     * This path is specified as: 
     *  `${pathToModuleFile}#${exportedModuleName}`
     * So, if your module can be found at "app/user/user.module.ts" and the exported class name is "UserModule", you must provide
     * a path like: 
     *  "app/user/user.module#UserModule".
     */
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},

    /** @name default */
    {path: '', redirectTo: 'events', pathMatch: 'full'}
];