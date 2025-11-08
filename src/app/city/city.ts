import { Component } from '@angular/core';
import { CityData } from './city-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-city',
  imports: [AsyncPipe],
  templateUrl: './city.html',
  styleUrl: './city.scss'
})
export class City {
      cities$: Observable<CityData[]>;
    constructor(http: HttpClient) {
    this.cities$ = http.get<CityData[]>(environment.apiurl+"api/Cities");
  }

}
