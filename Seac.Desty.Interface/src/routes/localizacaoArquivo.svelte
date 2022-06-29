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
        CdArquivo: 0,
        DsArquivo: "",
        DsCaminhoArquivo: "",
        DsCaminhoArquivoProcessado: "",
        DsCaminhoArquivoNaoProcessado: "",
        DsCaminhoCopiaArquivoOriginal: "",
        DsCaminhoCopiaArquivoProcessado: "",
        DsPadraoNomeArquivo: ""
    };

    let editStatus = false;
    
    const cleanCaminhos = () => {
        localizacao = {
            CdArquivo: 0,
            DsArquivo: "",
            DsCaminhoArquivo: "",
            DsCaminhoArquivoProcessado: "",
            DsCaminhoArquivoNaoProcessado: "",
            DsCaminhoCopiaArquivoOriginal: "",
            DsCaminhoCopiaArquivoProcessado: "",
            DsPadraoNomeArquivo: ""
        };
    };

    const createLocalizacao = () => {
        const newLocalizacao = {
            CdArquivo: localizacoes.length + 1,
            DsArquivo: localizacao.DsArquivo,
            DsCaminhoArquivo: localizacao.DsCaminhoArquivo,
            DsCaminhoArquivoProcessado: localizacao.DsCaminhoArquivoProcessado,
            DsCaminhoArquivoNaoProcessado: localizacao.DsCaminhoArquivoNaoProcessado,
            DsCaminhoCopiaArquivoOriginal: localizacao.DsCaminhoCopiaArquivoOriginal,
            DsCaminhoCopiaArquivoProcessado: localizacao.DsCaminhoCopiaArquivoProcessado,
            DsPadraoNomeArquivo: localizacao.DsPadraoNomeArquivo
        }

        localizacoes = localizacoes.concat(newLocalizacao);

        cleanCaminhos();
        console.log(localizacoes);
    };

    const deleteLocalizacao = (id) => {
        localizacoes = localizacoes.filter(localizacao => localizacao.CdArquivo !== id);
    }

    const editLocalizacao = localizacaoEdited => {
        localizacao = localizacaoEdited;
        editStatus = true;
    }

    const updateLocalizacao = () => {
        let updatedLocalizacao = {
            CdArquivo: localizacao.CdArquivo,
            DsArquivo: localizacao.DsArquivo,
            DsCaminhoArquivo: localizacao.DsCaminhoArquivo,
            DsCaminhoArquivoProcessado: localizacao.DsCaminhoArquivoProcessado,
            DsCaminhoArquivoNaoProcessado: localizacao.DsCaminhoArquivoNaoProcessado,
            DsCaminhoCopiaArquivoOriginal: localizacao.DsCaminhoCopiaArquivoOriginal,
            DsCaminhoCopiaArquivoProcessado: localizacao.DsCaminhoCopiaArquivoProcessado,
            DsPadraoNomeArquivo: localizacao.DsPadraoNomeArquivo
        };

        const locazizacaoIndex = localizacoes.findIndex(x => x.CdArquivo === localizacao.CdArquivo);
        localizacoes[locazizacaoIndex] = updatedLocalizacao;
        cleanCaminhos();
        editStatus = false;
    }

    const onSubmitHandler = e => {
        if (!editStatus){
            createLocalizacao();
        } else { 
            updateLocalizacao();
        }
    };

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

