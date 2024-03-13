import type { Icon } from 'lucide-svelte';
import type { ComponentType } from 'svelte';

declare global {
	namespace App {
		interface TabbarItems {
			name: string;
			icon: ComponentType<Icon>;
		}
	}
}

export {};
