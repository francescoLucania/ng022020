import {Component, OnInit} from '@angular/core';
import dataService from "./services/dataService/data.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

    constructor (private dataService: dataService) {
    }

    public title!: String;

    public activeHotel!: any;

    public appData!: any;

    public ngOnInit(): void {
        this.title = 'Hotels Card';

        console.log('dataService', dataService)

        this.dataService.getHotelInfo().subscribe((data: any)=> {
            console.log(data);
            this.appData = data['mockData'];
        });
    }
}
