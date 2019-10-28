// 07-promesas.js



const fs = require('fs');
const sumarDosNumeros = (correcto) =>{
    return new Promise(
        (resolve, reject)=>{
            if(correcto){
                resolve('YEI');
            }else{
                reject('BUUUU');
            }
         
            
        }
    );
}

const promesaSumarDosNumeros = sumarDosNumeros(false);
promesaSumarDosNumeros.then(
    (ok)=>{
        console.log('Ok', ok);
    }
)
.catch(
    (error)=>
    {
        console.log('Error', error);
    }
);
console.log('2) Terminar');
/*
fs.readFile(
    './05-callbacks.js',
    'utf8',
    (error,)
)*/