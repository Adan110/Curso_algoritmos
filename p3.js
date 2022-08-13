var animales = ["caracol","pajaro","aguila","ballena","puma"];
var agregar,buscar,eliminar,opc,rep = true;
while(rep == true){
    opc = parseInt(prompt(" 1.AGREGAR UN ANIMAL \n 2.BUSCAR UN ANIMAL \n 3.ELIMINAR UN ANIMAL \n 4.MOSTRAR LISTA DE ANIMALES \n 5.SALIR"));
    switch(opc){
        case 1:
            agregar = prompt("ANIMAL A AGREGAR: ");
            agregar.toLocaleLowerCase();
            animales.push(agregar);
            alert(agregar + " A SIDO AGREGADO A LA LISTA")
           break;
        case 2: 
            buscar = prompt("ANIMAL A BUSCAR: ");
            buscar.toLowerCase();
            for(var i = 0 ; i <= animales.length ; i++){
                if(buscar == animales[i]){
                    alert(buscar + " SI ESTA EN LA LISA Y SU POSICION ES " + i);
                }
            }
            break;
        case 3:
            eliminar = prompt("ANIMAL A ELIMINAR: ");
            eliminar.toLowerCase();
            for(var i = 0 ; i <= animales.length ; i++){
                if(eliminar == animales[i]){
                    alert(eliminar + " A SIDO ELIMINADO DE LA LISTA");
                    animales.pop(eliminar);
                }
            }
            break;
        case 4:
            console.log(animales);
            break;
        case 5:
            rep = false;
            break;
    }
}