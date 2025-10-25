import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PopulationData } from './population-data';
import { environment } from '../../environments/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-population',
  imports: [RouterLink],
  templateUrl: './country-population.html',
  styleUrl: './country-population.scss'
})
export class CountryPopulation implements OnInit {
      country_pop!: PopulationData;
    constructor(private http: HttpClient,private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    let id_param = this.activatedRoute.snapshot.paramMap.get('id');
     this.http.get<PopulationData>(`${environment.apiurl}api/Countries/Population/${id_param}`).subscribe(result => {
      this.country_pop= result;
    });
  }

}
