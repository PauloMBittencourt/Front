<script lang="ts">
    export let list;
    export let itemSelected;
    import {
      Listbox,
      ListboxButton,
      ListboxOptions,
      ListboxOption,
    } from "@rgossiaux/svelte-headlessui";
</script>

<div class="col-span-2">
    <Listbox value={itemSelected} on:change={(e) => (itemSelected = e.detail)} class="absolute group">
        <ListboxButton class="text-lg text-vermelho-desty font-semibold pl-2 pr-2 flex flex-row ">{itemSelected.name}
                <svg class="mt-2 ml-2 hidden group-hover:block" width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66667 6L8.00001 11.3333L13.3333 6" stroke="#E23C50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>                
        </ListboxButton>
        <ListboxOptions
            class="bg-white text-md font-semibold text-azul-desty cursor-pointer rounded-md border border-red-50 mt-2 shadow-md p-4">
          {#each list as filter (filter.id)}
            <ListboxOption value={filter} disabled={filter.unavailable} class="p-2 hover:bg-red-50 hover:rounded-lg"
                let:selected
            >
            {#if selected}
                <span class="text-vermelho-desty flex flex-row">
                    <svg class="mt-2" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6L5 9L10 3" stroke="#E23C50" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="pl-2">{filter.name}</span>
                </span>
            {:else}
                {filter.name}
            {/if}
            </ListboxOption>
          {/each}
        </ListboxOptions>
      </Listbox>  
</div>

