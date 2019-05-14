//Declaración de variables

var nombreUsuario = localStorage.getItem('usuario');
var saldoCuenta = 58000;
var limiteExtraccion = 5000;
var servicioAgua = 350;
var servicioTelefono = 425;
var servicioLuz = 210;
var servicioInternet = 570;
var CBU1 = 123456;
var CBU2 = 654321;
//var max = 9999;
//var min = 1111;
//var codigoDeSeguridad = Math.floor((Math.random() * (max - min + 1)) + min);
//
//function solicitarCodigo() {
//    usuario = prompt("Ingrese su usuario")
//    codigo = parseInt(prompt("Ingrese el siguiente codigo: " + codigoDeSeguridad))
//    if (codigo == codigoDeSeguridad) {
//    nombreUsuario = usuario;
//    cargarNombreEnPantalla();
//    actualizarSaldoEnPantalla();
//    actualizarLimiteEnPantalla();
//    }
//    else 
//    extraccion = saldoCuenta
//    restarDinero()
//    cargarNombreEnPantalla();
//    actualizarSaldoEnPantalla();
//    actualizarLimiteEnPantalla();
//    alert ("Codigo incorrecto. Por razones de seguridad, le hemos congelado el dinero de su cuenta")
//}

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
//    solicitarCodigo();
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
botonextraer.addEventListener('click',function extraer() {
    extraccion = parseInt (prompt("introduzca un valor"));
    if (extraccion <= saldoCuenta && extraccion <= limiteExtraccion && extraccion % 100 == 0) {
        var saldoCuentaAnterior = saldoCuenta;
        restarDinero();
        actualizarSaldoEnPantalla ();
        alert(("Saldo anterior: " + saldoCuentaAnterior) + "\n" + ("Has extraido: " + extraccion) + "\n" + ("Saldo actual: " + saldoCuenta));
    } 
    else if (extraccion <= saldoCuenta && extraccion % 100 == 0) {
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

var botonpagarservicio = document.getElementById('botonpagarservicio')
botonpagarservicio.addEventListener('click',function pagoservicio() {
    pagoServicio = parseInt (prompt("introduzca el ID del servicio a pagar:\n 1- Agua \n 2- Luz \n 3- Internet \n 4- Telefono"))
    switch (pagoServicio) {
        case 1: 
            extraccion = servicioAgua;
        case 2:
            extraccion = servicioLuz;
        case 3: 
            extraccion = servicioInternet;
        case 4:
            extraccion = servicioTelefono;
                if (extraccion <= saldoCuenta && extraccion <= limiteExtraccion) {
                    var saldoCuentaAnterior = saldoCuenta;
                    restarDinero();
                    actualizarSaldoEnPantalla ();
                    alert(("Saldo anterior: " + saldoCuentaAnterior) + "\n" + ("Has pagado: " + extraccion) + "\n" + ("Saldo actual: " + saldoCuenta));
                } 
                else if (extraccion > saldoCuenta) {
                    alert ("El pago solicitado supera el dinero disponible en cuenta")
                }
                else {
                    alert ("El pago solicitado supera el limite configurado en su cuenta")
                }
        break;
        default:
            alert ("No ha seleccionado una opcion valida de servicio")
        break;
    }  
})

var botontransferir = document.getElementById('botontransferir')
botontransferir.addEventListener('click',function transferir() {
    CBU = parseInt (prompt("introduzca el numero de la cuenta a tranferir:\n CBU1: 123456 \n CBU2: 654321"))
    if (CBU == CBU1 || CBU == CBU2) {
    extraccion = parseInt (prompt("introduzca un valor"));
        if (extraccion <= saldoCuenta && extraccion <= limiteExtraccion) {
            var saldoCuentaAnterior = saldoCuenta;
            restarDinero();
            actualizarSaldoEnPantalla ();
            alert(("Saldo anterior: " + saldoCuentaAnterior) + "\n" + ("Has transferido: " + extraccion) + "\n" + ("Saldo actual: " + saldoCuenta));
        } 
        else if (extraccion > saldoCuenta) {
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