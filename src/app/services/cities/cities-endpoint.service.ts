import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { ICity } from "../../models/city.model";

@Injectable()
export class CitiesEndpoint extends BaseService {

    private url = `${this.getBaseUrl()}api/cities`;
    
    constructor(private _httpClient: HttpClient, private _injector: Injector) {
        super(_httpClient, _injector);
    }
    public getCities(): Observable<ICity[]> {
        return this._httpClient.get<ICity[]>(this.url, this.getRequestHeaders());
    }

    public deleteCity(id: number): Observable<void> {
        return this._httpClient.delete<void>(`${this.url}/delete-city/${id}`, this.getRequestHeaders());
    }

}
