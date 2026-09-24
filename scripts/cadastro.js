let LISTA_USUARIOS = JSON.parse(localStorage.getItem("usuarios")) || [];

function gerarIdUsuario() {
    if(LISTA_USUARIOS.length == 0){
        return 0;        
    }

    let idUsuairo = LISTA_USUARIOS.at(-1).id;

    if(idUsuairo != undefined){
        return idUsuairo + 1;
    }
}

function salvarUsuario(event) {
    event.preventDefault();

    const nomeUsuario = document.getElementById("preencher_nome").value;
    const emailUsuario = document.getElementById("preencher_email").value;
    const senhaUsuario = document.getElementById("preencher_senha").value;

    const usuario = {
        id: gerarIdUsuario(), 
        nome: nomeUsuario, 
        email: emailUsuario, 
        senha: senhaUsuario
    };
    
    LISTA_USUARIOS.push(usuario);
    
    localStorage.setItem("usuarios", JSON.stringify(LISTA_USUARIOS));

    window.location.href = "loginUsuario.html";
}

const botaoCadastrar = document.querySelector(".botao-enviar-formulario")

botaoCadastrar.addEventListener("click", (event) => {
    salvarUsuario(event);
})
