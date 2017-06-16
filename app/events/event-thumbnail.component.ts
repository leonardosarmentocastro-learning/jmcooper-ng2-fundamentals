import {Component, Input} from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div
            [routerLink]='["/events", event.id]' 
            class='well hoverwell thumbnail'>
            <h2>{{event?.name}}</h2>
            
            <div>Date: {{event?.date}}</div>
            <div
            class="well"
            [ngClass]="getStartTimeClass()"
            [ngSwitch]="event?.time">
                Time: {{event.time}}
                <span *ngSwitchCase="'8:00 am'">(Early start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event.location.address}}</span>
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
            </div>
            <div [hidden]="!event?.onlineUrl">
                Online URL: {{event.onlineUrl}}
            </div>
        </div>
    `,
    styles: [`
        .bold       { font-weight: bold !important; }
        .green      { color: green !important; }
        .thumbnail  { min-height: 210px; }
        .pad-left   { margin-left: 10px; }
        .well div   { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event:any;

    /**
     * @description
     * The "[ngClass]" attribute expects 3 types of returns:
     * 1. An object following the structure, E.g.: {cssClassName1: boolean, cssClassName2: boolean, ...}
     * Where the boolean tells if this class should be attached or not to the given element.
     * 2. A string contaning all the "css classes" that you want to apply.
     * E.g.: "cssClassName1, cssClassName2".
     * 3. An array of strings contaning all the "css classes" that you want to apply.
     * E.g.: ["cssClassName1, cssClassName2"].
     */
    getStartTimeClass() {
        let time:string             = '8:00 am';
        let isEarlyStart:boolean    = (this.event && this.event.time === time);

        /**
         * Approach n.1:
         *
         */
        // let cssClasses:object = {green: isEarlyStart, bold: isEarlyStart};
        // return cssClasses;

        /**
         * Approach n.2:
         */
        // let cssClasses:string   = 'green bold';
        // let noCssClasses:string = '';

        // return isEarlyStart ? cssClasses : noCssClasses;

        /**
         * Approach n.3:
         */
        let cssClasses:Array<String>    = ['green', 'bold'];
        let noCssClasses:Array<String>  = [];

        return isEarlyStart ? cssClasses : noCssClasses;
    }
}