// Component
import {handleActions, ReducerNextThrow} from 'redux-actions';

// Modules
import types from './types';
import State from '../../entities/State';

const initialState: State = {
  picture: undefined,
};

const setPicture: ReducerNextThrow<State, any> = {
  next: (state, {payload}) => {
    return payload;
  },
};

export default handleActions<State, any>(
  {
    [types.SET_PICTURE]: setPicture,
  },
  initialState,
);
