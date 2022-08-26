var cancela = "";
var m1,m2,m3,m4,m5,m6;
var mesas_reservadas = [];
var mesas_no_reservadas = [m1,m2,m3,m4,m5,m6];
do{
    var opc = prompt(" 1.Reservar mesa \n 2.Buscar tu mesa \n 3.Buscar mesas reservadas o no reservadas \n 4.Cancelar reservacion \n 5.Cerrar programa");
    switch(opc){
        case "1": reservar(); break;
        case "2": buscar(); break;
        case "3": buscarnor(); break;
        case "4": cancelar(); break;
        case "5": alert("El programa a sido cerrado"); break;
        default: alert("Opcion no disponible vuelva a intentar"); break;
    }
}while(opc != "5");
console.log(mesas_no_reservadas);
console.log(mesas_reservadas);

function reservar(){
    var rep = true;
    while (rep == true) {
        var mesa = prompt("Ingrese el numero de una de nuestras 6 mesas para reservar o 'R' para regresar");
        switch(mesa){
            case "1": var nm = m1; break;
            case "2": var nm = m2; break;
            case "3": var nm = m3; break;
            case "4": var nm = m4; break;
            case "5": var nm = m5; break;
            case "6": var nm = m6; break;
            case "R":
            case "r": return 0;
            default: alert("Esta mesa no existe"); nm = 1; break;
        }
        for(var i = 0; i <= mesas_no_reservadas.length; i++){
            if(nm != mesas_no_reservadas[i]){
                band = true;
                if(nm == 1){
                    band = false;
                }             
            }
            else{
                rep = false;
                band = false;
                i = mesas_no_reservadas.length;
            }
        }
        if(band == true){
            alert("Esta mesa ya a sido reservada");
        }
    }
    var nombre = prompt("Ingresa tu nombre");
    var horario = prompt("Ingresa el horario");
    var personas = prompt("Ingresa la cantiad de personas que asistiran");

    switch(mesa){
        case "1":
            m1 = mesa1(nombre, horario, personas);
            console.log(m1);
            alert("Su reservacion se competo de forma correcta");
            mesas_no_reservadas.pop(m1);
            mesas_reservadas.push(m1);
            break;
        case "2":
            m2 = mesa2(nombre, horario, personas);
            console.log(m2);
            alert("Su reservacion se competo de forma correcta"); 
            mesas_no_reservadas.pop(m2);
            mesas_reservadas.push(m2);
            break;
        case "3":
            m3 = mesa3(nombre, horario, personas);
            console.log(m3);
            alert("Su reservacion se competo de forma correcta");
            mesas_no_reservadas.pop(m3);
            mesas_reservadas.push(m3);
            break;
        case "4":
            m4 = mesa4(nombre, horario, personas);
            console.log(m4);
            alert("Su reservacion se competo de forma correcta");
            mesas_no_reservadas.pop(m4);
            mesas_reservadas.push(m4);
            break;
        case "5":
            m5 = mesa5(nombre, horario, personas);
            console.log(m5);
            alert("Su reservacion se competo de forma correcta");
            mesas_no_reservadas.pop(m5);
            mesas_reservadas.push(m5);
            break;
        case "6":
            m6 = mesa6(nombre, horario, personas);
            console.log(m6);
            alert("Su reservacion se competo de forma correcta");
            mesas_no_reservadas.pop(m6);
            mesas_reservadas.push(m6);
            break;
    }
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
        "Mesa" : "2",
        "Nombre" : n,
        "Horario" : h,
        "cantidad de personas" : p
    }
    return mesa2;
}

