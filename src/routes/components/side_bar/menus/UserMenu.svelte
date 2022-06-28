<script>
	import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';
	import {
		UserCircleIconOutline,
		LogoutIconOutline,
		UserIconSolid
	} from '@codewithshin/svelte-heroicons';
	import { createPopperActions } from 'svelte-popperjs';

	const [popperRef, popperContent] = createPopperActions();
	const popperOptions = {
		placement: 'right-end',
		modifiers: [{ name: 'offset', options: { offset: [0, -5] } }]
	};
</script>

<Popover style="position: relative;">
	<PopoverButton
		use={[popperRef]}
		class="group text-lg text-vermelho-desty font-semibold pl-2 pr-2  inline-flex items-start"
	>
		<UserCircleIconOutline
			class="mx-auto hover:bg-red-100 rounded-full p-2 text-vermelho-desty"
			size="42"
		/>
	</PopoverButton>

	<PopoverPanel use={[[popperContent, popperOptions]]} style="position: absolute; z-index: 10;">
		<div class="text-vermelho-desty border bg-white rounded-lg p-1 text-sm font-semibold w-max">
			<ul class="flex flex-col">
				<li class="p-2 inline-flex items-center hover:bg-red-100 hover:rounded-lg w-full">
					<UserIconSolid size="18" class="mr-2 text-vermelho-desty" />
					Meus dados
				</li>
				<li class="p-2 inline-flex items-center hover:bg-red-100 hover:rounded-lg w-full">
					<LogoutIconOutline class="mr-2 text-vermelho-desty" size="18" />
					Sair
				</li>
			</ul>
		</div>
	</PopoverPanel>
</Popover>
