<script>
    	let localizacoes = [{
            CdArquivo: 1,
            DsArquivo: "Arquivo de informações do SALDO_CONTAS_DESCOMPACTADO",
            DsCaminhoArquivo: "C:/Users/paulo/source/repos/ssc-servicos-desty/Seac.Desty.Batch/bin/Debug/net6.0/LocalizacaoArquivo/CaminhoArquivo",
            DsCaminhoArquivoProcessado: "C:/Users/paulo/source/repos/ssc-servicos-desty/Seac.Desty.Batch/bin/Debug/net6.0/LocalizacaoArquivo/CaminhoArquivoProcessado",
            DsCaminhoArquivoNaoProcessado: "C:/Users/paulo/source/repos/ssc-servicos-desty/Seac.Desty.Batch/bin/Debug/net6.0/LocalizacaoArquivo/CaminhoArquivoNaoProcessado/",
            DsCaminhoCopiaArquivoOriginal: "C:/Users/paulo/source/repos/ssc-servicos-desty/Seac.Desty.Batch/bin/Debug/net6.0/LocalizacaoArquivo/CaminhoArquivoCopiaOriginal",
            DsCaminhoCopiaArquivoProcessado: "C:/Users/paulo/source/repos/ssc-servicos-desty/Seac.Desty.Batch/bin/Debug/net6.0/LocalizacaoArquivo/CaminhoArquivoCopiaProcessado",
            DsPadraoNomeArquivo: "ARQSALDO.DESC"
        },
        {
            CdArquivo: 2,
            DsArquivo: "ass",
            DsCaminhoArquivo: "ass",
            DsCaminhoArquivoProcessado: "ass",
            DsCaminhoArquivoNaoProcessado: "ass",
            DsCaminhoCopiaArquivoOriginal: "ass",
            DsCaminhoCopiaArquivoProcessado: "ass",
            DsPadraoNomeArquivo: "ass"
        },
        {
            CdArquivo: 3,
            DsArquivo: "assa",
            DsCaminhoArquivo: "assas",
            DsCaminhoArquivoProcessado: "asqws",
            DsCaminhoArquivoNaoProcessado: "asqwws",
            DsCaminhoCopiaArquivoOriginal: "assqww",
            DsCaminhoCopiaArquivoProcessado: "assqww",
            DsPadraoNomeArquivo: "asqwws"
        }];

    let localizacao =
    {
        CdArquivo: "",
        DsArquivo: "",
        DsCaminhoArquivo: "",
        DsCaminhoArquivoProcessado: "",
        DsCaminhoArquivoNaoProcessado: "",
        DsCaminhoCopiaArquivoOriginal: "",
        DsCaminhoCopiaArquivoProcessado: "",
        DsPadraoNomeArquivo: ""
    };

    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(localizacao)
    }

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
        import { list } from 'postcss';
        import LinhaGridLocalizacao from './components/LinhaGridLocalizacao.svelte';
    
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

</script>

<style>
.div-principal {
    width: 10%;
    margin: auto;
    display: inline-block;
    padding: 10px;  
}

.div_3{
    width: 150%;
    height: 50px;
    display: inline;
}

.div_2 {
    width: 100%;
    height: 50px;
    display: inline;
    padding: 15px;
}


.div_4 {
    padding-top: 10px;
    width: 100%;
    height: 120px;
    border:solid 1px;
    border-radius:10px;
    border-color: black;
}

.div-principal:nth-child(even) {
    background-color:rgb(245, 189, 189);
}
.div-principal:nth-child(odd) {
    background-color:rgb(255, 255, 255);
}

.div-lista {
    width: 100%;
    display: flex;
    margin: auto;
    min-width: 752px;
    grid-column: span 1.5/ span 1.5;
}

p {
    text-align: center;
}

</style>

