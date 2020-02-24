import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'element-right',
  templateUrl: './element-right.component.html',
  styleUrls: ['./element-right.component.scss']
})
export class ElementRightComponent implements OnInit {

  @Input() activeHotelInformation!: any;

  constructor() {

  }

  ngOnInit(): void {
  }

}
