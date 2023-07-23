import {
  actions as seriesActions,
  reducer as seriesReducer,
  name as seriesName,
} from './series/slice';

import {
  actions as personActions,
  reducer as personReducer,
  name as personName,
} from './person/slice';

import * as seriesSelectors from './series/selector';
import * as personSelectors from './person/selector';

import {configureStore, Middleware} from '@reduxjs/toolkit';

import {
  useSelector as _useSelector,
  useDispatch as _useDispatch,
} from 'react-redux';

import {setupListeners} from '@reduxjs/toolkit/dist/query';

import baseQueryAPI from './baseApi';

const storeMiddlewares = [];
storeMiddlewares.push(baseQueryAPI.middleware);

export const createStore = () => {
  const store = configureStore({
    reducer: {
      [baseQueryAPI.reducerPath]: baseQueryAPI.reducer,
      [seriesName]: seriesReducer,
      [personName]: personReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(...storeMiddlewares),
  });
  setupListeners(store.dispatch);
  return store;
};

export const store = createStore();

export const actions = {
  [seriesName]: seriesActions,
  [personName]: personActions,
};

export const selectors = {
  [seriesName]: seriesSelectors,
  [personName]: personSelectors,
};

export const useDispatch = () => _useDispatch();
export const useSelector = _useSelector;
