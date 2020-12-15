<script lang="ts">
	import { count, increment, decrement } from "./state";
</script>

<main>
	<h1>Counter {$count}!</h1>

	<button on:click={increment}>Increment</button>
	<button on:click={decrement}>Decrement</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
