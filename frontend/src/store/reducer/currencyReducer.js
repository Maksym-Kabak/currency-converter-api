const initialState = {
  currency: [],
  loading: false,
  error: null
};

export const FETCH_CURRENCY = 'FETCH_CURRENCY';
export const FETCH_CURRENCY_SUCCESS = 'FETCH_CURRENCY_SUCCESS';
export const FETCH_CURRENCY_ERROR = 'FETCH_CURRENCY_ERROR';

export const CURRENCY_DETAIL = 'CURRENCY_DETAIL';
export const CURRENCY_DETAIL_SUCCESS = 'CURRENCY_DETAIL_SUCCESS';
export const CURRENCY_DETAIL_ERROR = 'CURRENCY_DETAIL_ERROR';

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENCY :
      return { loading: true, error: null, currency: [] };
    case FETCH_CURRENCY_SUCCESS :
      return { loading: false, error: null, currency: action.payload };
    case FETCH_CURRENCY_ERROR :
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const currencyDetailReducer = (state = { currency: [] }, action) => {
  switch (action.type) {
    case CURRENCY_DETAIL:
      return { loading: true, error: null, ...state };
    case CURRENCY_DETAIL_SUCCESS:
      return { loading: false, error: null, currency: action.payload };
    case CURRENCY_DETAIL_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
