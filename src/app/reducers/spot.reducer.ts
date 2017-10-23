import * as SpotActions from '../actions/spot.actions';
import { Spot } from '../models/spot.model';

export type Action = SpotActions.All;

/// Default app state
const defaultState: Spot = {
    id: '1',
  name: 'Place',
  favorite: false
};

/// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

/// Reducer function
export function spotReducer(state: Spot = defaultState, action: Action) {
  console.log(action.type, state);
    switch (action.type) {
        case SpotActions.TOGGLE_FAVORITE:
            return newState(state, { favorite: !state.favorite });
        case SpotActions.RESET:
            return defaultState;
        default:
            return state;
    }
}
