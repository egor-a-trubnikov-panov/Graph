import { combineReducers } from 'redux-loop';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';
import { reducer as form } from 'redux-form';
import course from './cource';

const reducers = combineReducers({
  reduxAsyncConnect,
  form,
  routing,
  course
});

export default reducers;
