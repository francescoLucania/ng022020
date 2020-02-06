import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  public activeHotel!: any;

  @Input()
  public hotels!: any;
  @Input()
  public hotelInformation!: any;
  @Output()
  public currentHotelEvent: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.currentHotel(0);
  }

  public currentHotel(index: number) {
    this.initActiveHotel(this.hotels[index]);
  }

  public initActiveHotel(hotel: object) {
    this.activeHotel = hotel;
  }

}
