import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class dataService {
    constructor(private httpClient: HttpClient) {

    }

    public getAppInfo() {
        return this.httpClient.get('./assets/data.json')
    }
}
