function calculo(numUno, numDos, funcionCalculo){
    const total = numUno + numDos;
    return funcionCalculo(numUno, numDos, total);
}


const numeroUno = 8;
const numeroDos = 10
const suma = (numUno, numDos, total)=>{

return total;
}

console.log(suma);


const resultadoCalculo= calculo(numeroUno, numeroDos, (numUno,numDos,total)=>{
    return total/2
});

console.log(resultadoCalculo);


function forEachLocal(arreglo, funcion){
    for(let i = 0; i < arreglo.length; i ++){
        funcion(arreglo[i],
            i, arreglo);
    }
}

forEachLocal([1,2,3,4,5], (valorActual,indiceActual, arreglo)=>{
    console.log('valorActual', valorActual)

}
);
/////Map
function mapLocal(arreglo, funcion){
    const newArray = [];
    for(let i = 0; i < arreglo.length; i ++){
        newArray.push(funcion(arreglo[i],i,arreglo))
    }
    return newArray 
}

const resultadoMap = mapLocal([1,2,3,4,5], (valorActual,indiceActual, arreglo)=>{
    
    //console.log('val:', valorActual, 'indice:', indiceActual,  'arreglo', arreglo)
    return valorActual+5;
}
);
console.log(resultadoMap);
////// Filter
function filterLocal(arreglo, funcion){
    const newArray = [];
    for(let i = 0; i < arreglo.length; i ++){
            if(funcion(arreglo[i],i,arreglo)){
                newArray.push(arreglo[i]);
            }        
           
        }
    return newArray 
}

const resultadoFilter = filterLocal([1,2,3,4,5], (valorActual,indiceActual, arreglo)=>{
    
    //console.log('val:', valorActual, 'indice:', indiceActual,  'arreglo', arreglo)
    return valorActual<5 ;
}
);
console.log(resultadoFilter);


condicion2 = 9;
function someLocal(arreglo, funcion){
    let respuesta = false;
    for(let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++){
        if (funcion (arreglo[indiceInicial], indiceInicial, arreglo)){
            respuesta = true;
            break;
        }
    }
    return respuesta;
}

const respuestaSome = someLocal([1,2,3,4,5],
    (valorActual, indiceActual, arreglo) =>{
        return valorActual > condicion2;
    });

    console.log(respuestaSome)


    const condicion3 = 1;
function everyLocal(arreglo, funcion){
    let respuesta = true;
    for (let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++ ){
        if (!funcion(arreglo[indiceInicial], indiceInicial, arreglo)) {
            respuesta = false;
            break;
        }
    }
    return respuesta;
}

const respuestaEvery = everyLocal([1,2,3,4,5],
    (valorActual, indiceActual, arreglo) => {
        return valorActual > condicion3;
    });
    console.log(respuestaEvery) 


function findLocal(arreglo, funcion){
    for (let i = 0; i < arreglo.length; i++){
        if(funcion(arreglo[i], i, arreglo)){
            return arreglo[i];
        }
    }
}

const respuestaFind = findLocal([1,2,3,4,5,8],
    (valorActual, indiceActual, arreglo) => {
        return valorActual === 8;
    });

    console.log(respuestaFind) 


    


function findIndexLocal(arreglo, funcion){
    let respuesta = -1;
    for (let i = 0; i < arreglo.length; i++){
        if(funcion(arreglo[i], i, arreglo)){
            respuesta = i;
        }
    }
    return respuesta;
}

const respuestaFindIndex = findIndexLocal([1,2,3,4,5,8],
    (valorActual, indiceActual, arreglo) => {
        return valorActual === 8;
    });


    console.log(respuestaFindIndex) 


    function reduceLocal(arreglo, funcion, valorInicial){
        let respuesta = valorInicial;
        for (let i = 0; i < arreglo.length; i++){
            respuesta = funcion (respuesta, arreglo[i], i, arreglo);
        }
        return respuesta;
    }
    
    const respuestaReduce = reduceLocal([1,2,3,4,5,8],
        (valorInicial, valorActual, indiceActual, arreglo) => {
            return valorInicial + valorActual;
        }, 5);

        console.log(respuestaFindIndex) 