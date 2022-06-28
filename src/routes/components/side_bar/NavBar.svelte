<script>
	import ClientesMenu from './menus/ClientesMenu.svelte';
	import ConfiguracoesMenu from './menus/ConfiguracoesMenu.svelte';
	import UserMenu from './menus/UserMenu.svelte';
	import MoreMenu from './menus/MoreMenu.svelte';
	import OnboardingMenu from './menus/OnboardingMenu.svelte';
	import ProcessamentosMenu from './menus/ProcessamentosMenu.svelte';
</script>

<nav class="w-16 h-screen shadow-sm bg-red-50 fixed">
	<div class="pb-12" />
	<ul class="h-full cursor-pointer">
		<li class="mt-8 group">
			<OnboardingMenu />
		</li>
		<li class="mt-4 group">
			<ClientesMenu />
		</li>
		<li class="mt-4 group">
			<ProcessamentosMenu />
		</li>
		<li class="mt-4 group ml-2">
			<MoreMenu />
		</li>
		<li class="absolute bottom-14  left-3 mt-4 group">
			<ConfiguracoesMenu />
		</li>
		<li class="absolute bottom-1 left-1 group">
			<UserMenu />
		</li>
	</ul>
</nav>
