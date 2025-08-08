
//convertir una frase con guiones a una cadena de palabras en la cual esten juntas y comiencen en mayuscula
function palabra(str){
    let separacion= str.split("-")
    let mapeo= separacion.map((letras, index)=>{
        if (index===0) {
            return letras;
        }
      
        return letras.charAt(0).toUpperCase() + letras.slice(1)
    })
return mapeo.join('')
}

console.log(palabra("hola-mundo"));


/* ----------------------------------------------------------------------------------------------------------- */
/* Escriba una función filterRange(arr, a, b)que obtenga una matriz arr, busque elementos con valores mayores o iguales a ay menores o iguales a by devuelva un resultado como una matriz.

La función no debe modificar la matriz. Debe devolver la nueva matriz. */

function filter(arr, a, b){
let cadena= arr.filter(function(item){
    return item >=a & item <= b
})
return cadena
}
let arr = [5, 3, 8, 1, 9, 2];
let filtrados = filter(arr, 1, 4); // Buscamos números entre 2 y 8

console.log(filtrados)
