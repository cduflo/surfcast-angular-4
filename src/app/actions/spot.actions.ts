import { Action } from '@ngrx/store';

export const TOGGLE_FAVORITE  = '[Spot] Toggle Favorite';
export const RESET      = '[Spot] Reset';
export const LOAD_FAILURE = '[Spots] failed to loads spots';
export const LOAD_SUCCESS = '[Spots] successfully loaded spots';
export const LOAD = '[Spots] load spots';

export class ToggleFavorite implements Action {
  readonly type = TOGGLE_FAVORITE;

  constructor(public payload: any) {}
  
}

export class Reset implements Action {
  readonly type = RESET;

  constructor(public payload: any) {}
  
}

export class LoadSpotsAction implements Action {
    type = LOAD;
    constructor(public payload: any) {}
}

export class LoadSpotsFailedAction implements Action {
    type = LOAD_FAILURE;

    constructor(public payload: any) {}
}

export class LoadSpotsSuccessAction implements Action {
    type = LOAD_SUCCESS;

    constructor(public payload: any) {}
}

export type All
  = Reset
  | ToggleFavorite
  | LoadSpotsFailedAction
  | LoadSpotsSuccessAction
  | LoadSpotsAction;
