<script>
	let localizacoes = [{
            CdArquivo: 1,
            DsArquivo: "Arqsaldodesc",
            DsCaminhoArquivo: "asas",
            DsCaminhoArquivoProcessado: "asas",
            DsCaminhoArquivoNaoProcessado: "asas",
            DsCaminhoCopiaArquivoOriginal: "asas",
            DsCaminhoCopiaArquivoProcessado: "asas",
            DsPadraoNomeArquivo: "asas"
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

</script>

<localizacoes {...info}/>
<div class="grid grid-cols-12 gap-4 text-azul-desty text-sm pt-2 pb-2 text-center border-b border-red-50 group cursor-pointer hover:bg-gray-50!">
	{#each localizacoes as localizacao}
		<div class="col-span-2 text-left inline-flex items-center">
			<h5>
				<strong>{localizacao.CdArquivo}</strong>
				<span>
					<small>
						{localizacao.DsArquivo}
					</small>
				</span>
				<div class="col-span-2 text-left inline-flex items-center">{localizacao.DsCaminhoArquivo}</div>
				<div class="col-span-2 text-left inline-flex items-center"><p>{localizacao.DsCaminhoArquivoNaoProcessado}</p></div>
			</h5>
		</div>
	{/each}
</div>