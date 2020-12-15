import App from './App.svelte';
import { ReduxDevtoolsExtension, Store } from 'mini-rx-store';
import { counterFeatureName, counterReducer } from './state';

// Register Redux Dev Tools
Store.addExtension(new ReduxDevtoolsExtension({name: 'svelte mini rx'}));

// Register Counter Reducer
Store.feature(counterFeatureName, counterReducer);

const app = new App({
	target: document.body,
});

export default app;
