import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Spots } from '../models/spots.model';
import * as SpotActions from '../actions/spot.actions';
import { ForecastServiceService } from './../services/forecast-service.service';

interface AppState {
  spot: Spots;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  imagePath = 'assets/images/surfcast.jpeg';
  counties: Array<String>;
  countySelection: String;
  spot: Observable<Spots>;

  constructor(
    private store: Store<AppState>,
    private service: ForecastServiceService, private router: Router
  ) {
    this.spot = this.store.select('spot');
  }

  ngOnInit() {
    this.counties = this.service.getCounties();
    this.countySelection = this.counties[0];
    this.loadSpots();
  }

  loadSpots() {
    this.store.dispatch(new SpotActions.LoadSpotsAction(1));
  }

  toggleFavorite(entity) {
    entity.favorite = !entity.favorite;
  }

  goToSpot(spot: string) {
    const link = ['/spot', spot];
    this.router.navigate(link);
  }

  toggle() {
    this.store.dispatch(new SpotActions.ToggleFavorite({}));
  }

  resetSpot() {
    this.store.dispatch(new SpotActions.Reset({}));
  }

}