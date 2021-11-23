import {combineReducers} from 'redux';
import {reducer as pictureReducer} from './ducks/picture';
import State from './entities/State';

export const rootReducer = combineReducers<State>({
  picture: pictureReducer,
});
