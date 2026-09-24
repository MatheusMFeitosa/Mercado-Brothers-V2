let LISTA_USUARIOS_CADASTRADOS = JSON.parse(localStorage.getItem("usuarios")) || [];

function verificarLogin() {
    const emailUsuario = document.getElementById("preencher_email").value.trim();
    const senhaUsuario = document.getElementById("preencher_senha").value;

    for (let i = 0; i < LISTA_USUARIOS_CADASTRADOS.length; i++) {
        if (emailUsuario === LISTA_USUARIOS_CADASTRADOS[i].email &&
            senhaUsuario === LISTA_USUARIOS_CADASTRADOS[i].senha) {
            return true;
        }
    }
    return false;
}


const botaoEntrar = document.querySelector(".botao-enviar-formulario")

botaoEntrar.addEventListener("click", (evento) =>{
    evento.preventDefault();

    if (!verificarLogin()) {
        return alert("Seu e-mail ou senha estão incorretos");  
    }
    window.location.href = "index.html";
})