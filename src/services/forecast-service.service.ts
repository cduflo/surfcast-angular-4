import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Response, Http, Headers, RequestOptions, Jsonp} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Spots } from '../app/models/spot.model';

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
    private http: HttpClient,
    private jsonp: Jsonp
  ) { }
  private _baseUrl = 'http://api.spitcast.com/api';

  getCounties() {
    return this.counties;
  }

  getSpotss(county: string) {
    return null
    // console.log(county);
    // const countyName = county.replace(/\s+/g, '-').toLowerCase();
    // return this.http.get(`${this._baseUrl}/county/spots/${countyName}`);
  }

  loadSpots() {
    // console.log('hi')
    // // const spot = {name: 'churches', id: '1', favorite: true};
    // // return Observable.mapTo(spot);
    // // return null
    return this.http.get(`${this._baseUrl}/spot/all`)
    // .subscribe(data => {console.log(data); return data;})
    // .map(res => console.log(res));//res.json());

    // let url = `${this._baseUrl}/spot/all`;
    // return this.jsonp.request(url)
    // .map(res => {
    //   console.log(res.json());
    //   return res['_body'];
    // })
    // .catch(err => console.log(err))


  }

  getForecast(spotId: number) {

    return null
    // console.log(spotId);
    // return this.http.get(`${this._baseUrl}/spot/forecast/${spotId}`);
  }
}
