import {
  CURRENCY_DETAIL, CURRENCY_DETAIL_ERROR, CURRENCY_DETAIL_SUCCESS,
  FETCH_CURRENCY,
  FETCH_CURRENCY_ERROR,
  FETCH_CURRENCY_SUCCESS
} from '../reducer/currencyReducer';
import axios from 'axios';


export const fetchCurrency = (keyword = '') =>  async (dispatch)  =>  {
    try {
      dispatch({ type: FETCH_CURRENCY });
      const response = await axios.get(`/api/currency?keyword=${ keyword }`);
      dispatch({ type: FETCH_CURRENCY_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({
        type: FETCH_CURRENCY_ERROR,
        payload: e.response && e.response.data.message
          ? e.response.data.message
          : e.message
      });
    }
};

export const currencyDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: CURRENCY_DETAIL });

    const { data } = await axios.get(`/api/currency/${ id }`);

    dispatch({
      type: CURRENCY_DETAIL_SUCCESS,
      payload: data
    });
  } catch (e) {
    dispatch({
      type: CURRENCY_DETAIL_ERROR,
      payload: e.response && e.response.data.message
        ? e.response.data.message
        : e.message
    });
  }
};

