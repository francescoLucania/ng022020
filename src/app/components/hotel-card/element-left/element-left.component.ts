import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as $ from "jquery";
import { AsYouType } from 'libphonenumber-js'


@Component({
    selector: 'element-left',
    templateUrl: './element-left.component.html',
    styleUrls: ['./element-left.component.scss']
})

export class ElementLeftComponent implements OnInit {

    @Input()
    public hotelInformation!: any;

    @Input()
    public activeHotelInformation!: any;

    @Output()
    public currentHotel: EventEmitter<any>= new EventEmitter<any>();
    constructor() {}

    ngOnInit(): void {
        this.hotelInformation;
        this.objectInitScrollBar();
    }

    objectInitScrollBar() {
        // @ts-ignore
        $(document).on(()=> {
            $('.log-close').on('click', function () {
                $('.login-bottom').fadeOut('slow', function () {
                    $('.login-bottom').remove();
                });
            });
        });
        // scrollbar start
    }

    phoneNumber(stringNumber: string) {
        return new AsYouType().input(stringNumber)
    }
}
