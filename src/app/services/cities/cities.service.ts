import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BaseService } from "../base.service";

@Injectable()
export class CitiesService{


    constructor(private _citiesEndpoint: CitiesEndpoint) {
        }

    getCities(): Observable<ICity[]> {  
        return this._citiesEndpoint.getCities();  
    }  

    deleteCity(id: number): Observable<ICity> {  
        return this._citiesEndpoint.deleteCity(id); 
    }  
       
}
