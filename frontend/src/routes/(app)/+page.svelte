<script lang="ts">
	import { Block, Card, Icon, Page } from 'konsta/svelte';
	import { ArrowDownToDot, Power, RotateCw, Terminal } from 'lucide-svelte';

	const actionItems: App.ActionItems[] = [
		{ name: 'Restart', icon: RotateCw },
		{ name: 'Shutdown', icon: Power },
		{ name: 'Suspend', icon: ArrowDownToDot },
		{ name: 'Shell', icon: Terminal }
	];
</script>

<Page>
	<Block class="text-2xl font-bold" margin="my-20">
		<p>Good morning,</p>
		<p>John</p>
	</Block>
	<Block class="columns-2">
		{#each actionItems as { name, icon }, index}
			<Card margin="mb-4">
				<Icon>
					<svelte:component this={icon} />
				</Icon>
				<p class="text-base mt-{index % 3 ? 20 : 10}">{name}</p>
			</Card>
		{/each}
	</Block>
</Page>
