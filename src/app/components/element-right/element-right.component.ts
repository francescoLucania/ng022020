import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'element-right',
  templateUrl: './element-right.component.html',
  styleUrls: ['./element-right.component.scss']
})
export class ElementRightComponent implements OnInit {

  @Input() activeHotelInformation!: any;

  public activeSocialInfo!: any;

  constructor() {

  }

  ngOnInit(): void {
    this.activeSocialInfo = this.activeHotelInformation.social_info;
  }

}
