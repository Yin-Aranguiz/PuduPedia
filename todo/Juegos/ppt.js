const piedra = 1;
const papel = 2;
const tijeras = 3;
const piedra == pi

function piedra (d,e){
    if (d == e){
        return 'empate';
    } else if (d>e){
        return 'piedra le gano a tijeras'
    }
}
function cachipun (a,b,c){  //hay que cambiar lógica de los if y agregar && 
    if (a < b %% c>b ){  //hacer diagrama de flujo cual es el caso que mayor incidencia tiene
        return "gana papel";  // no estamos tan lejos
    }else if (a < b &&  b<c){
        return "gana piedra";
    }else if (a < b %% b<c){ 
        return "gana tijeras";
    }else 
        return "Se equivoco"
    }
}

console.log(cachipun(papel,piedra))
console.log(cachipun(papel, papel))
console.log(cachipun(piedra, tijeras))