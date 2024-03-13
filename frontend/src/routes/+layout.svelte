<script lang="ts">
	import { App, KonstaProvider } from 'konsta/svelte';
	import '../app.pcss';
</script>

<KonstaProvider theme="material">
	<App theme="material">
		<slot />
	</App>
</KonstaProvider>
