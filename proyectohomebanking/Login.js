var max = 9999;
var min = 1111;
var codigoDeSeguridad = Math.floor((Math.random() * (max - min + 1)) + min);

function alertCodigo () {
    alert ("su codigo de seguridad es: " + codigoDeSeguridad);
}

window.onload = alertCodigo ()

var botonlogin = document.getElementById('botonlogin')
botonlogin.addEventListener('click',function login(e) {
    password = document.getElementById('password').value
    if (password == codigoDeSeguridad) {
        var usuario = document.getElementById('usuario').value;
        localStorage.setItem('usuario', usuario)
        document.form.submit ()
    }
    else {
        localStorage.removeItem('usuario')
        alert ("Codigo incorrecto, te hemos removido todo el dinero de tu cuenta")
    }
})