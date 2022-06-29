<script lang="ts">
	import Listbox from './components/filtro/ListBox.svelte';
	import Popover from './components/filtro/Popover.svelte';
	import TopoOnboarding from './components/utils/TopoOnboarding.svelte';
	import {
		RefreshIconOutline,
		SearchIconOutline,
		UserIconOutline,
		AtSymbolIconOutline,
		PhotographIconOutline,
		LocationMarkerIconOutline
	} from '@codewithshin/svelte-heroicons';
	import LinhaExemplo from './components/LinhaExemplo.svelte';

	var onboarding = {
		pessoas: 10345,
		filtroX: '',
		filtros: {}
	};
	const periodos = [
		{ id: 1, name: 'Todo o período', unavailable: false },
		{ id: 2, name: 'Hoje ', unavailable: false },
		{ id: 3, name: '7 dias ', unavailable: false },
		{ id: 4, name: '14 dias', unavailable: false },
		{ id: 5, name: '30 dias', unavailable: false },
		{ id: 6, name: '6 meses', unavailable: false }
	];
	const propostas = [
		{ id: 1, name: 'Todos as propostas', unavailable: false },
		{ id: 2, name: 'Contratada', unavailable: false },
		{ id: 4, name: 'Apenas débito contratado', unavailable: false },
		{ id: 5, name: 'Crédito contratado', unavailable: false },
		{ id: 6, name: 'Não contratada', unavailable: false }
	];
	const produtos = [
		{ id: 1, name: 'Todos os produtos disponíveis', unavailable: false },
		{ id: 2, name: 'Apenas débito disponível', unavailable: false },
		{ id: 3, name: 'Débito e crédito disponíveis', unavailable: false }
	];
	function atualizar() {
		onboarding.pessoas++;
	}

	export let dados;

</script>

<div class="bg-white pl-5 ml-16 w-full mr-4">
	<div class="grid grid-cols-12 gap-4 pt-5 pb-5 h-22">
		<div class="col-span-5 text-azul-desty text-2xl font-bold inline-flex items-center">
			<svg
				width="35"
				height="35"
				viewBox="0 0 35 35"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="mr-4"
			>
				<path
					d="M14.4068 8.21915L15.4379 7.18811C17.0833 5.56924 19.3018 4.66615 21.6101 4.67555C23.9184 4.68495 26.1294 5.60608 27.7617 7.23829C29.3939 8.87051 30.315 11.0816 30.3244 13.3898C30.3338 15.6981 29.4307 17.9166 27.8118 19.5621L24.7187 22.6567M11.3123 11.3123L8.21914 14.4083M5.12601 17.5L4.09497 18.531M21.6241 25.7498L19.5621 27.8119M18.531 20.5931L17.5 21.6242M14.4068 24.7187L11.3123 27.8104M14.4068 16.4675L5.12601 25.7483"
					stroke="#0B08B1"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M19.5618 15.4382C20.7008 16.5773 22.5475 16.5773 23.6865 15.4382C24.8256 14.2992 24.8256 12.4525 23.6865 11.3134C22.5475 10.1744 20.7008 10.1744 19.5618 11.3134C18.4227 12.4525 18.4227 14.2992 19.5618 15.4382Z"
					stroke="#0B08B1"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			Configuração BATCH
		</div>
		<div class="col-span-2 mx-auto hidden">
			<div class="rounded-lg text-center flex flex-row p-2 bg-red-50 cursor-pointer">
				<svg
					width="23"
					height="22"
					viewBox="0 0 23 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.4513 21C17.0874 21 21.6564 16.5228 21.6564 11C21.6564 5.47715 17.0874 1 11.4513 1C5.81515 1 1.24615 5.47715 1.24615 11C1.24615 16.5228 5.81515 21 11.4513 21Z"
						stroke="#0B08B1"
						stroke-width="1.5"
					/>
					<path
						d="M16.1283 8.667C15.3394 7.097 13.5362 6 11.439 6C8.78571 6 6.60385 7.754 6.34872 10"
						stroke="#0B08B1"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M13.9964 8.722H15.9415C16.022 8.722 16.1016 8.70648 16.1759 8.67633C16.2502 8.64617 16.3177 8.60198 16.3745 8.54626C16.4314 8.49055 16.4765 8.42441 16.5072 8.35161C16.538 8.27881 16.5539 8.20079 16.5539 8.122V6.5M6.77428 12.667C7.56415 14.629 9.36638 16 11.4635 16C14.1169 16 16.2967 13.807 16.5539 11"
						stroke="#0B08B1"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M8.90613 12.622H6.96103C6.79864 12.622 6.6429 12.6852 6.52807 12.7977C6.41324 12.9103 6.34872 13.0629 6.34872 13.222V15.4"
						stroke="#0B08B1"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span class="text-azul-desty font-medium pl-3">Configuração BATCH</span>
			</div>
		</div>
		<div class="col-span-5" />
	</div>
	
	<div class="grid grid-cols-12 gap-4 mt-7 text-center border-b border-red-50 pb-2 text-sm font-semibold text-vermelho-desty">
		<div class="col-span-2 text-left inline-flex items-center ml-6">
			<span class="">Finalidade</span>
		</div>
		<div class="col-span-2 text-left  inline-flex items-center">
			Situação
		</div>
		<div class="col-span-2 text-left  inline-flex items-center">
			Nome
		</div>
		<div class="">JobSet</div>
	</div>
	{#each dados as item}
	<div class="grid grid-cols-12 gap-4 text-azul-desty text-sm pt-2 pb-2 text-center border-b border-red-50 group cursor-pointer hover:bg-gray-50">
	<div class="col-span-2 text-left inline-flex items-center">
		<p class="truncate overflow-hidden">
			{item.ds_finalidade_job}
		</p>
	</div>
	<div class="col-span-2 text-left truncate">
		{item.st_reprocessamento}
	</div>
	<div class="col-span-2 text-left truncate">
		{item.nm_job_processamento}
	</div>
	<div>
		{item.nm_jobset_processamento}
	</div>
</div>
	{/each}
	
</div>
