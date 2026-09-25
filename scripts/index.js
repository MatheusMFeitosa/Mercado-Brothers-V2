import {contadorItensCarrinho} from "./contadorCarrinho.js";

const LISTA_PRODUTOS = [
    { nomeProduto: "Tomate", precoProduto: 3.50, categoria: ["alimentos", "hortifruti", "vegetais"], quantidade: 0 },
    { nomeProduto: "Feijao", precoProduto: 10.00, categoria: ["alimentos", "grãos", "leguminosas"], quantidade: 0 },
    { nomeProduto: "Farinha", precoProduto: 5.00, categoria: ["alimentos", "mercearia", "farinhas"], quantidade: 0 },
    { nomeProduto: "Arroz", precoProduto: 5.00, categoria: ["alimentos", "grãos", "cereais"], quantidade: 0 },
    { nomeProduto: "Detergente", precoProduto: 2.50, categoria: ["limpeza", "cozinha", "detergentes"], quantidade: 0 },
    { nomeProduto: "Sabao", precoProduto: 8.00, categoria: ["limpeza", "lavanderia", "sabões"], quantidade: 0 }
];

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

export { LISTA_PRODUTOS, adicionarQuantidadeProduto};