var mesas = [];
var nombres = [];
var horarios = [];
var personas = [];
var no_reservado = ["1", "2", "3", "4", "5", "6"];
var rep = true;
alert ("Bienvenidos a nuestro sistemas para recervacion");

while(rep == true){
    var opc = prompt("Que es lo que desea hacer? \n1.Reservar una mesa \n2.Cancelar una mesa \n3.Buscar mesa \n4.Cerrar sistema de reservacion");
    switch(opc){
        case "1": reservar(); break;
        case "2": cancelar(); break;
        case "3": buscar(); break;
        case "4": alert("Adios \n Que tenda lindo dia :)"); rep = false; break;
        default: alert("Ingrese una opcion valida"); break;
    }
}
function reservar(){
    var band = true;
    var mesa = prompt("Ingresa el numero de la mesa que quiere reservar o 'R' para regresar");
    if(mesa == "R" || mesa == "r"){
        return 0;
    }else{
        for(var i = 0; i <= no_reservado.length; i++){
            if (mesa == no_reservado[i]){
                no_reservado.splice(i,1);
                mesas.push(mesa);
                var nombre = prompt("Ingresa tu nombre");
                var horario = prompt("Ingresa el hoario que deseas");
                var persona = prompt("Ingresa la cantidad de personas que asistiran");
                nombres.push(nombre.toLocaleLowerCase()),
                horarios.push(horario);
                personas.push(persona); 
                band = false;
            }
        }
        if(band == true){
            alert("Mesa no disponible");
        }
    }
}

function cancelar(){
    var band = true;
    var mesa = prompt("Ingrese el numero de la mesa o su nombre para cancelar y si quiere regresar ingrese 'R'");
    if(mesa == "r" || mesa == "R"){
        return 0;
    }else{
        for(var i = 0; i <= mesas.length; i++){
            if(mesa == mesas[i]){
                var indice = mesas.indexOf(mesa);
                alert (indice);
                band = false;
                var m = mesa;
            }else if(mesa.toLocaleLowerCase() == nombres[i]){
                var indice = nombres.indexOf(mesa);
                band = false;
            }
        }
        if(band == false){
            mesas.splice(indice,1);
            no_reservado.push(m);
            nombres.splice(indice,1);
            horarios.splice(indice,1);
            personas.splice(indice,1);
            alert("Su mesa ya a sido cancelada");
        }
        else{
            alert("Mesa no disponible");
        }
    }

}

function buscar(){
    var band = true;
    var opc = prompt("1.Para buscar tu mesa \n2.Para buscar mesas reservadas \n3.Para buscar mesas no reservadas \n4.Para regresar");
    switch(opc){
        case "1":
            var mesa = prompt("Ingresa el numero de tu mesa o tu nombre");
            for(var i = 0; i <= mesas.length; i++){
                if(mesa == mesas[i] || mesa.toLocaleLowerCase() == nombres[i]){
                    alert("Mesa: " + mesas[i] + "\nA nombre de: " + nombres[i] + "\nHorario: " + horarios[i] + "\nCantidad de personas: " + personas[i]);
                    band = false;
                }
            }
            if(band == true){
                alert("Esta mesa no a sido reservada o no existe");
            }
            break;
        case "2": 
            if(mesas.length <= 0){
                alert("No hay mesas reservadas");
            }else{
            alert("El numero de las mesas reservadas son: " + mesas);
            }
            break;
        case "3": alert("El numero de las mesas no reservadas son: " + no_reservado); break;
        case "4": return 0;
        default: alert("Opcion invalida"); break;
    }
}
