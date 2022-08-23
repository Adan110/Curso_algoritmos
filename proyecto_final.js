var num_mesa = prompt("Hay 6 mesas disponibles \n Ingrese el numero de mesa a reservar");
var nombre = prompt("Ingresa tu nombre");
var horario = prompt("Ingresa el horario");
var personas = prompt("Ingresa la cantiad de personas que asistiran");
        
switch(num_mesa){
    case "1": mesa1(nombre, horario, personas); break;
    case "2": mesa2(nombre, horario, personas); break;
    case "3": mesa3(nombre, horario, personas); break;
    case "4": mesa4(nombre, horario, personas); break;
    case "5": mesa4(nombre, horario, personas); break;
    case "6": mesa4(nombre, horario, personas); break;
}
function mesa1(n, h, p){
    var mesa = {
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    console.log(mesa);
}

function mesa2(n, h, p){
    var mesa = {
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    console.log(mesa);
}

function mesa3(n, h, p){
    var mesa = {
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    console.log(mesa);
}

function mesa4(n, h, p){
    var mesa = {
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    console.log(mesa);
}

function mesa5(n, h, p){
    var mesa = {
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    console.log(mesa);
}

function mesa6(n, h, p){
    var mesa = {
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    console.log(mesa);
}