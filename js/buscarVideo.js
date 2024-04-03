import { conectaApi } from "./conectaApi.js";
import constoiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    busca.array.forEach(elemento => lista.appendChild(
        constoiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))) // criou um card para cada elemento da lista
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento)); // adicionando evento de click no botão, enviando para função