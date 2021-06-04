import { combineReducers } from 'redux';
import { currencyDetailReducer, currencyReducer } from './currencyReducer';

export const rootReducer = combineReducers({
  currencyPb: currencyReducer,
  currencyDetailsList: currencyDetailReducer
});
