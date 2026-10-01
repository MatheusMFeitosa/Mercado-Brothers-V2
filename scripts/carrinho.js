const botaoInicio = document.querySelector(".fa-house");

botaoInicio.addEventListener("click", () => {
    window.location.href = "index.html";
});

function getCarrinho() {
    return JSON.parse(localStorage.getItem("carrinho")) || [];
}

function setCarrinho(carrinhoArray) {
    localStorage.setItem("carrinho", JSON.stringify(carrinhoArray));
}

function mostrarProdutosTela() {
    const listaProdutosCarrinho = document.querySelector(".lista-produtos-carrinho");
    const botaoFinalizarCompra = document.querySelector(".finalizar-compra");
    
    // Limpa a tela antes de recriar
    listaProdutosCarrinho.replaceChildren();
    
    const carrinho = getCarrinho();
    
    // Mostra itens que têm quantidade maior que zero
    let carrinhoVazio = true;
    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].quantidade > 0) {
            adicionarElementosHtml(carrinho[i]);
            carrinhoVazio = false;
        }
    }

    // Configura o evento do botão Finalizar
    botaoFinalizarCompra.onclick = () => { // Usamos .onclick para evitar duplicar listeners caso a tela re-renderize
        if (carrinhoVazio) {
            alert("Seu carrinho está vazio! Adicione produtos antes de finalizar a compra.");
            return;
        }
        
        alert("Compra finalizada!");
        
        // Esvazia as quantidades do carrinho, mas mantém a estrutura
        const carrinhoZeradinho = carrinho.map(item => {
            return { ...item, quantidade: 0 };
        });
        
        setCarrinho(carrinhoZeradinho);
        mostrarProdutosTela();
    };

    mostrarMensagemCarrinhoVazio();
    atualizarTotalCarrinho();
}

function atualizarTotalCarrinho() {
    const carrinho = getCarrinho();
    let total = 0;

    for (let i = 0; i < carrinho.length; i++) {
        if (carrinho[i].quantidade > 0) {
            total += carrinho[i].precoProduto * carrinho[i].quantidade;
        }
    }

    const elementoTotal = document.getElementById("valor-total");
    
    // Utilizando a API nativa de internacionalizacao para formatar moeda Brasileira (BRL)
    elementoTotal.textContent = `Total: ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
}

function adicionarElementosHtml(listaOriginal){
    const listaProdutosCarrinho = document.querySelector(".lista-produtos-carrinho");

    const liProduto = document.createElement("li");
    const divProduto = document.createElement("div");
    const imgProduto = document.createElement("img");
    const h4Produto = document.createElement("h4");
    const precoProduto = document.createElement("p");
    const quantidadeProduto = document.createElement("p");
    const spanQuantidadeProduto = document.createElement("span");
    const divAcoesCarrinho = document.createElement("div");
    const buttonDeletarItem = document.createElement("button");
    const iconeDeletar = document.createElement("i");

    divProduto.classList.add("info-produto");
    divAcoesCarrinho.classList.add("acoes-carrinho");
    iconeDeletar.classList.add("fa-solid", "fa-trash");
    buttonDeletarItem.classList.add("botao-deletar-item");

    imgProduto.src = `../img/${listaOriginal["nomeProduto"]}.jpg`;
    h4Produto.textContent = listaOriginal["nomeProduto"];

    precoProduto.textContent = `R$ ${listaOriginal["precoProduto"].toFixed(2)}`;

    spanQuantidadeProduto.textContent = listaOriginal["quantidade"];
    quantidadeProduto.textContent = "Quantidade: ";

    quantidadeProduto.append(spanQuantidadeProduto);

    buttonDeletarItem.addEventListener("click", () => {
        deletarItem(listaOriginal["nomeProduto"]);
    });

    listaProdutosCarrinho.append(liProduto);

    liProduto.append(divProduto);
    divProduto.append(imgProduto);
    divProduto.append(h4Produto);
    divProduto.append(precoProduto);
    divProduto.append(quantidadeProduto);

    liProduto.append(divAcoesCarrinho);
    divAcoesCarrinho.append(buttonDeletarItem);
    buttonDeletarItem.append(iconeDeletar);
}

function deletarItem(nomeProduto) {
    let carrinho = getCarrinho();

    // Procura a posição do produto que queremos deletar
    let indexItem = carrinho.findIndex(item => item.nomeProduto === nomeProduto);

    if (indexItem !== -1) {
        carrinho[indexItem].quantidade = 0;
        setCarrinho(carrinho); // Salva de volta no storage
        mostrarProdutosTela();
    }
}

function mostrarMensagemCarrinhoVazio(){
    const listaProdutosCarrinho = document.querySelector(".lista-produtos-carrinho");
    const mensagemExistente = document.querySelector(".mensagem-carrinho-vazio");

    if (listaProdutosCarrinho.children.length === 0) {
        if (!mensagemExistente) {
            const liMensagemVazia = document.createElement("li");
            const h4MensagemVazia = document.createElement("h4");

            liMensagemVazia.classList.add("mensagem-carrinho-vazio");
            liMensagemVazia.style.justifyContent = "center";

            h4MensagemVazia.textContent = "Nenhum item adicionado ao carrinho no momento...";

            liMensagemVazia.append(h4MensagemVazia);
            listaProdutosCarrinho.append(liMensagemVazia);
        }
    } else {
        if (mensagemExistente) {
            mensagemExistente.remove();
        }
    }
}

mostrarProdutosTela();