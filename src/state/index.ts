// Public State API
// RxJS Observables exposing current state
// Public methods to change state

import { Store } from 'mini-rx-store';
import { decrementAction, incrementAction } from './actions';
import { getCounter } from './selectors';
import type { Observable } from 'rxjs';

export * from './reducer';

export const count: Observable<number> = Store.select(getCounter);

export function increment() {
    Store.dispatch(incrementAction())
}

export function decrement() {
    Store.dispatch(decrementAction())
}
