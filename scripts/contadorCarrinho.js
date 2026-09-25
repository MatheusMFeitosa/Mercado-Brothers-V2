import { LISTA_PRODUTOS } from "./produtos.js";

function contadorItensCarrinho() {
    let contador = 0;

    for (let i = 0; i < LISTA_PRODUTOS.length; i++) {
        let produtoAtual = localStorage.getItem(LISTA_PRODUTOS[i].nomeProduto)
        produtoAtual = JSON.parse(produtoAtual)

        if (produtoAtual["quantidade"] > 0) {
            contador += 1;
        }
    }

    if(contador != 0){
        mostrarContadorCarrinho(contador)
    }
}

function mostrarContadorCarrinho(contador) {
    const carrinho = document.querySelector(".fa-cart-shopping");
    carrinho.setAttribute("data-after", contador)

    carrinho.classList.add("ativo");
}


contadorItensCarrinho()


export {contadorItensCarrinho};