import { mostrarProdutosTela } from './produtos.js';
import { LISTA_PRODUTOS } from "./dadosProdutos.js";

const inputPesquisa = document.getElementById("barra_pesquisa");

inputPesquisa.addEventListener("input", () => {
    // Pegamos o que o usuário digitou, em minúsculas e sem espaços inúteis
    const termoBusca = inputPesquisa.value.toLowerCase().trim();

    // Filtramos o Banco de Dados diretamente na memória
    const produtosFiltrados = LISTA_PRODUTOS.filter((produto) => {
        const nomeProdutoMinusculo = produto.nomeProduto.toLowerCase();
        return nomeProdutoMinusculo.includes(termoBusca);
    });

    mostrarProdutosTela(produtosFiltrados);
});
