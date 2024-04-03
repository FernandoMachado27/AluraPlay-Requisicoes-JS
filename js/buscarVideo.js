import { conectaApi } from "./conectaApi.js";
import constoiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild); // lista de item que quero pesquisar
    }

    busca.forEach(elemento => lista.appendChild(
        constoiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))) // criou um card para cada elemento da lista

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo.</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento)); // adicionando evento de click no botão, enviando para função