import {contadorItensCarrinho} from "./contadorCarrinho.js";
import { LISTA_PRODUTOS } from "./dadosProdutos.js";

const botaoCarrinho = document.querySelector(".fa-cart-shopping");
botaoCarrinho.addEventListener("click", () => {
    window.location.href = "carrinho.html"
});

const botaoLogin = document.querySelector(".fa-circle-user");
botaoLogin.addEventListener("click", () => {
    window.location.href = "loginUsuario.html" 
});

function inicializarProdutos() {
    for (let i = 0; i < LISTA_PRODUTOS.length; i++) {
        let nomeDoProduto = LISTA_PRODUTOS[i].nomeProduto;

        if (localStorage.getItem(nomeDoProduto) === null) {
            localStorage.setItem(nomeDoProduto, JSON.stringify(LISTA_PRODUTOS[i]));
        }
    }
}

function adicionarQuantidadeProduto(nomeProduto, quantidadeEscolhida) {
    if (quantidadeEscolhida <= 0) {
        alert("Por favor, adicione pelo menos 1 item.");
        return;
    }

    let valor = localStorage.getItem(nomeProduto);

    if (valor) {
        let listaOriginal = JSON.parse(valor);
        listaOriginal["quantidade"] = quantidadeEscolhida;
        localStorage.setItem(nomeProduto, JSON.stringify(listaOriginal));
        alert(`${nomeProduto} adicionado ao carrinho!`);
        contadorItensCarrinho();
    }
}

const botaoAlternarMenuLateral = document.querySelector("#botao_menu");
const menuLateral = document.querySelector(".menu-lateral");

botaoAlternarMenuLateral.addEventListener("click", () => {
    menuLateral.classList.toggle("fechado");

    if (menuLateral.classList.contains("fechado")) {
        botaoAlternarMenuLateral.classList.remove("fa-xmark");
        botaoAlternarMenuLateral.classList.add("fa-sort-down");
    } else {
        botaoAlternarMenuLateral.classList.remove("fa-sort-down");
        botaoAlternarMenuLateral.classList.add("fa-xmark");
    }
});

localStorage.clear()

export { adicionarQuantidadeProduto };