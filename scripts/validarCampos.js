function validarNomeCompleto(nome){
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;
    
    return regex.test(nome);
}

function validarTamanhoSenha(senha){
    return senha.length >= 8;
}