import {Component, OnInit } from '@angular/core';
import { CountryData } from './country-data';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-country',
  imports: [RouterLink],
  templateUrl: './country.html',
  styleUrl: './country.scss'
})
export class Country implements OnInit {
    countries: CountryData[] = [];
    constructor(private http: HttpClient) {  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get<CountryData[]>(environment.apiurl+"api/Countries").subscribe({
      next: result => this.countries= result,
      error: e => console.log(e)
    });
  }
}
