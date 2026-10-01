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

    const nomeUsuario = document.getElementById("preencher_nome").value.trim();
    const emailUsuario = document.getElementById("preencher_email").value.trim();
    const senhaUsuario = btoa(document.getElementById("preencher_senha").value);

    // Elemento de erro que criamos no HTML
    const erroEmailCadastrado = document.getElementById("erro_email_cadastrado");

    // Verifica se já existe algum usuário com este e-mail
    const emailJaExiste = LISTA_USUARIOS.some(usuario => usuario.email === emailUsuario);

    if (emailJaExiste) {
        // Mostra o erro na tela e para a função (return)
        erroEmailCadastrado.style.display = "block";
        return; 
    } else {
        // Esconde o erro caso ele tenha arrumado o e-mail
        erroEmailCadastrado.style.display = "none";
    }

    // Se passou da validação, cria o usuário normalmente
    const usuario = {
        id: gerarIdUsuario(), 
        nome: nomeUsuario, 
        email: emailUsuario, 
        senha: senhaUsuario
    };
    
    LISTA_USUARIOS.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(LISTA_USUARIOS));

    alert("Você foi cadastrado! Faça seu login."); // Feedback positivo é essencial em UX
    window.location.href = "loginUsuario.html";
}

const botaoCadastrar = document.querySelector(".botao-enviar-formulario")

botaoCadastrar.addEventListener("click", (event) => {
    salvarUsuario(event);
})
