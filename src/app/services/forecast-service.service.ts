import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Spots } from '../models/spots.model';

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
    private http: HttpClient
  ) { }
  private _baseUrl = 'http://api.spitcast.com/api';

  getCounties() {
    return this.counties;
  }

  loadSpots() {
    return this.http.get(`${this._baseUrl}/spot/all`);
  }

  getForecast(spotId: string) {
    return this.http.get(`${this._baseUrl}/spot/forecast/${spotId}/`);
  }
}
