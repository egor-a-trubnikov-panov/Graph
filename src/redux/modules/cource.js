import { createAction, createReducer } from 'redux-act';
import { loop, Effects } from 'redux-loop';
import moment from 'moment';
import client from '../../helpers/apiClient';

export const get = createAction('cource/GET');
export const setCourse = createAction('cource/setCourse');
const getSuccess = createAction('cource/GET_SUCCESS');
const getFailure = createAction('cource/GET_FAILURE');

const isBrowser = typeof window !== 'undefined';

function addToStack(stack = [], newValue = '') {
  if (stack.length > 10) {
    stack.shift(1);
  }
  stack.push(newValue);
  return [...stack];
}

function getNewRateObjects({ Name, Rate }) {
  this.rateList.push(Name);

  this.rateHistoryMap[Name] = addToStack(
    this.rateHistoryMap[Name],
    {
      x: moment().format('LTS'),
      y: Rate
    });

  this.rateBarList.push({
    x: Name,
    y: Rate
  });
}

function getRateHistoryMap() {
  if (isBrowser) {
    return JSON.parse(window.localStorage.getItem('rateHistoryMap')) || {};
  }
  return {};
}

function saveRateHistoryMap(rateHistoryMap) {
  if (isBrowser) {
    window.localStorage.setItem('rateHistoryMap', JSON.stringify(rateHistoryMap));
  }
}

function getSelectedValue() {
  if (isBrowser) {
    return window.localStorage.getItem('selectedValue') || 'USD/RUB';
  }
  return {};
}

function saveSelectedValue(selectedValue) {
  if (isBrowser) {
    window.localStorage.setItem('selectedValue', selectedValue);
  }
  return selectedValue;
}

function buildRateObject(oldRateHistoryMap, rate) {
  const newRateObjects = {
    rateList: [],
    rateHistoryMap: oldRateHistoryMap,
    rateBarList: []
  };
  rate.forEach(getNewRateObjects, newRateObjects);
  saveRateHistoryMap(newRateObjects.rateHistoryMap);
  return newRateObjects;
}

const initialState = {
  rateList: [],
  rateHistoryMap: {},
  rateBarList: [],
  selectedValue: 'USD/RUB'
};

const fetch = () => client.get('/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20("USDRUB"%2C%20"EURRUB"%2C"JPYRUB")&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
  .then(getSuccess)
  .catch(getFailure);

const handleGet = state =>
  loop(
    {
      ...state,
      rateHistoryMap: getRateHistoryMap(),
      selectedValue: getSelectedValue(),
      isLoading: true,
      isLoaded: false
    },
    Effects.promise(fetch)
  );

const handleGetSuccess = (state, { data: { query: { results: { rate } } } }) => ({
  ...state,
  isLoading: false,
  isLoaded: true,
  ...buildRateObject(state.rateHistoryMap, rate)
});

const handleGetFailure = state => ({
  ...state,
  isLoading: false,
  isLoaded: false,
  error: 'error'
});

const handleSetCourse = (state, value) => ({
  ...state,
  selectedValue: saveSelectedValue(value)
});

const reducer = createReducer(on => {
  on(get, handleGet);
  on(setCourse, handleSetCourse);
  on(getSuccess, handleGetSuccess);
  on(getFailure, handleGetFailure);
}, initialState);

export const isLoaded = ({ cource }) => cource && cource.isLoaded;

export default reducer;
