import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRightComponent } from './element-right.component';

describe('ElementRightComponent', () => {
  let component: ElementRightComponent;
  let fixture: ComponentFixture<ElementRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
