do {
  var opc = parseInt(prompt("Que queire realizar \n 1.Poner nombre a tu mascota \n 2.Usar calculadora \n 3.Salir"));
  switch (opc) {
    case 1: mascota(); break;
    case 2: calculadora (); break;
    case 3: alert("ADIOS :)"); break;
    default: alert("Opcion no disponible \n\n\n Vuelva a intentar"); break;
  }
} while (opc != 3);

function mascota () {  
  do {
    var nombre = prompt("Nombre de la mascota");
    alert("Ahora tu leon se llama " + nombre);
    var psn = prompt("QUIERE RENOMBRAR A TU MASCOTA? S/N");
  } while (psn == "s" || psn == "S");
}

function calculadora () {
  do {
    var opcc = parseInt(prompt("Que operacion desea realizar \n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4.Division \n 5.Volver al menu principal"));
    switch (opcc) {
      case 1:
        var num1 = parseInt(prompt("Ingresa un numero"));
        var num2 = parseInt(prompt("Ingresa otro numero"));
        suma(num1, num2);        
        break;
      case 2:
        var num1 = parseInt(prompt("Ingresa un numero"));
        var num2 = parseInt(prompt("Ingresa otro numero"));
        resta(num1, num2);        
        break;
      case 3:
        var num1 = parseInt(prompt("Ingresa un numero"));
        var num2 = parseInt(prompt("Ingresa otro numero"));
        multi(num1, num2);        
        break;
      case 4:
        var num1 = parseInt(prompt("Ingresa un numero"));
        var num2 = parseInt(prompt("Ingresa otro numero"));
        div(num1, num2);        
        break;
      case 5: break;
      default: alert(" Opcion no disponible \n\n\n Vuelve a intentar");
        break;
    }
  } while (opcc != 5);
}

function suma(n1, n2) {
  var suma = n1+n2;
  alert("La suma es " + suma);
}

function resta(n1, n2) {
  var resta = n1-n2;
  alert("La resta es " + resta);
}

function multi(n1, n2) {
  var multi = n1*n2;
  alert("La multiplicacion es " + multi);
}

function div(n1, n2) {
  var div = n1/n2;
  alert("La division es " + div);
}