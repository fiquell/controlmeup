<script lang="ts">
	import { page } from '$app/stores';
	import { Icon, Tabbar, TabbarLink } from 'konsta/svelte';
	import { Home, Info, Settings } from 'lucide-svelte';

	$: pathname = $page.url.pathname;

	const tabbarItems: App.TabbarItems[] = [
		{ name: 'Home', href: '/', icon: Home },
		{ name: 'Info', href: '/info', icon: Info },
		{ name: 'Settings', href: '/settings', icon: Settings }
	];
</script>

<slot />

<Tabbar class="fixed bottom-0 right-1/2 max-w-md translate-x-1/2" labels icons>
	{#each tabbarItems as { name, href, icon }}
		<TabbarLink active={pathname === href} linkProps={{ href }} label={name}>
			<svelte:fragment slot="icon">
				<Icon>
					<svelte:component this={icon} />
				</Icon>
			</svelte:fragment>
		</TabbarLink>
	{/each}
</Tabbar>
