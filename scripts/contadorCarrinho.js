function contadorItensCarrinho() {
    // Busca apenas a chave "carrinho"
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let contador = 0;

    // Conta quantos tipos de itens diferentes têm no carrinho
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].quantidade > 0) {
            contador += 1;
        }
    }

    mostrarContadorCarrinho(contador);
}

function mostrarContadorCarrinho(contador) {
    const iconeCarrinho = document.querySelector(".fa-cart-shopping");
    
    if (contador > 0) {
        iconeCarrinho.setAttribute("data-after", contador);
        iconeCarrinho.classList.add("ativo");
    } else {
        // Se não tiver nada, remove a bolinha vermelha
        iconeCarrinho.classList.remove("ativo");
    }
}

// Inicializa a contagem ao carregar a página
contadorItensCarrinho();

export { contadorItensCarrinho };