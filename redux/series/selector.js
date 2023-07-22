import {createSelector} from '@reduxjs/toolkit';

export const selectSelf = store => store.series;

export const selectUpcomingMovies = createSelector(
  selectSelf,
  state => state.confirm,
);
