
<script>
    import Listbox from "./components/Listbox.svelte";
    import Popover from "./components/Popover.svelte";
    import TopoExemplo from "./components/TopoExemplo.svelte";
    import LinhaExemplo from "./components/LinhaExemplo.svelte";
    import MenuLateral from "./components/MenuLateral/MenuLateral.svelte";
    import LinhaExemploMask from "./components/LinhaExemploMask.svelte";
    import {LogoutIconSolid} from '@codewithshin/svelte-heroicons';
    import { fade } from 'svelte/transition';
    import BotaoVermelhoOutline from "./components/BotaoVermelhoOutline.svelte";

    var pageState = {

    }

    var onboarding = {
        pessoas: 10345,
        filtroX: "",
        filtros: {},
    }

    function atualizar() {
        onboarding.pessoas++;
    }

    function filtroPeriodo(){
        onboarding.filtroX = "Período"
    }
    
    const periodos = [
      { id: 1, name: "Todo o período", unavailable: false },
      { id: 2, name: "Hoje ", unavailable: false },
      { id: 3, name: "7 dias ", unavailable: false },
      { id: 4, name: "14 dias", unavailable: false },
      { id: 5, name: "30 dias", unavailable: false },
      { id: 6, name: "6 meses", unavailable: false },
    ];
    let periodoSelecionado = periodos[0];

    const produtos = [
      { id: 1, name: "Todos os produtos disponíveis", unavailable: false },
      { id: 2, name: "Apenas débito disponível", unavailable: false },
      { id: 3, name: "Débito e crédito disponíveis", unavailable: false }
    ];
    let produtoSelecionado = produtos[0];

    const propostas = [
      { id: 1, name: "Todos as propostas", unavailable: false },
      { id: 2, name: "Contratada", unavailable: false },
      { id: 4, name: "Apenas débito contratado", unavailable: false },
      { id: 5, name: "Crédito contratado", unavailable: false },
      { id: 6, name: "Não contratada", unavailable: false },
      { id: 7, name: "Cancelada", unavailable: false }
    ];
    let propostaSelecionada = propostas[0];

    let promiseGrid = filtroPeriodo();
    

</script>

