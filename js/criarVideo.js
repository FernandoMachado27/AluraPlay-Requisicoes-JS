import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) { // função que capta os dados digitado no formulario
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value; // pegando o valor que o usuario está digitando
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descrição = Math.floor(Math.random() * 10).toString(); // número aleatorio em string

    try{
        await conectaApi.criaVideo(titulo, descrição, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
    } catch(e) {
        alert(e);
    }
    
}

formulario.addEventListener("submit", evento => criarVideo(evento)); // chama a função quando clicar em submit 