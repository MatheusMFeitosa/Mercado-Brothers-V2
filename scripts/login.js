let LISTA_USUARIOS_CADASTRADOS = JSON.parse(localStorage.getItem("usuarios")) || [];

function verificarLogin() {
    const emailUsuario = document.getElementById("preencher_email").value.trim();
    
    // Aplicamos a mesma máscara para conseguir comparar com o que foi salvo no cadastro
    const senhaUsuario = btoa(document.getElementById("preencher_senha").value);

    // .find() procura e devolve o usuário inteiro se as informações baterem
    const usuarioEncontrado = LISTA_USUARIOS_CADASTRADOS.find(u => u.email === emailUsuario && u.senha === senhaUsuario);

    if (usuarioEncontrado) {
        // O sessionStorage é perfeito para isso pois ele se apaga sozinho quando o usuário fecha a aba
        const crachaSessao = {
            nome: usuarioEncontrado.nome,
            email: usuarioEncontrado.email
        };
        
        sessionStorage.setItem("usuarioLogado", JSON.stringify(crachaSessao));
        return true;
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