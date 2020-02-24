import {
    Injectable,
    Inject
} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {GET_HOTEL_URL_TOKEN} from "../../config";

@Injectable({
    providedIn: 'root'
})

export default class dataService {
    constructor(
        private httpClient: HttpClient,
        @Inject(GET_HOTEL_URL_TOKEN) private getHotelInfoUrl: string,
    ) {
    }

    public getHotelInfo() {
        console.log('httpClient', this.httpClient);
        return this.httpClient.get(this.getHotelInfoUrl)
    }
}
