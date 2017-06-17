/**
 * NPM packages.
 */
import {Injectable}                                             from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot}   from '@angular/router';

/**
 * Project packages.
 */
import {EventService} from './shared/event.service';

@Injectable()
export class EventsListResolver implements Resolve<any> {
    constructor(private eventService:EventService) {

    }
    
    /**
     * This is like the "resolve" property from "Angular.js".
     * @param route
     * @param state 
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        /**
         * We don't call "subscribe" here because "subscribe" doesn't return an Observable neither a Promise, which
         * are the types expected to be returned by the "resolve" property.
         */
        return this.eventService.getEvents()
            .map(events => {
                return events;
            });
    }

}