// Función para encriptar el texto
function encriptar(input) {
    return input.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptar(input) {
    return input.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

// Función para validar el texto (solo letras minúsculas, sin acentos ni caracteres especiales)
function validarTexto(input) {
    return /^[a-z\s]+$/.test(input);
}

// Referencias a los elementos HTML
var ingreseElTexto = document.getElementById("ingreseElTexto");
var inputTexto = document.getElementById("inputTexto");
var encriptarButton = document.getElementById("encriptarButton");
var desencriptarButton = document.getElementById("desencriptarButton");
var resultadoTexto = document.getElementById("resultadoTexto");

// Mostrar el campo de texto al hacer clic en el h1
if (ingreseElTexto) {
    ingreseElTexto.addEventListener("click", function (e) {
        ingreseElTexto.style.display = "none";
        inputTexto.style.display = "block";
        inputTexto.focus();
    });
}

// Funcionalidad de encriptar al hacer clic en el botón
if (encriptarButton) {
    encriptarButton.addEventListener("click", function () {
        let input = inputTexto.value.trim();
        if (validarTexto(input)) {
            let textoEncriptado = encriptar(input);
            resultadoTexto.textContent = "Texto encriptado: " + textoEncriptado;
        } else {
            resultadoTexto.textContent = "El texto ingresado no es válido. Solo se permiten letras minúsculas, sin acentos ni caracteres especiales.";
        }
    });
}

// Funcionalidad de desencriptar al hacer clic en el botón
if (desencriptarButton) {
    desencriptarButton.addEventListener("click", function () {
        let input = inputTexto.value.trim();
        if (validarTexto(input)) {
            let textoDesencriptado = desencriptar(input);
            resultadoTexto.textContent = "Texto desencriptado: " + textoDesencriptado;
        } else {
            resultadoTexto.textContent = "El texto ingresado no es válido. Solo se permiten letras minúsculas, sin acentos ni caracteres especiales.";
        }
    });
}