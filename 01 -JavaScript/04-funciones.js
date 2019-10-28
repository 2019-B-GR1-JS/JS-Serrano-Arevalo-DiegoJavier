function imprimirMensaje(mensaje) {
    if (typeof (mensaje) === "string"
        || typeof (mensaje) === "number") {
        const impresion = `Mensaje ${mensaje}`
        console.log(impresion);
        return impresion
    } else {
        console.log("fallamos era solo string")
    }


}

const respuesta = imprimirMensaje("holi" + 123);
console.log(respuesta);

function sumarElementos(numeroUno, ...arregloParametrosInfinitos) {
    console.log(arregloParametrosInfinitos);
    if (arregloParametrosInfinitos) {
        return arregloParametrosInfinitos.reduce(
            (valorInicial, valorActual) => {
                return valorInicial + valorActual;

            },
            numeroUno
        )
    } else {
        return numeroUno;
    }

}
const suma = sumarElementos(1, 6, 3, 4, 5)
console.log("la suma es: " + suma);

const restar = function restarF(a, b) {
    return a - b;
}

console.log(restar(4, 2));

const restar1 = {
    nombre: 'restar',
    restarNumeros: (a, b) => {
        return a - b;
    },
    restarNumeros: function (a, b) {
        return a - b;
    }
}

const transformarAMayuscula = letra => letra.toUpperCase();

console.log(transformarAMayuscula("xd"));

//const filtrarArreglo = arreglo.filter(a=>a.id>4);

///... -> Destructurar parametros

const arregloNumerosUno = [1, 2, 3, 4, 5, 6];
console.log(sumarElementos(...arregloNumerosUno));

const arregloNumeroDos = [7, 8, 9, 10, 11, 12]
const arregloUnidos = [...arregloNumerosUno,
...arregloNumeroDos];

console.log(arregloUnidos)

const objetoDiego = {
    nombre: 'Diego'
};

const objetoSerrano = {
    apellido: 'Serrano'

}
const objetoDiegoSerrano = {
    ...objetoDiego,
    ...objetoSerrano,
    edad: 12,

}

console.log(objetoDiegoSerrano)

//delete para borrar

const oDSEnString = JSON.stringify(objetoDiegoSerrano);
console.log(oDSEnString)
const oDSClonado = JSON.parse(oDSEnString);
console.log(oDSEnString);
oDSEnString.edad = 21;


console.log(oDSClonado);

function cambiarEdad(edad, objeto) {
    objeto.edad = edad;
    return objeto;
}

const clonadoDS = {
    ...objetoDiegoSerrano
};

console.log("El clonado" + clonadoDS)
