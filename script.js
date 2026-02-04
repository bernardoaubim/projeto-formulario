const form = document.querySelector("#formCadastro");
const erroNome = document.querySelector("#erroNome");
const erroEmail = document.querySelector("#erroEmail");
const erroIdade = document.querySelector("#erroIdade");
const erroSenha = document.querySelector("#erroSenha");
const erroConfirmar = document.querySelector("#erroConfirmar");
const erroTermo = document.querySelector("#erroTermo");

function validaNome() {
    const valorNome = document.querySelector("#idNome").value.trim();
    const temNumero = /\d/.test(valorNome);
    if (valorNome.length < 3) {
        erroNome.innerText = 'O nome deve ter pelo menos 3 caracteres.';
        return false;
    } else if (temNumero) {
        erroNome.innerText = 'O nome não pode ter números.'
        return false;
    }
    else {
        erroNome.innerText = '';
        return true;
    }
}

function validarEmail() {
    const valorEmail = document.querySelector("#idEmail").value.trim();
    if (!valorEmail.includes('@') || !valorEmail.includes('.')) {
        erroEmail.innerText = "Email inválido."
        return false;
    } else {
        erroEmail.innerText = '';
        return true;
    }
}

function validarIdade() {
    const valorIdade = document.querySelector("#idIdade").value;
    if (valorIdade < 18) {
        erroIdade.innerText = 'Idade inválida, é necessário ser maior de idade.';
        return false
    } else {
        erroIdade.innerText = " "
        return true
    }
}

function validarSenha() {
    const valorSenha = document.querySelector("#idSenha").value;
    const validador = /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(valorSenha);
    if (valorSenha.length < 6) {
        erroSenha.innerText = "A senha deve conter no minímo 6 caracteres."
        return false;
    } else if (!validador) {
        erroSenha.innerText = "A senha deve conter letras e números."
        return false;
    } else {
        erroSenha.innerText = ''
        return true;
    }
}

function validarConfirmar() {
    const valorConfirmar = document.querySelector("#idConfirmar").value;
    const validarSenha = document.querySelector("#idSenha").value;
    if (valorConfirmar === validarSenha) {
        erroConfirmar.innerText = ''
        return true;

    } else {
        erroConfirmar.innerText = "As senhas não coincidem"
        return false;
    }
}

function validaTermos() {
    const termo = document.querySelector("#idTermo");
    if (!termo.checked) {
        erroTermo.innerText = "Você precisa aceitar os termos de uso.";
        return false;
    }

    erroTermo.innerText = '';
    return true;
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    const nomeOk = validaNome();
    const emailOk = validarEmail();
    const idadeOk = validarIdade();
    const senhaOk = validarSenha();
    const confirmarOk = validarConfirmar();
    const termoOk = validaTermos();

    if (nomeOk && emailOk && idadeOk && senhaOk && confirmarOk && termoOk) {
        form.submit();
    }



});
