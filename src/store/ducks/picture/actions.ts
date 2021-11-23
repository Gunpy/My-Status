import {createAction} from 'redux-actions';
import types from './types';
import Picture from '../../entities/Picture';

export default {
  setPicture: createAction<Picture>(types.SET_PICTURE),
};
