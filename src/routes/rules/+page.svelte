<script lang="ts">
	import { rules } from '$lib/rules';
</script>

{#each rules as rule}
	<h1 id={rule.key}>{rule.title}</h1>
	<p>{rule.description}</p>
	{#if rule.examples}
		{#each rule.examples as example}
			<ul>
				{#each example as turn, i}
					{@const speaker = example.length < 2 ? '' : i % 2 === 0 ? 'A: ' : 'B: '}
					<li class:unacceptable={turn.acceptable === false} class:acceptable={turn.acceptable}>
						{speaker}
						{turn.text}
						{#if turn.explanation}
							<small>{turn.explanation}</small>
						{/if}
					</li>
				{/each}
			</ul>
		{/each}
	{/if}
{/each}

<style>
	li {
		list-style: none;
	}
	li.acceptable {
		list-style: '✅ ';
		list-style-position: outside;
	}
	li.unacceptable {
		list-style: '❌  ';
		list-style-position: outside;
	}
	li small {
		opacity: 0.7;
		display: block;
		margin: 0.25em;
	}
</style>
