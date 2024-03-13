<script lang="ts">
	import { Icon, Tabbar, TabbarLink } from 'konsta/svelte';
	import { Home, Info, Settings } from 'lucide-svelte';

	const tabbarItems: App.TabbarItems[] = [
		{ name: 'Home', icon: Home },
		{ name: 'Info', icon: Info },
		{ name: 'Settings', icon: Settings }
	];
</script>

<slot />

<Tabbar icons labels class="fixed bottom-0 right-1/2 max-w-md translate-x-1/2">
	{#each tabbarItems as { name, icon }}
		<TabbarLink label={name}>
			<svelte:fragment slot="icon">
				<Icon>
					<svelte:component this={icon} />
				</Icon>
			</svelte:fragment>
		</TabbarLink>
	{/each}
</Tabbar>
