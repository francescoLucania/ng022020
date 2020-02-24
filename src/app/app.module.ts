import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }   from '@angular/common/http';
import { AppComponent } from './app.component';
import { ElementLeftComponent } from './components/hotel-card/element-left/element-left.component';
import { ElementRightComponent } from './components/hotel-card/element-right/element-right.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { GET_HOTEL_URL, GET_HOTEL_URL_TOKEN } from './config';

@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    ElementRightComponent,
    HotelCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: GET_HOTEL_URL_TOKEN,
      useValue: GET_HOTEL_URL
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
