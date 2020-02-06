import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }   from '@angular/common/http';
import { AppComponent } from './app.component';
import { ElementLeftComponent } from './components/element-left/element-left.component';
import { ElementRightComponent } from './components/element-right/element-right.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
