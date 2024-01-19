import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

function criarVideo(evento) {
    const imagem = document.querySelector("[data-imagem]").value; // pegando o valor que o usuario está digitando
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descrição = Math.floor(Math.random() * 10).toString(); // número aleatorio em string
}

formulario.addEventListener("submit", evento => criarVideo(evento)); // chama a função quando clicar em submit 