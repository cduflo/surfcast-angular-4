import * as SpotActions from '../actions/spot.actions';
import { Spots } from '../models/spots.model';

export type Action = SpotActions.All;

/// Default app state
const defaultState: Spots = {
    loaded: false,
    loading: false,
    entities: []
};

/// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

/// Reducer function
export function spotReducer(state: Spots = defaultState, action: Action) {
  console.log(action.type, state);
    switch (action.type) {
        case SpotActions.TOGGLE_FAVORITE:
            return newState(state, { 
                // favorite: !state.favorite 
            });
        case SpotActions.RESET:
            return defaultState;
        case SpotActions.LOAD: {
            return Object.assign({}, state, { loading: true }); 
            } 
        case SpotActions.LOAD_SUCCESS: { 
            const spots = action.payload; 
            console.log(spots);
            return Object.assign({}, state ,{ loaded: true, loading: false, entities: spots }); 
        } 
        case SpotActions.LOAD_FAILURE: { 
            return Object.assign({}, state ,{ loaded: true, loading: false, entities:[]}); 
        }

         default:
            return state;
    }
}

