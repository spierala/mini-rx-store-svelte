import { createFeatureSelector, createSelector } from 'mini-rx-store';
import type { CounterState } from './reducer';
import { counterFeatureName } from './reducer';

export const getFeature = createFeatureSelector<CounterState>(counterFeatureName);
export const getCounter = createSelector(
    getFeature,
    state => state.count
);
