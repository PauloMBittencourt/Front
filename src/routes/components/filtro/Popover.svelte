<script>
	import { Popover, PopoverButton, PopoverPanel } from '@rgossiaux/svelte-headlessui';

	import { createPopperActions } from 'svelte-popperjs';

	const [popperRef, popperContent] = createPopperActions();
	const popperOptions = {
		placement: 'bottom-end',
		strategy: 'fixed',
		modifiers: [{ name: 'offset', options: { offset: [0, 5] } }]
	};
</script>

<Popover style="position: relative;">
	<PopoverButton
		use={[popperRef]}
		class="group text-lg text-vermelho-desty font-semibold pl-2 pr-2  inline-flex items-start "
	>
		<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M10 16C10 16.5304 9.78929 17.0391 9.41421 17.4142C9.03914 17.7893 8.53043 18 8 18C7.46957 18 6.96086 17.7893 6.58579 17.4142C6.21071 17.0391 6 16.5304 6 16C6 15.4696 6.21071 14.9609 6.58579 14.5858C6.96086 14.2107 7.46957 14 8 14C8.53043 14 9.03914 14.2107 9.41421 14.5858C9.78929 14.9609 10 15.4696 10 16ZM18 16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18C15.4696 18 14.9609 17.7893 14.5858 17.4142C14.2107 17.0391 14 16.5304 14 16C14 15.4696 14.2107 14.9609 14.5858 14.5858C14.9609 14.2107 15.4696 14 16 14C16.5304 14 17.0391 14.2107 17.4142 14.5858C17.7893 14.9609 18 15.4696 18 16ZM24 18C24.5304 18 25.0391 17.7893 25.4142 17.4142C25.7893 17.0391 26 16.5304 26 16C26 15.4696 25.7893 14.9609 25.4142 14.5858C25.0391 14.2107 24.5304 14 24 14C23.4696 14 22.9609 14.2107 22.5858 14.5858C22.2107 14.9609 22 15.4696 22 16C22 16.5304 22.2107 17.0391 22.5858 17.4142C22.9609 17.7893 23.4696 18 24 18Z"
				fill="#E23C50"
			/>
		</svg>

		<svg
			class="mt-2 ml-2 hidden group-hover:block"
			width="12"
			height="12"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.66667 6L8.00001 11.3333L13.3333 6"
				stroke="#E23C50"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</PopoverButton>

	<PopoverPanel use={[[popperContent, popperOptions]]} style="position: absolute; z-index: 10;">
		<div
			class="bg-white text-md font-semibold text-azul-desty cursor-pointer rounded-md border border-red-50 mt-2 shadow-md w-96"
		>
			<div class="p-4">Renda</div>
			<div class="bg-gray-50 p-4">
				<button>Filtrar</button>
			</div>
		</div>
	</PopoverPanel>
</Popover>
