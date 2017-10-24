import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import * as spots from '../actions/spot.actions';


import {Actions, Effect} from '@ngrx/effects';
import { ForecastServiceService } from './../services/forecast-service.service';
import {LoadSpotsSuccessAction} from '../actions/spot.actions';
import {LoadSpotsFailedAction} from '../actions/spot.actions';

@Injectable()
export class SpotEffects {
    constructor(
        private _actions: Actions,
        private _service: ForecastServiceService
    ) {}

    @Effect() loadSpots$ = this._actions.ofType(spots.LOAD)
    .switchMap(() => this._service.loadSpots()
    .map((spots) =>  new LoadSpotsSuccessAction(spots)))
    .catch(() => Observable.of( new LoadSpotsFailedAction({}))); 
}
