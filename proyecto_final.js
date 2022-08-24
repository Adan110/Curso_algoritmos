var cancelar = "";
var m1,m2,m3,m4,m5,m6;
var mesas_reservadas = [];
var mesas_no_reservadas = [m1,m2,m3,m4,m5,m6];
do{
    var opc = prompt("1.Reservar mesa \n 2.Buscar mesa reservada \n 3.Buscar mesa no reservada \n 4.Cancelar reservacioion \n 5.Cerrar programa");
    switch(opc){
        case "1": 
            reservar();
            
        break;
        case "2": buscar(); break;
        case "3": buscarnor(); break;
        case "4": cancelar(); break;
        case "5": alert("El programa a sido cerrado"); break;
        default:
            alert("Opcion no disponible vuelva a intentar");
        break;
    }
}while(opc != "5");

function reservar(){
    do{
        var num_mesa = prompt("Ingrese el numero de mesa a reservar");
        var nombre = prompt("Ingresa tu nombre");
        var horario = prompt("Ingresa el horario");
        var personas = prompt("Ingresa la cantiad de personas que asistiran");
        
        switch(num_mesa){
            case "1":
                m1 = mesa1(nombre, horario, personas);
                console.log(m1);
                alert("Su reservacion se competo de forma correcta");
                break;
            case "2":
                m2 = mesa2(nombre, horario, personas);
                console.log(m2);
                alert("Su reservacion se competo de forma correcta"); 
                break;
            case "3":
                m3 = mesa3(nombre, horario, personas);
                console.log(m3);
                alert("Su reservacion se competo de forma correcta");
                break;
            case "4":
                m4 = mesa4(nombre, horario, personas);
                console.log(m4);
                alert("Su reservacion se competo de forma correcta");
                break;
            case "5":
                m5 = mesa5(nombre, horario, personas);
                console.log(m5);
                alert("Su reservacion se competo de forma correcta");
                break;
            case "6":
                m6 = mesa6(nombre, horario, personas);
                console.log(m6);
                alert("Su reservacion se competo de forma correcta");
                break;
        }
        var reservar_nuevamente = prompt("Quiere reservar otra esa? SI/NO")
    }while(reservar_nuevamente == "si" || reservar_nuevamente == "SI");
}

function mesa1(n, h, p){
    var mesa1 = {
        "Mesa" : "1",
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    return mesa1;
}

function mesa2(n, h, p){
    var mesa2 = {
        "Mesa 2" : "2",
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    return mesa2;
}

function mesa3(n, h, p){
    var mesa3 = {
        "Mesa 3" : "3",
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    return mesa3;
}

function mesa4(n, h, p){
    var mesa4 = {
        "Mesa" : "4",
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    return mesa4;
}

function mesa5(n, h, p){
    var mesa5 = {
        "Mesa" : "5",
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    return mesa5;
}

function mesa6(n, h, p){
    var mesa6 = {
        "Mesa" : "6",
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    return mesa6;
}