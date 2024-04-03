import { conectaApi } from "./conectaApi.js"; // utiliza a classe conecta API e as funções dele

const lista = document.querySelector("[data-lista]");

export default function constoiCard(titulo, descricao, url, imagem) { // export default -> para reutilizar função
    const video = document.createElement("li"); // cria elemento li
    video.className = "videos__item"; // coloca a classe videos__item
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`

    return video;
    console.log(video)
}

async function listaVideos() { // função para consumir funções do conectaApi
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(constoiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))) // para cada item da lista, uma "li" será criada
}

listaVideos();