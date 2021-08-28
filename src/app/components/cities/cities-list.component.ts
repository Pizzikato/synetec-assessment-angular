import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component({
  selector: 'cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})

export class CitiesListComponent implements OnInit {

  cities: ICity[];
  message: string;
  constructor(private _citiesService: CitiesService) { }

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
    this._citiesService.getCities().subscribe(
      (cities: ICity[]) => {
        this.cities = cities;
      },
      (error: HttpErrorResponse) => {
        this.message = 'Error loading cities';
      }
    );
  }

  delete(city: ICity) {

    if (confirm(`Are you sure you wish to delete ${city.name} city ?`)) {
      this._citiesService.deleteCity(city.id).subscribe(() => {
        if (environment.production) this.getCities();
        else {
          const index = this.cities.findIndex(c => c.id === city.id);
          this.cities.splice(index, 1);
        }
        this.message = "City deleted Successful";
      });
    }

  }
}
