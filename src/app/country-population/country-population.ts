import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PopulationData } from './population-data';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-country-population',
  imports: [],
  templateUrl: './country-population.html',
  styleUrl: './country-population.scss'
})
export class CountryPopulation {
      country!: PopulationData;
    constructor(http: HttpClient) {
    http.get<PopulationData>(environment.apiurl+"api/Countries/Population").subscribe(result => {
      this.country= result;
    });
  }

}
