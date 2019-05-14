var max = 9999;
var min = 1111;
var codigoDeSeguridad = Math.floor((Math.random() * (max - min + 1)) + min);

function alertCodigo () {
    alert ("su codigo de seguridad es: " + codigoDeSeguridad);
}

window.onload = alertCodigo ()

var botonlogin = document.getElementById('botonlogin')
botonlogin.addEventListener('click',function login() {
    usuario = document.getElementById('usuario').value
    password = parseInt (document.getElementById('password').value)
    if (password == codigoDeSeguridad) {
    document.form.submit ()
    }
    else alert ("Codigo incorrecto")
})