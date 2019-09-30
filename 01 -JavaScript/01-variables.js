// JSON
// var nombre = 'Adrian';
let nombre = "Adrian";
nombre = "Carolina";
nombre = 1;
// no Mutables(no cambia)

const cedula = 1720812237;

const mensaje = `
Siempre usar "const"
Si y toca usar "let"
Nunca vamos a usar "var"
`;

let nombres = "Adrian";
console.log(typeof nombres, "nombre");

numeros = 1.1;
console.log(typeof numero, "numero");
let casado = false;
console.log(typeof casado, "casado");
let hijos = null;
console.log(typeof hijos, "hijos");
let mascotas = [];
console.log(typeof mascotas, "mascotas");
let hermana = {};
console.log(typeof hermana, "hermana");

if ([]) {
    console.log("Truty");
} else {
    console.log("Falsy");
}


//JSON
const diego = {
    "nombre": 'Diego',
    "apellido": 'Serrano',
    casado: false,
    hijos: null,
    hermana: { nombre: "Carolina" },
    mascotas: [
        {
            nombre: "Cachetes",
        }
    ],
};

console.log(diego.nombre); // 
console.log(diego.hermana);
console.log(diego.mascotas[0].nombre);

diego.sueldo = 1.2;
diego["deudas"] = 10000;

console.log(diego);
delete diego.hijos;
console.log(diego);
console.log("es q se me chispoteo");