// import { Spot } from './../spot';
// import { SpotActions } from '../actions/spotAction';
import { ForecastServiceService } from './../../services/forecast-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Spots } from '../models/spots.model';
import * as SpotActions from '../actions/spot.actions';

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

  // spots$: Observable<Spot[]>;

  spot: Observable<Spots>;

  constructor(
    private store: Store<AppState>,
    private service: ForecastServiceService, private router: Router
  ) {
    this.spot = this.store.select('spot');
    console.log(this.spot);
  }

  // ngOnInit() {
  //   this.counties = this.service.getCounties();
  //   console.log(this.counties);
  // }

  ngOnInit() {
    // this.spots$ = Observable.combineLatest(
    //   this.store.select('spot'),
    //   (spots: any) => {
    //     console.log(spots.data);
    //     return spots.data ? spots.data : [];
    //   }
    // );

    this.service.getCounties()
    .then(counties => {
      this.counties = counties;
      this.countySelection = counties[0];
      this.loadSpots();
    })
    .catch(err => console.log(err));
  }

  loadSpots() {
    this.store.dispatch(new SpotActions.LoadSpotsAction(1));
    // this.service.loadSpots();
  }

  toggleFavorite(entity) {
    console.log(entity);
    entity.favorite = !entity.favorite;
  }

  goToSpot(spot: string) {
    console.log(spot)

    const link = ['/spot', spot];
    this.router.navigate(link);
  }

  toggle() {
    this.store.dispatch(new SpotActions.ToggleFavorite({}))
  }

  resetSpot() {
    this.store.dispatch(new SpotActions.Reset({}))
  }

}