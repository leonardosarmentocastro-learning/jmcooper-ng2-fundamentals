/**
 * NPM Packages.
 */
import {Component, OnInit}  from '@angular/core';
import {ActivatedRoute}     from '@angular/router';

/**
 * Project packages
 */
import {EventService, IEvent} from './../shared/index';

@Component({
    templateUrl: '/app/events/event-details/event-details.template.html',
    styles: [`
        .container { padding-left:20px; padding-right: 20px;}
        .event-image { height: 100px; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event:IEvent;

    constructor(
        private eventService:EventService,
        private activatedRoute:ActivatedRoute) {

    }

    ngOnInit(): void {
        let id = this.activatedRoute.snapshot.params['id'];
        id     = Number(id);

        this.event = this.eventService.getEvent(id);
    }

}