import { combineReducers } from "redux";
import { cities } from './cities';
import { cityDetails } from './cityDetails';

export default combineReducers({ cities, cityDetails });