// REDUCER with initial state

import { on, reducer } from 'ts-action';
import { decrementAction, incrementAction } from './actions';

export const counterFeatureName = 'counter';

export interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 666
}

export const counterReducer = reducer<CounterState>(
    initialState,
    on(incrementAction, ((state) => ({...state, count: state.count + 1}))),
    on(decrementAction, ((state) => ({...state, count: state.count - 1}))),
)

