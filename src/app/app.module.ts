import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }   from '@angular/common/http';
import { AppComponent } from './app.component';
import { ElementLeftComponent } from './components/hotel-card/element-left/element-left.component';
import { ElementRightComponent } from './components/hotel-card/element-right/element-right.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { GET_HOTEL_URL, GET_HOTEL_URL_TOKEN } from './config';
import { ModalHotelCardComponent } from './components/modal-hotel-card/modal-hotel-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
import {ModalModule} from "./components/modal/modal.module";
import {ModalService} from "./components/modal/modal.service";


@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    ElementRightComponent,
    HotelCardComponent,
    ModalHotelCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ModalModule.forRoot()
  ],
  providers: [
    ModalService,
    {
      provide: GET_HOTEL_URL_TOKEN,
      useValue: GET_HOTEL_URL
    }
  ],
  entryComponents: [
      ModalHotelCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
