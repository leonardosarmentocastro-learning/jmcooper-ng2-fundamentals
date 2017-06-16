/**
 * NPM Packages.
 */
import {Component, OnInit} from '@angular/core';

/**
 * Project packages.
 */
import {EventService} from './shared/event.service';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr/>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail [event]="event">
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
    events:any[];
    constructor(private eventsService:EventService) {

    }

    ngOnInit(): void {
        this.events = this.eventsService.getEvents();
    }
}