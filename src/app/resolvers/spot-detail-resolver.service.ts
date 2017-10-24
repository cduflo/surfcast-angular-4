import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { ForecastServiceService } from '../services/forecast-service.service';

@Injectable()
export class SpotDetailResolver implements Resolve<any> {
  constructor(private cs: ForecastServiceService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');

    return this.cs.getForecast(id);
  }
}
