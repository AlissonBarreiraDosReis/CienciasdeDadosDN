const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const pessoasMundo = (dados.total_pessoas_mundo / 1e9)
    const pessoasComAcessoAEducacao = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const minutos = Math.round((dados.tempo_medio_dia_estudando - horas) * 60)
    const pessoasComEducacaoSuperior = (dados.total_pessoas_com_educacao_superior / 1e9)
    const percentual = ((pessoasComAcessoAEducacao/pessoasMundo)*100).toFixed(2)
`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()