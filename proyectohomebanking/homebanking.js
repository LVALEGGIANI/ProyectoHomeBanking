//Declaración de variables

var nombreUsuario = "Agustina Frias";
var saldoCuenta = 58000;
var limiteExtraccion = 5000;

function sumarDinero() {
    saldoCuenta = parseInt(saldoCuenta + deposito);
}

function restarDinero() {
    saldoCuenta = parseInt(saldoCuenta - extraccion);
}

function cambioLimite() {
    limiteExtraccion = parseInt(nuevoLimite);
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

var botondepositar = document.getElementById('botondepositar')
botondepositar.addEventListener('click',function depositar() {
    deposito = parseInt (prompt("introduzca un valor"));
    var saldoCuentaAnterior = saldoCuenta;
    sumarDinero();
    actualizarSaldoEnPantalla ();
    alert(("Saldo anterior: " + saldoCuentaAnterior) + "\n" + ("Has depositado: " + deposito) + "\n" + ("Saldo actual: " + saldoCuenta));
})

var botonextraer = document.getElementById('botonextraer')
botonextraer.addEventListener('click',function () {
    extraccion = parseInt (prompt("introduzca un valor"));
    if (extraccion <= saldoCuenta && extraccion <= limiteExtraccion && extraccion % 100 == 0) {
        var saldoCuentaAnterior = saldoCuenta;
        restarDinero();
        actualizarSaldoEnPantalla ();
        alert(("Saldo anterior: " + saldoCuentaAnterior) + "\n" + ("Has extraido: " + extraccion) + "\n" + ("Saldo actual: " + saldoCuenta));
    } 
    else if (extraccion < saldoCuenta && extraccion % 100 == 0) {
        alert ("La extraccion solicitada supera el limite configurado en su cuenta")
    }
    else if (extraccion > saldoCuenta) {
        alert ("La extraccion solicitada supera el dinero disponible en cuenta")
    }
    else {
        alert ("Lo sentimos, nuestros cajeros solo tienen disponibles billetes de 100")
    }
})

var botoncambiarlimite = document.getElementById('botoncambiarlimite')
botoncambiarlimite.addEventListener('click',function cambiarLimite() {
    nuevoLimite = parseInt (prompt("introduzca un valor"));
    var limiteExtraccionAnterior = limiteExtraccion;
    cambioLimite();
    actualizarLimiteEnPantalla ();
    alert(("Limite anterior: " + limiteExtraccionAnterior) + "\n" + ("Nuevo limite: " + limiteExtraccion));
})