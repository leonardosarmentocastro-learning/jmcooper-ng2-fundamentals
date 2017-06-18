/**
 * NPM Packages.
 */
import {Component, OnInit}  from '@angular/core';
import {ActivatedRoute}     from '@angular/router';

/**
 * Project packages.
 */
import {EventService}   from './shared/event.service';
import {IEvent}         from './shared/index';
import {ToastrService}  from './../common/toastr.service';

@Component({
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail 
                        [event]="event"
                        (click)="handleThumbnailClick(event.name)">
                    </event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    /**
     * Approach n.1:
     * Declare the service to be used in your class and then bind it on your class' constructor.
     */
    // eventsService: EventService;
    // events:any[];

    // constructor(eventsService: EventService) {
    //     this.eventsService = eventsService;
    // }

    /**
     * Approach n.2:
     * Use the "Typescript" syntax sugar for the "Approach n.1".
     */
    // events:any[];
    // constructor(private eventsService:EventService) {

    // }

    events:IEvent[];
    constructor(
        private activatedRoute:ActivatedRoute,
        private eventsService:EventService, 
        private toastrService:ToastrService) {

    }

    ngOnInit(): void {
        /**
         * This is the resolved "events" property done by the "routes.ts" -> "EventsListResolver".
         */
        let resolved = {
            events: this.activatedRoute.snapshot.data['events']
        };

        this.events = resolved.events;
    }

    handleThumbnailClick(name:string) {
        let message = name;
        this.toastrService.success(message);
    }
}