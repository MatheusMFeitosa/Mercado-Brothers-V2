import {contadorItensCarrinho} from "./contadorCarrinho.js";
import { LISTA_PRODUTOS } from "./dadosProdutos.js";

const botaoCarrinho = document.querySelector(".fa-cart-shopping");
botaoCarrinho.addEventListener("click", () => {
    window.location.href = "carrinho.html"
});

const botaoLogin = document.querySelector(".fa-circle-user");

function iniciarSessao() {
    const usuarioAtivo = JSON.parse(sessionStorage.getItem("usuarioLogado"));

    if (usuarioAtivo) {
        // Pega apenas o primeiro nome
        const primeiroNome = usuarioAtivo.nome.split(" ")[0];

        // Cria o elemento de texto para o nome
        const spanNome = document.createElement("span");
        spanNome.classList.add("nome-usuario-logado");
        spanNome.textContent = `Olá, ${primeiroNome}`;

        // Envolve o ícone existente em uma nova div para facilitar o layout
        const containerAvatar = document.createElement("div");
        containerAvatar.classList.add("container-avatar");
        
        // Insere o container no lugar do ícone original, e depois põe o ícone dentro dele
        botaoLogin.parentNode.insertBefore(containerAvatar, botaoLogin);
        containerAvatar.append(botaoLogin);
        containerAvatar.append(spanNome);

        // Ação de Logout (Sair) clicaando no container inteiro
        containerAvatar.addEventListener("click", () => {
            const desejaSair = confirm(`Você está logado como ${usuarioAtivo.nome}. Deseja sair da conta?`);
            if (desejaSair) {
                sessionStorage.removeItem("usuarioLogado"); 
                window.location.reload(); 
            }
        });
    } else {
        // Comportamento normal se NÃO estiver logado
        botaoLogin.addEventListener("click", () => {
            window.location.href = "loginUsuario.html";
        });
    }
}

iniciarSessao();

function adicionarQuantidadeProduto(nomeProduto, quantidadeEscolhida) {
    if (quantidadeEscolhida <= 0) {
        alert("Por favor, adicione pelo menos 1 item.");
        return;
    }

    // Busca os dados originais do produto na nossa Base de Dados Centralizada
    const produtoDb = LISTA_PRODUTOS.find(produto => produto.nomeProduto === nomeProduto);

    // Puxa o carrinho atual do localStorage OU cria um array vazio se não existir
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Verifica se o item já foi adicionado ao carrinho antes
    let indexItem = carrinho.findIndex(item => item.nomeProduto === nomeProduto);

    if (indexItem !== -1) {
        // Se já existe, apenas atualiza a quantidade
        carrinho[indexItem].quantidade = quantidadeEscolhida;
    } else {
        // Se não existe, cria um novo item no array do carrinho
        carrinho.push({
            nomeProduto: produtoDb.nomeProduto,
            precoProduto: produtoDb.precoProduto,
            quantidade: quantidadeEscolhida
        });
    }

    // Salva o carrinho atualizado de volta no navegador
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    
    alert(`${nomeProduto} adicionado ao carrinho!`);
    contadorItensCarrinho();
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