import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component ({
    selector: 'cities-list',
    templateUrl: './cities-list.component.html',
    styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit{

    cities: ICity[];
    message: string;
    constructor(private _citiesService: CitiesService) {}

    ngOnInit(): void {

        this._citiesService.getCities().subscribe(
            (cities: ICity[]) => {
              this.cities = cities;
              if (!cities) this.message = " is Empty!"
            },
            (error: HttpErrorResponse) => {
              this.message =  'Error reading cities';
            }
          );
    }


    delete(id: number): void {

      this._citiesService.deleteCity(id).subscribe(
        () => {
          this.message = "City deleted Successful";
          this.cities = this.cities.filter(x => x.id !== id);
        },
        (error: HttpErrorResponse) => {
          this.message =  'Error deleting city';
        }
      );

    }
}