<div class="bg-white pl-5 w-full mr-4">
    <TopoExemplo/>

    <div class="grid grid-cols-12 gap-4 pt-4 pb-4 sticky top-0 bg-white :stuck:bg-red-600">
        <div class="col-span-2 text-azul-desty text-xl font-semibold">
            <span class="inline-block items-center">{onboarding.pessoas} pessoas</span>
        </div>
        <div class="col-span-2">
            <Listbox list={periodos} itemSelected={periodoSelecionado} functionHandler={filtroPeriodo}/> 
        </div>
        <div class="col-span-3">
            <Listbox list={propostas} itemSelected={propostaSelecionada}/>               
        </div>
        <div class="col-span-3 lg:visible sm:invisible">
            <Listbox list={produtos} itemSelected={produtoSelecionado}/> 
        </div>
        <div class="col-span-1 text-base text-gray-500">
            <Popover/>
        </div>
        <div class="col-span-1 inline-flex flex-row-reverse cursor-pointer" title="Limpar filtros">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4 7.61333C24.2766 7.48972 24.1301 7.39166 23.9688 7.32475C23.8075 7.25784 23.6346 7.2234 23.46 7.2234C23.2854 7.2234 23.1125 7.25784 22.9512 7.32475C22.7899 7.39166 22.6433 7.48972 22.52 7.61333L16 14.12L9.47999 7.59999C9.35655 7.47655 9.21 7.37863 9.04872 7.31182C8.88743 7.24502 8.71457 7.21063 8.53999 7.21063C8.36542 7.21063 8.19255 7.24502 8.03127 7.31182C7.86998 7.37863 7.72344 7.47655 7.59999 7.59999C7.47655 7.72344 7.37863 7.86998 7.31182 8.03127C7.24502 8.19255 7.21063 8.36542 7.21063 8.53999C7.21063 8.71457 7.24502 8.88743 7.31182 9.04872C7.37863 9.21 7.47655 9.35655 7.59999 9.47999L14.12 16L7.59999 22.52C7.47655 22.6434 7.37863 22.79 7.31182 22.9513C7.24502 23.1126 7.21063 23.2854 7.21063 23.46C7.21063 23.6346 7.24502 23.8074 7.31182 23.9687C7.37863 24.13 7.47655 24.2765 7.59999 24.4C7.72344 24.5234 7.86998 24.6214 8.03127 24.6882C8.19255 24.755 8.36542 24.7894 8.53999 24.7894C8.71457 24.7894 8.88743 24.755 9.04872 24.6882C9.21 24.6214 9.35655 24.5234 9.47999 24.4L16 17.88L22.52 24.4C22.6434 24.5234 22.79 24.6214 22.9513 24.6882C23.1126 24.755 23.2854 24.7894 23.46 24.7894C23.6346 24.7894 23.8074 24.755 23.9687 24.6882C24.13 24.6214 24.2765 24.5234 24.4 24.4C24.5234 24.2765 24.6214 24.13 24.6882 23.9687C24.755 23.8074 24.7894 23.6346 24.7894 23.46C24.7894 23.2854 24.755 23.1126 24.6882 22.9513C24.6214 22.79 24.5234 22.6434 24.4 22.52L17.88 16L24.4 9.47999C24.9067 8.97333 24.9067 8.11999 24.4 7.61333V7.61333Z" fill="#E23C50"/>
                    </svg>
        </div>
    </div>

    <div class="grid grid-cols-12 gap-4 h-22 pt-4 pb-4">
        <div class="col-span-5 group">
            <div class="focus-within:w-full focus-within:bg-cinza-desty-050 w-52 text-base text-gray-500 flex  flex-row bg-gray-100 p-2 rounded-md">
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class=" mt-1">
                    <path d="M7.5 13.5C8.83123 13.4997 10.1241 13.0541 11.1728 12.234L14.4698 15.531L15.5303 14.4705L12.2333 11.1735C13.0538 10.1247 13.4997 8.83158 13.5 7.5C13.5 4.19175 10.8083 1.5 7.5 1.5C4.19175 1.5 1.5 4.19175 1.5 7.5C1.5 10.8082 4.19175 13.5 7.5 13.5ZM7.5 3C9.98175 3 12 5.01825 12 7.5C12 9.98175 9.98175 12 7.5 12C5.01825 12 3 9.98175 3 7.5C3 5.01825 5.01825 3 7.5 3Z" fill="#CB9191"/>
                    </svg>                    
                <input class="ml-2 bg-gray-100 focus:outline-0 w-full focus:bg-cinza-desty-050" placeholder="Pesquisar"/>
            </div>
        </div>
        <div class="col-span-5">
            
        </div>
        <div class="col-span-2 inline-flex flex-row-reverse">          
            <BotaoVermelhoOutline texto="Atualizar"/>
        </div>
    </div>

    <div class="grid grid-cols-12 gap-4 mt-7 text-center border-b border-red-50 pb-2 text-sm font-semibold text-vermelho-desty">
        <div class="col-span-2 text-left inline-flex items-center ml-6">
            <svg class="mt-0 mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.414 11.9312C13.1193 11.2331 12.6916 10.5989 12.1547 10.0641C11.6194 9.52767 10.9853 9.10001 10.2875 8.80469C10.2812 8.80156 10.275 8.8 10.2687 8.79688C11.2422 8.09375 11.875 6.94844 11.875 5.65625C11.875 3.51562 10.1406 1.78125 7.99998 1.78125C5.85935 1.78125 4.12498 3.51562 4.12498 5.65625C4.12498 6.94844 4.75779 8.09375 5.73123 8.79844C5.72498 8.80156 5.71873 8.80312 5.71248 8.80625C5.01248 9.10156 4.38435 9.525 3.84529 10.0656C3.3089 10.6009 2.88123 11.235 2.58592 11.9328C2.29579 12.616 2.13932 13.3485 2.12498 14.0906C2.12456 14.1073 2.12749 14.1239 2.13358 14.1394C2.13968 14.1549 2.14882 14.1691 2.16047 14.181C2.17212 14.193 2.18604 14.2025 2.20141 14.2089C2.21678 14.2154 2.2333 14.2188 2.24998 14.2188H3.18748C3.25623 14.2188 3.31092 14.1641 3.31248 14.0969C3.34373 12.8906 3.8281 11.7609 4.68435 10.9047C5.57029 10.0188 6.74685 9.53125 7.99998 9.53125C9.2531 9.53125 10.4297 10.0188 11.3156 10.9047C12.1719 11.7609 12.6562 12.8906 12.6875 14.0969C12.689 14.1656 12.7437 14.2188 12.8125 14.2188H13.75C13.7667 14.2188 13.7832 14.2154 13.7985 14.2089C13.8139 14.2025 13.8278 14.193 13.8395 14.181C13.8511 14.1691 13.8603 14.1549 13.8664 14.1394C13.8725 14.1239 13.8754 14.1073 13.875 14.0906C13.8594 13.3437 13.7047 12.6172 13.414 11.9312V11.9312ZM7.99998 8.34375C7.28279 8.34375 6.60779 8.06406 6.09998 7.55625C5.59217 7.04844 5.31248 6.37344 5.31248 5.65625C5.31248 4.93906 5.59217 4.26406 6.09998 3.75625C6.60779 3.24844 7.28279 2.96875 7.99998 2.96875C8.71717 2.96875 9.39217 3.24844 9.89998 3.75625C10.4078 4.26406 10.6875 4.93906 10.6875 5.65625C10.6875 6.37344 10.4078 7.04844 9.89998 7.55625C9.39217 8.06406 8.71717 8.34375 7.99998 8.34375Z" fill="#E23C50"/>
                </svg>
                
            <span class="">Nome</span>
        </div>
        <div class="col-span-2 text-left  inline-flex items-center">
            <svg class="mt-1 mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99998 1.33334C4.31998 1.33334 1.33331 4.32001 1.33331 8.00001C1.33331 11.68 4.31998 14.6667 7.99998 14.6667H11.3333V13.3333H7.99998C5.10665 13.3333 2.66665 10.8933 2.66665 8.00001C2.66665 5.10668 5.10665 2.66668 7.99998 2.66668C10.8933 2.66668 13.3333 5.10668 13.3333 8.00001V8.95334C13.3333 9.48001 12.86 10 12.3333 10C11.8066 10 11.3333 9.48001 11.3333 8.95334V8.00001C11.3333 6.16001 9.83998 4.66668 7.99998 4.66668C6.15998 4.66668 4.66665 6.16001 4.66665 8.00001C4.66665 9.84001 6.15998 11.3333 7.99998 11.3333C8.91998 11.3333 9.75998 10.96 10.36 10.3533C10.7933 10.9467 11.54 11.3333 12.3333 11.3333C13.6466 11.3333 14.6666 10.2667 14.6666 8.95334V8.00001C14.6666 4.32001 11.68 1.33334 7.99998 1.33334ZM7.99998 10C6.89331 10 5.99998 9.10668 5.99998 8.00001C5.99998 6.89334 6.89331 6.00001 7.99998 6.00001C9.10665 6.00001 9.99998 6.89334 9.99998 8.00001C9.99998 9.10668 9.10665 10 7.99998 10Z" fill="#E23C50"/>
                </svg>
            Contato
        </div>
        <div class="col-span-2 text-left  inline-flex items-center">
            <svg class="mt-0 mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 10H4.5C4.10218 10 3.72064 10.158 3.43934 10.4393C3.15804 10.7206 3 11.1022 3 11.5V12.5H4V11.5C4 11.3674 4.05268 11.2402 4.14645 11.1464C4.24021 11.0527 4.36739 11 4.5 11H7.5C7.63261 11 7.75979 11.0527 7.85355 11.1464C7.94732 11.2402 8 11.3674 8 11.5V12.5H9V11.5C9 11.1022 8.84196 10.7206 8.56066 10.4393C8.27936 10.158 7.89782 10 7.5 10ZM6 9.5C6.39556 9.5 6.78224 9.3827 7.11114 9.16294C7.44004 8.94318 7.69638 8.63082 7.84776 8.26537C7.99913 7.89992 8.03874 7.49778 7.96157 7.10982C7.8844 6.72186 7.69392 6.36549 7.41421 6.08579C7.13451 5.80608 6.77814 5.6156 6.39018 5.53843C6.00222 5.46126 5.60009 5.50087 5.23463 5.65224C4.86918 5.80362 4.55682 6.05996 4.33706 6.38886C4.1173 6.71776 4 7.10444 4 7.5C4 8.03043 4.21071 8.53914 4.58579 8.91421C4.96086 9.28929 5.46957 9.5 6 9.5ZM6 6.5C6.19778 6.5 6.39112 6.55865 6.55557 6.66853C6.72002 6.77841 6.84819 6.93459 6.92388 7.11732C6.99957 7.30004 7.01937 7.50111 6.98079 7.69509C6.9422 7.88907 6.84696 8.06726 6.70711 8.20711C6.56725 8.34696 6.38907 8.4422 6.19509 8.48079C6.00111 8.51937 5.80004 8.49957 5.61732 8.42388C5.43459 8.34819 5.27841 8.22002 5.16853 8.05557C5.05865 7.89112 5 7.69778 5 7.5C5 7.23478 5.10536 6.98043 5.29289 6.79289C5.48043 6.60536 5.73478 6.5 6 6.5Z" fill="#E23C50"/>
                <path d="M14 9.5V14H2V4H8V3H2C1.73478 3 1.48043 3.10536 1.29289 3.29289C1.10536 3.48043 1 3.73478 1 4V14C1 14.2652 1.10536 14.5196 1.29289 14.7071C1.48043 14.8946 1.73478 15 2 15H14C14.2652 15 14.5196 14.8946 14.7071 14.7071C14.8946 14.5196 15 14.2652 15 14V9.5H14Z" fill="#E23C50"/>
                <path d="M10 9.5H13V10.5H10V9.5ZM11 11.5H13V12.5H11V11.5ZM16 5V4H14.9495C14.885 3.68701 14.7607 3.3894 14.5835 3.1235L15.3285 2.3785L14.6215 1.6715L13.8765 2.4165C13.6106 2.23926 13.313 2.11498 13 2.0505V1H12V2.0505C11.687 2.11498 11.3894 2.23926 11.1235 2.4165L10.3785 1.6715L9.6715 2.3785L10.4165 3.1235C10.2393 3.3894 10.115 3.68701 10.0505 4H9V5H10.0505C10.115 5.31299 10.2393 5.6106 10.4165 5.8765L9.6715 6.6215L10.3785 7.3285L11.1235 6.5835C11.3894 6.76074 11.687 6.88502 12 6.9495V8H13V6.9495C13.313 6.88502 13.6106 6.76074 13.8765 6.5835L14.6215 7.3285L15.3285 6.6215L14.5835 5.8765C14.7607 5.6106 14.885 5.31299 14.9495 5H16ZM12.5 6C12.2033 6 11.9133 5.91203 11.6666 5.7472C11.42 5.58238 11.2277 5.34811 11.1142 5.07403C11.0006 4.79994 10.9709 4.49834 11.0288 4.20736C11.0867 3.91639 11.2296 3.64912 11.4393 3.43934C11.6491 3.22956 11.9164 3.0867 12.2074 3.02882C12.4983 2.97094 12.7999 3.00065 13.074 3.11418C13.3481 3.22771 13.5824 3.41997 13.7472 3.66664C13.912 3.91332 14 4.20333 14 4.5C13.9996 4.8977 13.8414 5.279 13.5602 5.56022C13.279 5.84144 12.8977 5.9996 12.5 6Z" fill="#E23C50"/>
                </svg>
            Outras informações
        </div>
        <div class="">Situação</div>
        <div>Renda</div>
        <div class="">Limite</div>
        <div>Produtos</div>
        <div class="">Data</div>
        <div class="inline-flex items-center content-center">                  
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00001 9.33333C9.47068 9.33333 10.6667 8.13733 10.6667 6.66667C10.6667 5.196 9.47068 4 8.00001 4C6.52934 4 5.33334 5.196 5.33334 6.66667C5.33334 8.13733 6.52934 9.33333 8.00001 9.33333ZM8.00001 5.33333C8.73534 5.33333 9.33334 5.93133 9.33334 6.66667C9.33334 7.402 8.73534 8 8.00001 8C7.26468 8 6.66668 7.402 6.66668 6.66667C6.66668 5.93133 7.26468 5.33333 8.00001 5.33333Z" fill="#E23C50"/>
                <path d="M7.61332 14.5427C7.72615 14.6233 7.86134 14.6666 7.99999 14.6666C8.13864 14.6666 8.27382 14.6233 8.38665 14.5427C8.58932 14.3993 13.3527 10.96 13.3333 6.66668C13.3333 3.72601 10.9407 1.33334 7.99999 1.33334C5.05932 1.33334 2.66665 3.72601 2.66665 6.66334C2.64732 10.96 7.41065 14.3993 7.61332 14.5427ZM7.99999 2.66668C10.206 2.66668 12 4.46068 12 6.67001C12.014 9.62868 9.07465 12.2853 7.99999 13.1567C6.92599 12.2847 3.98599 9.62734 3.99999 6.66668C3.99999 4.46068 5.79399 2.66668 7.99999 2.66668Z" fill="#E23C50"/>
                </svg>
                Região
        </div>
    </div>

    {#await promiseGrid}
        carregando...
    {:then value} 
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
        <LinhaExemplo/>
    {:catch error}
        {error}
    {/await}
    

</div>


