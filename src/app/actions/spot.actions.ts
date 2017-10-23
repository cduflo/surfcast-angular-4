import { Action } from '@ngrx/store';

export const TOGGLE_FAVORITE  = '[Post] Toggle Favorite';
export const RESET      = '[Post] Reset';

export class ToggleFavorite implements Action {
  readonly type = TOGGLE_FAVORITE;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All
  = Reset
  | ToggleFavorite;
