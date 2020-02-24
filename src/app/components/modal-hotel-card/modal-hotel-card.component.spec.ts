import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHotelCardComponent } from './modal-hotel-card.component';

describe('ModalHotelCardComponent', () => {
  let component: ModalHotelCardComponent;
  let fixture: ComponentFixture<ModalHotelCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHotelCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHotelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
