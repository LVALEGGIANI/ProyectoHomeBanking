// Declaracion de variables
var nombreUsuario = localStorage.getItem('usuario');
var saldoCuenta = 58000;
var limiteExtraccion = 5000;
var servicioAgua = 350;
var servicioTelefono = 425;
var servicioLuz = 210;
var servicioInternet = 570;
var CBU1 = 123456;
var CBU2 = 654321;
var dinero = Number;

// Declaracion de funciones
function login() {
    if (!nombreUsuario) {
    dinero = saldoCuenta;
    restarDinero()
    actualizarSaldoEnPantalla()
    }
    else { 
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    }
}

function cargarNombreEnPantalla() {
    var nombreAMostrar;
    if (nombreUsuario) {
        nombreAMostrar = nombreUsuario;
    } else {
        nombreAMostrar = 'desconocido';
    }
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreAMostrar;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
    saldoCuentaAnterior = saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
    limiteExtraccionAnterior = limiteExtraccion;
}

function sumarDinero() {
    saldoCuenta = parseInt(saldoCuenta + dinero);
    actualizarSaldoEnPantalla ();
}

function restarDinero() {
    saldoCuenta = parseInt(saldoCuenta - dinero);
    actualizarSaldoEnPantalla ();
}

function cambioLimite() {
    limiteExtraccion = parseInt(nuevoLimite);
    actualizarLimiteEnPantalla ();
}

// Ejecucion de funciones automaticas
window.onload = function() {
    login()
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

// Ejecucion de botones
var botondepositar = document.getElementById('botondepositar')
botondepositar.addEventListener('click',function() {
    dinero = parseInt (prompt("introduzca un valor"));
    if (!dinero || dinero <= 0) {
        alert("Ha introducido un valor incorrecto")
    }
    else {
    sumarDinero();
    alert(("Saldo anterior: " + saldoCuentaAnterior) + "\n" + ("Has depositado: " + dinero) + "\n" + ("Saldo actual: " + saldoCuenta));
    }
})

var botonextraer = document.getElementById('botonextraer')
botonextraer.addEventListener('click',function() {
    dinero = parseInt (prompt("introduzca un valor"));
    if (!dinero || dinero <= 0) {
        alert("Ha introducido un valor incorrecto")
    }
    else if (dinero <= saldoCuenta && dinero <= limiteExtraccion && dinero % 100 == 0) {
        restarDinero();
        alert(("Saldo anterior: " + saldoCuentaAnterior) + "\n" + ("Has extraido: " + dinero) + "\n" + ("Saldo actual: " + saldoCuenta));
    } 
    else if (dinero <= saldoCuenta && dinero % 100 == 0) {
        alert ("La extraccion solicitada supera el limite configurado en su cuenta")
    }
    else if (dinero > saldoCuenta) {
        alert ("La extraccion solicitada supera el dinero disponible en cuenta")
    }
    else {
        alert ("Lo sentimos, nuestros cajeros solo tienen disponibles billetes de 100")
    }
})

var botoncambiarlimite = document.getElementById('botoncambiarlimite')
botoncambiarlimite.addEventListener('click',function() {
    nuevoLimite = parseInt (prompt("introduzca un valor"));
    if (!nuevoLimite || nuevoLimite <= 0) {
        alert("Ha introducido un valor incorrecto")
    }
    else {
    cambioLimite();
    alert(("Limite anterior: " + limiteExtraccionAnterior) + "\n" + ("Nuevo limite: " + limiteExtraccion));
    }
})

var botonpagarservicio = document.getElementById('botonpagarservicio')
botonpagarservicio.addEventListener('click',function() {
    pagoServicio = parseInt (prompt("introduzca el ID del servicio a pagar:\n 1- Agua \n 2- Luz \n 3- Internet \n 4- Telefono"))
    switch (pagoServicio) {
        case 1: 
            dinero = servicioAgua;
            break;
        case 2:
            dinero = servicioLuz;
            break;
        case 3: 
            dinero = servicioInternet;
            break;
        case 4:
            dinero = servicioTelefono;
            break;
        default:
            dinero = false;
            alert ("No ha seleccionado una opcion valida de servicio")
            break;
    }  

    if (dinero && dinero <= saldoCuenta && dinero <= limiteExtraccion) {
        restarDinero();
        alert(("Saldo anterior: " + saldoCuentaAnterior) + "\n" + ("Has pagado: " + dinero) + "\n" + ("Saldo actual: " + saldoCuenta));
    } 
    else if (dinero && dinero > saldoCuenta) {
        alert ("El pago solicitado supera el dinero disponible en cuenta")
    }
    else if (dinero && dinero < saldoCuenta) {
        alert ("El pago solicitado supera el limite configurado en su cuenta")
    }
})

var botontransferir = document.getElementById('botontransferir')
botontransferir.addEventListener('click',function() {
    CBU = parseInt (prompt("introduzca el numero de la cuenta a tranferir:\n CBU1: 123456 \n CBU2: 654321"))
    if (CBU == CBU1 || CBU == CBU2) {
    dinero = parseInt (prompt("introduzca un valor"));
        if (dinero <= saldoCuenta && dinero <= limiteExtraccion) {
            restarDinero();
            alert(("Saldo anterior: " + saldoCuentaAnterior) + "\n" + ("Has transferido: " + dinero) + "\n" + ("Saldo actual: " + saldoCuenta));
        } 
        else if (dinero > saldoCuenta) {
            alert ("La transferencia solicitada supera el dinero disponible en cuenta")
        }
        else {
            alert ("La transferencia solicitada supera el limite configurado en su cuenta")
        }
    }
    else {
        alert ("Numero de cuenta incorrecto, solo puede transferir dinero a una cuenta amiga")
    }
})