function mesa3(n, h, p){
    var mesa3 = {
        "Mesa" : "3",
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

function cancelar(){
    var rep = true;
    var band = true;
    while (rep == true){
        var cancelar = prompt("Ingrese el numero de su mesa a cancelar o 'R' para volver");
        switch(cancelar){
            case "1":
                for(var i = 0; i <= mesas_no_reservadas.length; i++){
                    if(m1 == mesas_reservadas[i] && m1 != mesas_no_reservadas[i]){
                        alert("Su mesa ya sido cancelada");
                        mesas_reservadas.pop(m1);             
                        m1 =  mesa1(cancela, cancela, cancela);
                        console.log(m1);
                        mesas_no_reservadas.push(m1);
                        band = false;
                        rep = false;
                        i = mesas_no_reservadas;
                    }
                    else{
                        band = true;
                    }
                }
                break;
            case "2":
                for(var i = 0; i <= mesas_no_reservadas.length; i++){
                    if(m2 == mesas_reservadas[i] && m2 != mesas_no_reservadas[i]){
                        alert("Su mesa ya sido cancelada");
                        mesas_reservadas.pop(m2);             
                        m2 =  mesa2(cancela, cancela, cancela);
                        console.log(m2);
                        mesas_no_reservadas.push(m2);
                        band = false;
                        rep = false;
                        i = mesas_no_reservadas;
                    }
                    else{
                        band = true;
                    }
                }
                break;          
            case "3":
                for(var i = 0; i <= mesas_no_reservadas.length; i++){
                    if(m3 == mesas_reservadas[i] && m3 != mesas_no_reservadas[i]){
                        alert("Su mesa ya sido cancelada");
                        mesas_reservadas.pop(m3);
                        m3 =  mesa3(cancela, cancela, cancela);
                        console.log(m3);
                        mesas_no_reservadas.push(m3);
                        band = false;
                        rep = false;
                        i = mesas_no_reservadas;
                    }
                    else{
                        band = true;
                    }
                }
                break;
            case "4":
                for(var i = 0; i <= mesas_no_reservadas.length; i++){
                    if(m4 == mesas_reservadas[i] && m4 != mesas_no_reservadas[i]){
                        alert("Su mesa ya sido cancelada");
                        mesas_reservadas.pop(m4);
                        m4 =  mesa4(cancela, cancela, cancela);
                        console.log(m4);
                        mesas_no_reservadas.push(m4);
                        band = false;
                        rep = false;
                        i = mesas_no_reservadas;
                    }
                    else{
                        band = true;
                    }
                }
                break;
            case "5":
                for(var i = 0; i <= mesas_no_reservadas.length; i++){
                    if(m5 == mesas_reservadas[i] && m5 != mesas_no_reservadas[i]){
                        alert("Su mesa ya sido cancelada");
                        mesas_reservadas.pop(m5);             
                        m5 =  mesa5(cancela, cancela, cancela);
                        console.log(m5);
                        mesas_no_reservadas.push(m5);
                        band = false;
                        rep = false;
                        i = mesas_no_reservadas;
                    }
                    else{
                        band = true;
                    }
                }
                break;
            case "6":
                for(var i = 0; i <= mesas_no_reservadas.length; i++){
                    if(m6 == mesas_reservadas[i] && m6 != mesas_no_reservadas[i]){
                        alert("Su mesa ya sido cancelada");
                        mesas_reservadas.pop(m6);
                        m6 =  mesa6(cancela, cancela, cancela);
                        console.log(m6);
                        mesas_no_reservadas.push(m6);
                        band = false;
                        rep = false;
                        i = mesas_no_reservadas;
                    }
                    else{
                        band = true;
                    }
                }
                break;
            case "R":
            case "r": return 0;
            default: alert("Esta mesa no existe"); var nm = 1; break;
        }
        if(band = true && nm != 1){
            alert("Esta mesa no a sido reservada");
        }
    }
}
function buscar(){
    var rep = true;
    while (rep == true) {
        var buscador = prompt("Ingrese el numero de su mesa o 'R' para volver");
        switch(buscador){
            case "1": var nm = m1; break;
            case "2": var nm = m2; break;           
            case "3": var nm = m3; break;
            case "4": var nm = m4; break;
            case "5": var nm = m5; break;
            case "6": var nm = m6; break;
            case "R":
            case "r": return 0;
            default: alert("Esta mesa no existe"); nm = -1; break;
        }
        for(var i = 0; i <= mesas_no_reservadas.length; i++){
            if(nm == mesas_reservadas[i] && nm != mesas_no_reservadas[i]){
                alert("Su mesa se muestra en el apartado de consola");
                console.log(mesas_reservadas[i]);
                band = false;
                rep = false;
                i = mesas_no_reservadas;
            }
            else{
                band = true;
                if(nm == -1){
                    band = false;
                }
            }
        }
        if(band == true){
            alert("Esta mesa no a sido reservada");
        }
    }
}
function buscarnor(){
    var mostrar_no_reservado = [];
    var mostrar = prompt(" 1.Buscar mesas reservadas \n 2.Buscar mesas no reservadas \n 3.Regresar al menu principal \n Ingresa la opcion que quieras realizar");
    switch(mostrar){
        case "1": console.log(mesas_reservadas); break;
        case "2":
            for(var i = 0; i <= mesas_no_reservadas.length; i++){
                var nm = mesas_no_reservadas[i];
                switch(nm){
                    case m1: var pm = "Mesa 1"; break;
                    case m2: var pm = "Mesa 2"; break;
                    case m3: var pm = "Mesa 3"; break;
                    case m4: var pm = "Mesa 4"; break;
                    case m5: var pm = "Mesa 5"; break;
                    case m6: var pm = "Mesa 6"; break;
                }
                mostrar_no_reservado.push(pm);
            }
            console.log(mostrar_no_reservado);
            break;
        case "3": return 0;
        default: alert("Mesa no disponible"); break;
    }
}