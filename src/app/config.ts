import { environment } from '../environments/environment';
import { InjectionToken } from '@angular/core';

export const GET_HOTEL_URL = environment.getHotelInfoUrl;
export const GET_HOTEL_URL_TOKEN = new InjectionToken(GET_HOTEL_URL);

