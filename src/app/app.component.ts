import {Component, OnInit} from '@angular/core';
import {dataService} from "./services/dataService/data.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    // @ts-ignore
    public appData!: any;

    constructor (private dataService: dataService) {

    }

    public title!: 'appTitle';

    public activeHotel!: Object;

    public ngOnInit(): void {
        this.dataService.getAppInfo().subscribe((data: any)=>{
            this.appData = data['mockData'];
        });

        setTimeout(()=> {
        }, 1500);

    }
}
