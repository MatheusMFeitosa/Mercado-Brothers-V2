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
    }
}

// function mostrarProdutosTela(produtosTela = LISTA_PRODUTOS) {
//     const main = document.querySelector("main");
//     main.replaceChildren();

//     let categorias = [];
//     for (let i = 0; i < produtosTela.length; i++) {
//         let categoriaAtual = produtosTela[i].categoria;
//         if (!categorias.includes(categoriaAtual)) {
//             categorias.push(categoriaAtual);
//         }
//     }

//     for (let i = 0; i < categorias.length; i++) {
//         let categoria = categorias[i];

//         const secaoCategoria = document.createElement("section");
//         const tituloCategoria = document.createElement("h2");
//         const divListaProdutos = document.createElement("div");

//         secaoCategoria.classList.add("conteiner-categoria");
//         secaoCategoria.dataset.categoria = categoria;
//         divListaProdutos.classList.add("conteiner-produtos");

//         tituloCategoria.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);

//         secaoCategoria.append(tituloCategoria);
//         secaoCategoria.append(divListaProdutos);

//         for (let j = 0; j < produtosTela.length; j++) {
//             if (produtosTela[j].categoria === categoria) {
//                 adicionarProdutoHTML(produtosTela[j], divListaProdutos);
//             }
//         }

//         main.append(secaoCategoria);
//     }
// }

// function adicionarProdutoHTML(produto, containerDestino) {
//     const divProduto = document.createElement("div");
//     const imgProduto = document.createElement("img");
//     const h4Produto = document.createElement("h4");
//     const descricaoProduto = document.createElement("p");
//     const divCompra = document.createElement("div");
//     const precoProduto = document.createElement("p");
//     const divContainerQuantidade = document.createElement("div");
//     const descricaoQuantidade = document.createElement("p");
//     const divQuantidade = document.createElement("div");
//     const iconeDiminuirQuantidade = document.createElement("i");
//     const quantidade = document.createElement("p");
//     const iconeAumentarQuantidade = document.createElement("i");
//     const botaoAdicionar = document.createElement("button");
//     const iconeCarrinho = document.createElement("i");

//     divProduto.classList.add("produto");
//     divProduto.classList.add(...produto.categoria);
//     divCompra.classList.add("compra");
//     divContainerQuantidade.classList.add("container-quantidade");

//     divQuantidade.classList.add("quantidade");
//     iconeAumentarQuantidade.classList.add("fa-solid", "fa-plus")
//     iconeDiminuirQuantidade.classList.add("fa-solid", "fa-minus")

//     botaoAdicionar.classList.add("botao-adicionar-carrinho");
//     iconeCarrinho.classList.add("fa-solid", "fa-cart-plus");

//     imgProduto.src = `../img/${produto.nomeProduto}.jpg`;
//     imgProduto.alt = produto.nomeProduto;

//     h4Produto.classList.add("nomeProduto");
//     h4Produto.textContent = produto.nomeProduto;

//     descricaoProduto.textContent = "Teste Descrição";

//     descricaoQuantidade.textContent = "Quantidade";
//     quantidade.textContent = "0";

//     precoProduto.textContent = `R$ ${produto.precoProduto.toFixed(2)}`;

//     iconeAumentarQuantidade.addEventListener("click", () => {
//         let quantidadeAtual = parseInt(quantidade.textContent);

//         if (quantidadeAtual < 10) {
//             quantidadeAtual += 1;
//             quantidade.textContent = quantidadeAtual;
//         }
//     });

//     iconeDiminuirQuantidade.addEventListener("click", () => {
//         let quantidadeAtual = parseInt(quantidade.textContent);

//         if (quantidadeAtual > 0) {
//             quantidadeAtual -= 1;
//             quantidade.textContent = quantidadeAtual;
//         }
//     });

//     botaoAdicionar.classList.add("botao-adicionar-carrinho");
//     botaoAdicionar.textContent = " Adicionar";

//     botaoAdicionar.addEventListener("click", () => {
//         let quantidadeSelecionada = parseInt(quantidade.textContent)

//         adicionarQuantidadeProduto(produto.nomeProduto, quantidadeSelecionada);
//     });

//     containerDestino.append(divProduto);
//     divProduto.append(imgProduto);
//     divProduto.append(h4Produto);
//     divProduto.append(descricaoProduto);
//     divProduto.append(divContainerQuantidade);
//     divProduto.append(divCompra);

//     divContainerQuantidade.append(descricaoQuantidade);
//     divContainerQuantidade.append(divQuantidade);
//     divQuantidade.append(iconeDiminuirQuantidade);
//     divQuantidade.append(quantidade);
//     divQuantidade.append(iconeAumentarQuantidade);

//     divCompra.append(precoProduto);
//     divCompra.append(botaoAdicionar);
//     botaoAdicionar.prepend(iconeCarrinho);
// }


// // Window pois como colocamos a tag script esta configurada como type="module", as funçoes ficam isoladas dentro
// // do arquivo e os botoes perdem o acesso a elas. 

// window.filtrarProdutos = function() {
//     const filtroSelecionado = document.querySelectorAll('input[name="filtros"]:checked');
    

//     if (!filtroSelecionado) return;

//     const categoriaSelecionada = filtroSelecionado.value;
//     const secoes = document.querySelectorAll(".conteiner-categoria");

//     secoes.forEach((secao) => {
//         if (secao.dataset.categoria === categoriaSelecionada) {
//             secao.style.display = "flex";
//         } else {
//             secao.style.display = "none";
//         }
//     });
// }

// window.removerFiltros = function() {
//     const filtros = document.querySelectorAll('input[name="filtros"]');
//     filtros.forEach((checkBox) => checkBox.checked = false);

//     const secoes = document.querySelectorAll(".conteiner-categoria");
//     secoes.forEach((secao) => secao.style.display = "flex");
// }

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

inicializarProdutos();
// mostrarProdutosTela();

export { LISTA_PRODUTOS, adicionarQuantidadeProduto};