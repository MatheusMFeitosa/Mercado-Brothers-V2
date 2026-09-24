import { adicionarQuantidadeProduto} from "./index.js";

const LISTA_PRODUTOS = [
    {
        nomeProduto: "Tomate",
        precoProduto: 3.50,
        categoria: "alimentos",
        subCategorias: ["hortifruti", "vegetais"],
        quantidade: 0
    },
    {
        nomeProduto: "Feijao",
        precoProduto: 10.00,
        categoria: "alimentos",
        subCategorias: ["grãos", "leguminosas"],
        quantidade: 0
    },
    {
        nomeProduto: "Farinha",
        precoProduto: 5.00,
        categoria: "alimentos",
        subCategorias: ["mercearia", "farinhas"],
        quantidade: 0
    },
    {
        nomeProduto: "Arroz",
        precoProduto: 5.00,
        categoria: "alimentos",
        subCategorias: ["grãos", "cereais"],
        quantidade: 0
    },
    {
        nomeProduto: "Detergente",
        precoProduto: 2.50,
        categoria: "limpeza",
        subCategorias: ["cozinha", "detergentes"],
        quantidade: 0
    },
    {
        nomeProduto: "Sabao",
        precoProduto: 8.00,
        categoria: "limpeza",
        subCategorias: ["lavanderia", "sabões"],
        quantidade: 0
    }
];

function mostrarProdutosTela(produtosTela) {
    const main = document.querySelector("main");
    main.replaceChildren();

    let categorias = [];

    for (let i = 0; i < produtosTela.length; i++) {
        let categoriaAtual = produtosTela[i].categoria;

        if (!categorias.includes(categoriaAtual)) {
            categorias.push(categoriaAtual);
        }
    }

    for (let i = 0; i < categorias.length; i++) {
        let categoria = categorias[i];

        const secaoCategoria = document.createElement("section");
        const tituloCategoria = document.createElement("h2");
        const divListaProdutos = document.createElement("div");

        secaoCategoria.classList.add("conteiner-categoria");
        secaoCategoria.dataset.categoria = categoria;

        divListaProdutos.classList.add("conteiner-produtos");

        tituloCategoria.textContent =
            categoria.charAt(0).toUpperCase() + categoria.slice(1);

        secaoCategoria.append(tituloCategoria);
        secaoCategoria.append(divListaProdutos);

        for (let j = 0; j < produtosTela.length; j++) {
            if (produtosTela[j].categoria === categoria) {
                adicionarProdutoHTML(produtosTela[j], divListaProdutos);
            }
        }

        main.append(secaoCategoria);
    }
}


function adicionarProdutoHTML(produto, containerDestino) {
    const divProduto = document.createElement("div");
    const imgProduto = document.createElement("img");
    const h4Produto = document.createElement("h4");
    const descricaoProduto = document.createElement("p");
    const divCompra = document.createElement("div");
    const precoProduto = document.createElement("p");
    const divContainerQuantidade = document.createElement("div");
    const descricaoQuantidade = document.createElement("p");
    const divQuantidade = document.createElement("div");
    const iconeDiminuirQuantidade = document.createElement("i");
    const quantidade = document.createElement("p");
    const iconeAumentarQuantidade = document.createElement("i");
    const botaoAdicionar = document.createElement("button");
    const iconeCarrinho = document.createElement("i");

    // Produto
    divProduto.classList.add("produto");
    divProduto.classList.add(produto.categoria);

    // Adiciona as subcategorias como classes
    divProduto.classList.add(...produto.subCategorias);

    // Compra
    divCompra.classList.add("compra");

    // Quantidade
    divContainerQuantidade.classList.add("container-quantidade");
    divQuantidade.classList.add("quantidade");

    // Ícones
    iconeAumentarQuantidade.classList.add("fa-solid", "fa-plus");
    iconeDiminuirQuantidade.classList.add("fa-solid", "fa-minus");

    // Botão
    botaoAdicionar.classList.add("botao-adicionar-carrinho");

    // Carrinho
    iconeCarrinho.classList.add("fa-solid", "fa-cart-plus");

    // Imagem
    imgProduto.src = `../img/${produto.nomeProduto}.jpg`;
    imgProduto.alt = produto.nomeProduto;

    // Nome
    h4Produto.classList.add("nomeProduto");
    h4Produto.textContent = produto.nomeProduto;

    // Descrição
    descricaoProduto.textContent = "Teste Descrição";

    // Quantidade
    descricaoQuantidade.textContent = "Quantidade";
    quantidade.textContent = produto.quantidade;

    // Preço
    precoProduto.textContent = `R$ ${produto.precoProduto.toFixed(2)}`;

    // Aumentar quantidade
    iconeAumentarQuantidade.addEventListener("click", () => {
        let quantidadeAtual = parseInt(quantidade.textContent);

        if (quantidadeAtual < 10) {
            quantidadeAtual += 1;
            quantidade.textContent = quantidadeAtual;
        }
    });

    // Diminuir quantidade
    iconeDiminuirQuantidade.addEventListener("click", () => {
        let quantidadeAtual = parseInt(quantidade.textContent);

        if (quantidadeAtual > 0) {
            quantidadeAtual -= 1;
            quantidade.textContent = quantidadeAtual;
        }
    });

    // Botão adicionar
    botaoAdicionar.textContent = " Adicionar";

    botaoAdicionar.addEventListener("click", () => {
        let quantidadeSelecionada = parseInt(quantidade.textContent);

        adicionarQuantidadeProduto(
            produto.nomeProduto,
            quantidadeSelecionada
        );
    });

    // Montagem do produto
    containerDestino.append(divProduto);

    divProduto.append(imgProduto);
    divProduto.append(h4Produto);
    divProduto.append(descricaoProduto);
    divProduto.append(divContainerQuantidade);
    divProduto.append(divCompra);

    divContainerQuantidade.append(descricaoQuantidade);
    divContainerQuantidade.append(divQuantidade);

    divQuantidade.append(iconeDiminuirQuantidade);
    divQuantidade.append(quantidade);
    divQuantidade.append(iconeAumentarQuantidade);

    divCompra.append(precoProduto);
    divCompra.append(botaoAdicionar);

    botaoAdicionar.prepend(iconeCarrinho);
}

function filtrar() {
    const filtrosSelecionados = document.querySelectorAll('input[name="filtros"]:checked');
    const subFiltrosSelecionados = document.querySelectorAll('input[name="subFiltros"]:checked');

    let produtosCorrespondentes = [];

    LISTA_PRODUTOS.forEach(produto => {
        filtrosSelecionados.forEach(filtros => {
            if (filtros.value === produto.categoria && !produtosCorrespondentes.includes(produto)) {
                produtosCorrespondentes.push(produto)
            }
        });

        subFiltrosSelecionados.forEach(subFiltros => {

            produto.subCategorias.forEach(subCategoria => {
                if (subCategoria === subFiltros.value && !produtosCorrespondentes.includes(produto)) {
                    produtosCorrespondentes.push(produto)
                }
            });
        });
    });

    mostrarProdutosTela(produtosCorrespondentes)
}

window.filtrarProdutos = filtrar;
window.removerFiltros = function() {
    const filtros = document.querySelectorAll(
        'input[name="filtros"], input[name="subFiltros"]'
    );

    filtros.forEach(checkBox => {
        checkBox.checked = false;
    });

    mostrarProdutosTela(LISTA_PRODUTOS);
}


mostrarProdutosTela(LISTA_PRODUTOS)

export {mostrarProdutosTela, LISTA_PRODUTOS}