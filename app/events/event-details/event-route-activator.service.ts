/**
 * NPM packages.
 */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

/**
 * Project packages.
 */
import {EventService} from './../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(
        private eventService:EventService,
        private router:Router) {

    }

    canActivate(activatedRoute: ActivatedRouteSnapshot) {
        let canActivate = true;

        let id          = Number(activatedRoute.params['id']);
        let event       = this.eventService.getEvent(id);
        let hasEvent    = Boolean(event);
        if (hasEvent) {
            return canActivate;
        }

        let route = ['/404'];
        this.router.navigate(route);
    }
}