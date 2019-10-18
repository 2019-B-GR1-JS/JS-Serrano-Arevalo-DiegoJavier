const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arreglo)
for (const i in arreglo) {
    console.log('I:', i);
}

for (let i of arreglo) {
    console.log('i:', i);

}

const respuestaForEach = arreglo.forEach(
    function (valorActual, indiceActual, arreglo) {
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arreglo', arreglo);
    }
)

//map
/*
const repuestaMap = arreglo.map(
    //transformar 
    function (valorActual, indiceActual, arreglo) {
        return valorActual + 5;
    }
    //devolver un elemeno
);
const respuestaMap2 = arreglo.map(r => r + 5);
console.log('respuestaMap', respuestaMap);
console.log('arreglo', arreglo);
console.log('respuestaMap2', respuestaMap2)
*/
//Filter 
const respuestaFilter = arreglo.filter(
    function (valorActual, indiceActual, arreglo) {
        return valorActual > 7;
    }
);
console.log('respuestaFiilter', respuestaFilter);


// or -> some
//and -> every

const respuestaSome = arreglo.some(
    function (valorActual, indiceActual, arreglo) {
        return valorActual > 9 && valorActual < 11;

    }
);

console.log('respuestaSome', respuestaSome);


const respuestaMenoresADiez =
    arreglo.map((x) => (x / 2) + 7).filter((y) => y < 10);

console.log(respuestaMenoresADiez)