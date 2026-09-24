const formulario = {
    nome: () => document.getElementById("preencher_nome"),
    senha: () => document.getElementById("preencher_senha"),
    confirmarSenha: () => document.getElementById("preencher_confirmar_senha"),
    botaoEntrar: () => document.getElementById("botao_entrar"),
    erroNomeObrigatorio: () => document.getElementById("erro_nome_obrigatorio"),
    erroNomeInvalido: () => document.getElementById("erro_nome_invalido"),
    erroSenhaObrigatorio: () => document.getElementById("erro_senha_obrigatorio"),
    erroSenhaTamanho: () => document.getElementById("erro_senha_tamanho"),
    erroSenhaDiferente: () => document.getElementById("erro_senha_diferente")
};

function validarCampoNome() {
    alternarBotoesDesabilitados();
    alternarErroNome();
}

function validarCampoSenha() {
    alternarBotoesDesabilitados();
    alterarErroSenha();
}

function validarCampoConfirmarSenha() {
    alternarBotoesDesabilitados();
    alterarErroConfirmarSenha();
}

function validarNome() {
    const nome = formulario.nome().value;
    
    if (!nome) {
        return false;
    }
    return validarNomeCompleto(nome);
}

function alternarErroNome() {
    const nome = formulario.nome().value;

    formulario.erroNomeObrigatorio().style.display = nome ? "none" : "block";
    if (nome) {
        formulario.erroNomeInvalido().style.display = validarNome() ? "none" : "block";
    } else {
        formulario.erroNomeInvalido().style.display = "none";
    }
}

function validarSenha(){
    const senha = formulario.senha().value;
    if (!senha){
        return false;
    }
    return validarTamanhoSenha(senha);
}

function alterarErroSenha() {
    const senha = formulario.senha().value;
    
    formulario.erroSenhaObrigatorio().style.display = senha ? "none" : "block";
    if (senha) {
        formulario.erroSenhaTamanho().style.display = validarSenha() ? "none" : "block";
    } else {
        formulario.erroSenhaTamanho().style.display = "none";
    }
}

function confirmarSenhaIgual(){
    const senha = formulario.senha().value;
    const confirmarSenha = formulario.confirmarSenha().value;

    if (!senha || !confirmarSenha || senha !== confirmarSenha) {
        return false;
    }
    
    return true;
}

function alterarErroConfirmarSenha(){
    formulario.erroSenhaDiferente().style.display = confirmarSenhaIgual() ? "none" : "block";
}

function alternarBotoesDesabilitados() {
    const nomeValido = validarNome();
    const senhaValida = validarSenha();
    const confirmarSenhaValida = confirmarSenhaIgual();

    formulario.botaoEntrar().disabled = !nomeValido || !senhaValida || !confirmarSenhaValida;
}