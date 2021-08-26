import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseService } from "../base.service";

@Injectable()
export class CitiesService{


    constructor(private _citiesEndpoint: CitiesEndpoint,
        private _http: HttpClient) {
        }

    getCities(): Observable<ICity[]> {  
        return this._http.get<ICity[]>(this._citiesEndpoint.getBaseUrl() + 'api/cities');  
    }  

    deleteCity(id: number): Observable<ICity> {  
        return this._http.delete<ICity>(`${this._citiesEndpoint.getBaseUrl()}api/cities/delete-city/${id}`)  
    }  
       
}
