import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Spot } from '../app/models/spot.model';

@Injectable()
export class ForecastServiceService {
  counties = ['San Francisco',
  'San Mateo',
  'Marin',
  'Santa Barbara',
  'Santa Cruz',
  'Monterey' ,
  'San Luis Obispo',
  'Ventura',
  'Los Angeles',
  'Orange County',
  'San Diego'
];

  constructor(
    // private http: Http
  ) { }
  private _baseUrl = 'http://api.spitcast.com/api';

  getCounties() {
    return this.counties;
  }

  getSpots(county: string) {
    return null
    // console.log(county);
    // const countyName = county.replace(/\s+/g, '-').toLowerCase();
    // return this.http.get(`${this._baseUrl}/county/spots/${countyName}`);
  }

  loadSpots(): Observable<Spot[]> {
    return null
    // return this.http.get(`${this._baseUrl}/spot/all`)
    // .map(res => res.json());
  }

  getForecast(spotId: number) {
    return null
    // console.log(spotId);
    // return this.http.get(`${this._baseUrl}/spot/forecast/${spotId}`);
  }
}
