function validandoTexto() {
    let texto = document.getElementById("campo-mensagem").value;
    if (/[A-ZÀ-Ú]/.test(texto)) {
        alert("Não é Permitido Letras MAIÚSCULAS !!!");
        return false;
    }
    if (/[À-Úà-ú]/.test(texto)) {
        alert("Não é Permitido Palavras com ACENTOS !!!");
        return false;
    }

    return true;
}

function trocarLetras(texto) {
    return texto.toString().replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}


function inverterLetras(texto) {
    return texto.toString().replace(/ufat/g, 'u')
                .replace(/ober/g, 'o')
                .replace(/ai/g, 'a')
                .replace(/imes/g, 'i')
                .replace(/enter/g, 'e');
};

function criptografarMensagem() {
    let textoOriginal = document.getElementById("campo-mensagem").value;
    let textoCriptografado = trocarLetras(textoOriginal);
    let campoMensagemCriptografada = document.getElementById("mensagem-resultado");

    campoMensagemCriptografada.innerHTML = textoCriptografado;
    document.getElementById("mensagem-resultado").value = textoCriptografado;
    mostrarMensagemNaTela();
};

function descriptografarMensagem() {
    let textoCriptografado = document.getElementById("campo-mensagem").value;
    let textoOriginal = inverterLetras(textoCriptografado);
    let campoMensagemCriptografada = document.getElementById("mensagem-resultado");
    campoMensagemCriptografada.innerHTML = textoOriginal;
    document.getElementById("mensagem-resultado").value = textoOriginal;
    mostrarMensagemNaTela();
}

function mostrarMensagemNaTela() {
    let msgNaoEncontrada = document.querySelector('h1');
    let imagemMensagem = document.getElementById('imagem-mensagem');

    msgNaoEncontrada.style.display = "none";
    imagemMensagem.style.display = "none";
}

document.getElementById("botaoCopiar").addEventListener('click', execCopy());

function execCopy() {
    document.getElementById("campo-mensagem").select();
    document.execCommand("copy");
}