<form on:submit={onSubmitHandler}>
    <!-- cabeçalho -->
    <div class="bg-white pl-5 ml-16 w-full mr-4">
        <TopoOnboarding />
        <div class="grid grid-cols-12 gap-4 pt-4 pb-4">
            <div class="col-span-2 text-azul-desty text-xl font-semibold">
                <span class="inline-block items-center">{onboarding.pessoas} pessoas</span>
            </div>
            <div class="col-span-2">
                <Listbox list={periodos} itemSelected={periodos[0]} />
            </div>
            <div class="col-span-2">
                <Listbox list={propostas} itemSelected={propostas[0]} />
            </div>
            <div class="col-span-3 lg:visible sm:invisible">
                <Listbox list={produtos} itemSelected={produtos[0]} />
            </div>
            <div class="col-span-2 text-base text-gray-500">
                <Popover />
            </div>
            <div class="col-span-1 inline-flex flex-row-reverse cursor-pointer" title="Limpar filtros">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24.4 7.61333C24.2766 7.48972 24.1301 7.39166 23.9688 7.32475C23.8075 7.25784 23.6346 7.2234 23.46 7.2234C23.2854 7.2234 23.1125 7.25784 22.9512 7.32475C22.7899 7.39166 22.6433 7.48972 22.52 7.61333L16 14.12L9.47999 7.59999C9.35655 7.47655 9.21 7.37863 9.04872 7.31182C8.88743 7.24502 8.71457 7.21063 8.53999 7.21063C8.36542 7.21063 8.19255 7.24502 8.03127 7.31182C7.86998 7.37863 7.72344 7.47655 7.59999 7.59999C7.47655 7.72344 7.37863 7.86998 7.31182 8.03127C7.24502 8.19255 7.21063 8.36542 7.21063 8.53999C7.21063 8.71457 7.24502 8.88743 7.31182 9.04872C7.37863 9.21 7.47655 9.35655 7.59999 9.47999L14.12 16L7.59999 22.52C7.47655 22.6434 7.37863 22.79 7.31182 22.9513C7.24502 23.1126 7.21063 23.2854 7.21063 23.46C7.21063 23.6346 7.24502 23.8074 7.31182 23.9687C7.37863 24.13 7.47655 24.2765 7.59999 24.4C7.72344 24.5234 7.86998 24.6214 8.03127 24.6882C8.19255 24.755 8.36542 24.7894 8.53999 24.7894C8.71457 24.7894 8.88743 24.755 9.04872 24.6882C9.21 24.6214 9.35655 24.5234 9.47999 24.4L16 17.88L22.52 24.4C22.6434 24.5234 22.79 24.6214 22.9513 24.6882C23.1126 24.755 23.2854 24.7894 23.46 24.7894C23.6346 24.7894 23.8074 24.755 23.9687 24.6882C24.13 24.6214 24.2765 24.5234 24.4 24.4C24.5234 24.2765 24.6214 24.13 24.6882 23.9687C24.755 23.8074 24.7894 23.6346 24.7894 23.46C24.7894 23.2854 24.755 23.1126 24.6882 22.9513C24.6214 22.79 24.5234 22.6434 24.4 22.52L17.88 16L24.4 9.47999C24.9067 8.97333 24.9067 8.11999 24.4 7.61333V7.61333Z"
                        fill="#E23C50"
                    />
                </svg>
            </div>
        </div>
        <div class="grid grid-cols-12 gap-4 h-22 pt-4 pb-4">
            <div class="col-span-10 group">
                <div
                    class="focus-within:w-full focus-within:bg-red-50 w-52 text-base text-gray-500 flex  flex-row bg-gray-100 p-2 rounded-md"
                >
                    <SearchIconOutline size="20" class=" mt-1 text-vermelho-desty" />
                    <input
                        class=" ml-2 bg-gray-100 focus:outline-0 w-full focus:bg-red-50"
                        placeholder="Pesquisar"
                    />
                </div>
            </div>
        </div>
<!----------- Parte do Create e input -------------------->
            <p style="font-size: 30px; text-align: center;">Adicionar localização de arquivo: </p>
            <div class="div_4">
            <div class="div-principal">
                <div class="div_3">
                    <p>Insira a descrição do arquivo</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsArquivo} type="text" placeholder="Descrição do arquivo" id="desc_arquivo" size="20" style="text-align: center;"/>
                    </div>
                </div>
            </div>

            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o caminho do arquivo</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsCaminhoArquivo} type="text" placeholder="Caminho do arquivo" id="caminho_arquivo" size="20"/>
                    </div>
                </div>
            </div>

            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o caminho do arquivo não processado</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsCaminhoArquivoNaoProcessado} type="text" placeholder="Caminho do arquivo processado" id="caminho_arquivo_processado" size="20"/>
                    </div>
                </div>
            </div>

            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o caminho do arquivo processado</p>
                    <div class="div_2">
                        <input bind:value="{localizacao.DsCaminhoArquivoProcessado}" type="text" placeholder="Caminho do arquivo não processado" id="caminho_arquivo_nao_processado" size="20"/>
                    </div>
                </div>
            </div>
            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o caminho da copia do arquivo original</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsCaminhoCopiaArquivoOriginal} type="text" placeholder="Caminho do arquivo copia arquivo original" id="caminho_arquivo_copia_original" size="20"/>
                    </div>
                </div>
            </div>

            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o caminho da copia do arquivo processado</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsCaminhoCopiaArquivoProcessado} type="text" placeholder="Caminho do arquivo copia arquivo processado" id="caminho_arquivo_copia_processado" size="20"/>
                    </div>
                </div>
            </div>

            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o padrão de nome do arquivo</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsPadraoNomeArquivo} type="text" placeholder="Padrão do nome do arquivo" id="padrao_nome_arquivo" size="20"/>
                    </div>
                </div>
            </div>
        </div>
