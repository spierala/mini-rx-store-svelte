import { Store } from 'mini-rx-store';
import { decrementAction, incrementAction } from './actions';
import { getCounter } from './selectors';

export * from './reducer';

export const count = Store.select(getCounter);

export function increment() {
    Store.dispatch(incrementAction())
}

export function decrement() {
    Store.dispatch(decrementAction())
}
