async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) { // função que possibilita inserção de novos dados na API
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = { // exportando para ser utilizada em outros arquivos
    listaVideos,
    criaVideo
} 