<!---------- Botão de salvar e atualizar -------------------------->

    <div></div>
            <div class="col-span-2 inline-flex flex-row-reverse" style="padding-top: 10px;">
                <button
                    on:click={atualizar}
                    class="inline-flex items-center text-sm bg-white hover:bg-red-50 text-azul-desty font-semibold py-2 px-4 border border-read-100 rounded shadow-sm"
                >
                    <RefreshIconOutline size="19" class="mr-2 text-azul-desty" />
                    Atualizar
                </button>

                <button class="inline-flex items-center text-sm bg-white hover:bg-red-50 text-azul-desty font-semibold py-2 px-4 border border-read-100 rounded shadow-sm">
                    Salvar Caminhos</button>
            </div>

<!------------------------ Cabeçalho da lista -------------------------------->
    <div
                class="grid grid-cols-12 gap-4 mt-7 text-center border-b border-red-50 pb-2 text-sm font-semibold text-vermelho-desty"
            >
                <div class="col-span-1 text-left inline-flex items-center ml-6">
                    <UserIconOutline size="16" class="mt-0 mr-1 text-vermelho-desty" />
                    <span class="col-span-1 text-left inline-flex w-10">Código e descrição</span>
                </div>
                <div class="col-span-2 text-left  inline-flex items-center">
                    <AtSymbolIconOutline size="16" class="mt-1 mr-1 text-vermelho-desty" />
                    Descrição
                </div>
                <div class="col-span-2 text-left  inline-flex items-center">
                    <PhotographIconOutline size="16" class="mt-0 mr-1 text-vermelho-desty" />
                    Caminho do Arquivo
                </div>
                <div class="col-span-2 text-left inline-flex items-center w-15">Caminho do Arquivo Processado</div>
                <div class="col-span-2 text-left inline-flex items-center">Caminho do Arquivo não processado</div>
                <div class="col-span-2 text-left inline-flex items-center">Caminho da Copia do Arquivo Original</div>
                <div>Caminho do Arquivo da copia do Arquivo Processado</div>
                <div class="">Padrão do nome do Arquivo</div>
            </div>