<form on:submit|preventDefault={onSubmitHandler}>
<!------------------- cabeçalho --------------------------->
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
                        <input bind:value={localizacao.DsArquivo} type="text" placeholder="C:/Users/seu_nome/source/..." id="desc_arquivo" size="20" style="text-align: center;"/>
                    </div>
                </div>
            </div>

            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o caminho do arquivo</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsCaminhoArquivo} type="text" placeholder="C:/Users/seu_nome/source/..." id="caminho_arquivo" size="20"/>
                    </div>
                </div>
            </div>

            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o caminho do arquivo não processado</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsCaminhoArquivoNaoProcessado} type="text" placeholder="C:/Users/seu_nome/source/..." id="caminho_arquivo_processado" size="20"/>
                    </div>
                </div>
            </div>

            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o caminho do arquivo processado</p>
                    <div class="div_2">
                        <input bind:value="{localizacao.DsCaminhoArquivoProcessado}" type="text" placeholder="C:/Users/seu_nome/source/..." id="caminho_arquivo_nao_processado" size="20"/>
                    </div>
                </div>
            </div>
            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o caminho da copia do arquivo original</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsCaminhoCopiaArquivoOriginal} type="text" placeholder="C:/Users/seu_nome/source/..." id="caminho_arquivo_copia_original" size="20"/>
                    </div>
                </div>
            </div>

            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o caminho da copia do arquivo processado</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsCaminhoCopiaArquivoProcessado} type="text" placeholder="C:/Users/seu_nome/source/..." id="caminho_arquivo_copia_processado" size="20"/>
                    </div>
                </div>
            </div>

            <div class="div-principal">
                <div class="div_3">
                    <p>Insira o padrão de nome do arquivo</p>
                    <div class="div_2">
                        <input bind:value={localizacao.DsPadraoNomeArquivo} type="text" placeholder="Nome.Arquivo" id="padrao_nome_arquivo" size="20"/>
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
                    {#if !editStatus}
                    Salvar Caminhos
                    {:else}
                    Editar Caminhos
                    {/if}
                </button>
            </div>

<!------------------------ Cabeçalho da lista -------------------------------->
    <div
                class="grid grid-cols-9 gap-4 mt-7 text-center border-b border-red-50 pb-2 text-sm font-semibold text-vermelho-desty"
            >
                <div class="col-span-1 text-left inline-flex items-center ml-6">
                    <UserIconOutline size="16" class="mt-0 mr-1 text-vermelho-desty" />
                    <span class="col-span-1 text-left inline-flex w-10">Código</span>
                </div>
                <div class="col-span-1 text-left  inline-flex items-center">
                    <AtSymbolIconOutline size="16" class="mt-1 mr-1 text-vermelho-desty" />
                    Descrição
                </div>
                <div class="col-span-1 text-left  inline-flex items-center">
                    <PhotographIconOutline size="16" class="mt-0 mr-1 text-vermelho-desty" />
                    Caminho do Arquivo
                </div>
                <div class="col-span-1 text-left inline-flex items-center w-15">Caminho do Arquivo Processado</div>
                <div class="col-span-1 text-left inline-flex items-center">Caminho do Arquivo não processado</div>
                <div class="col-span-1 text-left inline-flex items-center">Caminho da Copia do Arquivo Original</div>
                <div class="col-span-1 text-left inline-flex items-center">Caminho do Arquivo da copia do Arquivo Processado</div>
                <div class="col-span-1 text-left inline-flex items-center">Padrão do nome do Arquivo</div>
            </div>

<!---------------------------------- Lista ------------------------->
        </form>   
        <div
        class="grid grid-cols-9 gap-4 text-azul-desty text-sm pt-2 pb-2 text-center border-b border-red-50 group cursor-pointer hover:bg-gray-50"
    >
    {#each localizacoes as localizacao}
        <div class="col-span-1 grid-cols-5 text-left inline-flex items-center">
            <input type="checkbox" class="m-2 invisible group-hover:visible" />
            <p class="truncate overflow-hidden">
                {localizacao.CdArquivo}<br />
            </p>
        </div>
        <div class="col-span-1 text-left truncate">{localizacao.DsArquivo}</div>
        <div class="col-span-1 text-left truncate">{localizacao.DsCaminhoArquivo}</div>
        <div class="col-span-1 text-center truncate w-50">{localizacao.DsCaminhoArquivoNaoProcessado}</div>
        <div class="col-span-1 text-left truncate ">{localizacao.DsCaminhoArquivoProcessado}</div>
        <div class="col-span-1 text-left truncate ">{localizacao.DsCaminhoCopiaArquivoOriginal}</div>
        <div class="col-span-1 text-left truncate ">{localizacao.DsCaminhoCopiaArquivoProcessado}</div>
        <div class="col-span-1 text-left truncate ">{localizacao.DsPadraoNomeArquivo}</div>
        <div class="col-span-1 inline-flex flex-row-reverse" style="padding-top: 10px;">
            <button class="inline-flex items-center text-sm bg-white hover:bg-red-50 text-azul-desty font-semibold py-2 px-4 border border-read-100 rounded shadow-sm" on:click={deleteLocalizacao(localizacao.CdArquivo)}>
                Deletar</button>

            <button class="inline-flex items-center text-sm bg-white hover:bg-red-50 text-azul-desty font-semibold py-2 px-4 border border-read-100 rounded shadow-sm" on:click={editLocalizacao(localizacao)}>
                Editar</button>
        </div>
        {/each}
    </div>