<!---------------------------------- Lista ------------------------->
    <div
        class="grid grid-cols-12 gap-4 text-azul-desty text-sm pt-2 pb-2 text-center border-b border-red-50 group cursor-pointer hover:bg-gray-50"
    >
    {#each localizacoes as localizacao}
        <div class="col-start-1 grid-cols-5 text-left inline-flex items-center">
            <input type="checkbox" class="m-2 invisible group-hover:visible" />
            <p class="truncate overflow-hidden">
                {localizacao.CdArquivo}<br /><span class="text-gray-500 text-xs">{localizacao.DsArquivo}</span>
            </p>
        </div>
        <div class="col-span-2 text-left truncate w-50">{localizacao.DsCaminhoArquivo}</div>
        <div class="col-span-2 text-center truncate w-50">{localizacao.DsCaminhoArquivoNaoProcessado}</div>
        <div class="col-span-2 text-left truncate ">{localizacao.DsCaminhoArquivoProcessado}</div>
        <div class="col-span-2 text-left truncate ">{localizacao.DsCaminhoCopiaArquivoOriginal}</div>
        <div class="col-span-2 text-left truncate ">{localizacao.DsCaminhoCopiaArquivoProcessado}</div>
        <div class="col-span-1 text-left truncate ">{localizacao.DsPadraoNomeArquivo}</div>
        <span class="absolute right-4 bg-red-50 pr-2 pl-2 rounded-xl hidden group-hover:block">
            <ul class="inline-flex cursor-pointer">
                <li class="p-2 mt-1 hover:bg-red-100 rounded-full" title="Excluir">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.34042 4.5H10.2766C10.2766 4.10218 10.1219 3.72064 9.8466 3.43934C9.57128 3.15804 9.19786 3 8.8085 3C8.41914 3 8.04573 3.15804 7.77041 3.43934C7.49509 3.72064 7.34042 4.10218 7.34042 4.5V4.5ZM5.87233 4.5C5.87233 3.70435 6.18168 2.94129 6.73232 2.37868C7.28296 1.81607 8.02978 1.5 8.8085 1.5C9.58722 1.5 10.3341 1.81607 10.8847 2.37868C11.4353 2.94129 11.7447 3.70435 11.7447 4.5H15.4149C15.6096 4.5 15.7963 4.57902 15.9339 4.71967C16.0716 4.86032 16.1489 5.05109 16.1489 5.25C16.1489 5.44891 16.0716 5.63968 15.9339 5.78033C15.7963 5.92098 15.6096 6 15.4149 6H14.7675L14.1171 13.755C14.0546 14.5038 13.7192 15.2014 13.1774 15.7098C12.6356 16.2181 11.9268 16.5001 11.1912 16.5H6.4258C5.69022 16.5001 4.98141 16.2181 4.43959 15.7098C3.89778 15.2014 3.56243 14.5038 3.49991 13.755L2.84955 6H2.20212C2.00744 6 1.82073 5.92098 1.68307 5.78033C1.54541 5.63968 1.46808 5.44891 1.46808 5.25C1.46808 5.05109 1.54541 4.86032 1.68307 4.71967C1.82073 4.57902 2.00744 4.5 2.20212 4.5H5.87233ZM11.0106 9C11.0106 8.80109 10.9333 8.61032 10.7956 8.46967C10.658 8.32902 10.4713 8.25 10.2766 8.25C10.0819 8.25 9.8952 8.32902 9.75754 8.46967C9.61988 8.61032 9.54255 8.80109 9.54255 9V12C9.54255 12.1989 9.61988 12.3897 9.75754 12.5303C9.8952 12.671 10.0819 12.75 10.2766 12.75C10.4713 12.75 10.658 12.671 10.7956 12.5303C10.9333 12.3897 11.0106 12.1989 11.0106 12V9ZM7.34042 8.25C7.5351 8.25 7.72181 8.32902 7.85947 8.46967C7.99712 8.61032 8.07446 8.80109 8.07446 9V12C8.07446 12.1989 7.99712 12.3897 7.85947 12.5303C7.72181 12.671 7.5351 12.75 7.34042 12.75C7.14574 12.75 6.95903 12.671 6.82137 12.5303C6.68371 12.3897 6.60638 12.1989 6.60638 12V9C6.60638 8.80109 6.68371 8.61032 6.82137 8.46967C6.95903 8.32902 7.14574 8.25 7.34042 8.25V8.25ZM4.96212 13.6275C4.99339 14.0021 5.16117 14.351 5.43223 14.6051C5.7033 14.8593 6.05789 15.0002 6.4258 15H11.1912C11.5589 14.9999 11.9131 14.8588 12.1838 14.6046C12.4546 14.3505 12.6222 14.0018 12.6534 13.6275L13.2935 6H4.3235L4.96359 13.6275H4.96212Z"
                            fill="#E23C50"
                        />
                    </svg>
                </li>
                <li class="p-2 mt-1 hover:bg-red-100 rounded-full" title="Logs">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.125 10.6875H16.875V11.8125H10.125V10.6875ZM10.125 12.9375H16.875V14.0625H10.125V12.9375ZM10.125 15.1875H14.625V16.3125H10.125V15.1875Z"
                            fill="#E23C50"
                        />
                        <path
                            d="M13.5 2.25C13.0025 2.25148 12.5196 2.41795 12.1269 2.72333C11.7342 3.0287 11.4539 3.45573 11.3299 3.9375H6.75V2.25H2.25V6.75H6.75V5.0625H11.3299C11.3823 5.26384 11.4627 5.45679 11.5689 5.63569L5.63569 11.5689C5.29276 11.3623 4.90038 11.2521 4.5 11.25C4.07882 11.2484 3.66566 11.3651 3.30751 11.5867C2.94937 11.8084 2.66063 12.1261 2.47414 12.5038C2.28766 12.8814 2.21092 13.3038 2.25265 13.7229C2.29439 14.142 2.45292 14.541 2.71022 14.8745C2.96751 15.2079 3.31324 15.4625 3.70806 15.6092C4.10288 15.7558 4.53094 15.7887 4.94354 15.7041C5.35614 15.6195 5.73671 15.4208 6.04194 15.1306C6.34718 14.8404 6.56483 14.4703 6.67013 14.0625H9V12.9375H6.67013C6.61774 12.7362 6.53726 12.5432 6.43106 12.3643L12.3643 6.43106C12.7072 6.63771 13.0996 6.7479 13.5 6.75C14.0967 6.75 14.669 6.51295 15.091 6.09099C15.5129 5.66903 15.75 5.09674 15.75 4.5C15.75 3.90326 15.5129 3.33097 15.091 2.90901C14.669 2.48705 14.0967 2.25 13.5 2.25ZM5.625 5.625H3.375V3.375H5.625V5.625ZM4.5 14.625C4.2775 14.625 4.05999 14.559 3.87499 14.4354C3.68998 14.3118 3.54579 14.1361 3.46064 13.9305C3.37549 13.725 3.35321 13.4988 3.39662 13.2805C3.44003 13.0623 3.54717 12.8618 3.70451 12.7045C3.86184 12.5472 4.0623 12.44 4.28053 12.3966C4.49875 12.3532 4.72495 12.3755 4.93052 12.4606C5.13609 12.5458 5.31179 12.69 5.43541 12.875C5.55902 13.06 5.625 13.2775 5.625 13.5C5.6247 13.7983 5.50608 14.0843 5.29517 14.2952C5.08425 14.5061 4.79828 14.6247 4.5 14.625V14.625ZM13.5 5.625C13.2775 5.625 13.06 5.55902 12.875 5.4354C12.69 5.31179 12.5458 5.13609 12.4606 4.93052C12.3755 4.72495 12.3532 4.49875 12.3966 4.28052C12.44 4.06229 12.5472 3.86184 12.7045 3.7045C12.8618 3.54717 13.0623 3.44002 13.2805 3.39662C13.4988 3.35321 13.725 3.37549 13.9305 3.46064C14.1361 3.54578 14.3118 3.68998 14.4354 3.87498C14.559 4.05999 14.625 4.2775 14.625 4.5C14.6247 4.79828 14.5061 5.08425 14.2952 5.29517C14.0843 5.50608 13.7983 5.6247 13.5 5.625V5.625Z"
                            fill="#E23C50"
                        />
                    </svg>
                </li>
                <li class="p-2 mt-1 hover:bg-red-100 rounded-full" title="Detalhes">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.625 10.125C5.92337 10.125 6.20952 10.0065 6.42049 9.79549C6.63147 9.58452 6.75 9.29837 6.75 9C6.75 8.70163 6.63147 8.41548 6.42049 8.20451C6.20952 7.99353 5.92337 7.875 5.625 7.875C5.32663 7.875 5.04048 7.99353 4.82951 8.20451C4.61853 8.41548 4.5 8.70163 4.5 9C4.5 9.29837 4.61853 9.58452 4.82951 9.79549C5.04048 10.0065 5.32663 10.125 5.625 10.125ZM9 10.125C9.29837 10.125 9.58452 10.0065 9.79549 9.79549C10.0065 9.58452 10.125 9.29837 10.125 9C10.125 8.70163 10.0065 8.41548 9.79549 8.20451C9.58452 7.99353 9.29837 7.875 9 7.875C8.70163 7.875 8.41548 7.99353 8.20451 8.20451C7.99353 8.41548 7.875 8.70163 7.875 9C7.875 9.29837 7.99353 9.58452 8.20451 9.79549C8.41548 10.0065 8.70163 10.125 9 10.125ZM13.5 9C13.5 9.29837 13.3815 9.58452 13.1705 9.79549C12.9595 10.0065 12.6734 10.125 12.375 10.125C12.0766 10.125 11.7905 10.0065 11.5795 9.79549C11.3685 9.58452 11.25 9.29837 11.25 9C11.25 8.70163 11.3685 8.41548 11.5795 8.20451C11.7905 7.99353 12.0766 7.875 12.375 7.875C12.6734 7.875 12.9595 7.99353 13.1705 8.20451C13.3815 8.41548 13.5 8.70163 13.5 9ZM16.875 9C16.875 13.3492 13.3492 16.875 9 16.875C4.65075 16.875 1.125 13.3492 1.125 9C1.125 4.65075 4.65075 1.125 9 1.125C13.3492 1.125 16.875 4.65075 16.875 9ZM15.75 9C15.75 5.27231 12.7277 2.25 9 2.25C5.27231 2.25 2.25 5.27231 2.25 9C2.25 12.7277 5.27231 15.75 9 15.75C12.7277 15.75 15.75 12.7277 15.75 9Z"
                            fill="#E23C50"
                        />
                    </svg>
                </li>
            </ul>
        </span>
        {/each}
    </div>
</form>