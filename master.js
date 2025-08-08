
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
    return item >=a && item <= b
})
return cadena
}
let arr = [5, 3, 8, 1, 9, 2];
let filtrados = filter(arr, 1, 4); // Buscamos números entre 2 y 8

console.log(filtrados)
/* ----------------------------------------------------------------------------------------------------------------- */


/* Escriba una función filterRangeInPlace(arr, a, b)que obtenga un array arry elimine todos los valores excepto los que estén entre ay b. La prueba es: a ≤ arr[i] ≤ b.

La función solo debe modificar la matriz. No debe devolver nada. */


let matriz=[1,2,4,5,7,8]
console.log("mi matriz: ", matriz);

function filterRangeInPlace(arr, a, b){
for (let i = 0; i < arr.length; i++) {
    let val= arr[i]
    if (val < a || val > b) {
        arr.splice(i,1)
        i--
    }
    
}
}


filterRangeInPlace(matriz, 1,5)
console.log("mi matriz alterada: ",matriz);

/* ------------------------------------------------------------------------------------------------------------------ */


/* Ordenar en orden decreciente
importancia: 4 */
let orden = [5, 2, 1, -10, 8];
function order(arr){
     arr.sort()
    return arr.reverse()

}

order(orden)
//alert(orden); // 8, 5, 2, 1, -10 

/* -------------------------------------------------------------------------------------------------------------- */

/* Tenemos una matriz de cadenas arr. Nos gustaría tener una copia ordenada, pero arrsin modificarla.

Crea una función copySorted(arr)que devuelva dicha copia.*/

let triada = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
    let copia= arr.slice()
  return  copia.sort()
}

let sorted = copySorted(triada);

//alert(sorted); // CSS, HTML, JavaScript
//alert(triada); // HTML, JavaScript, CSS (no changes) */


/* 
Escriba la función shuffle(array)que baraja (reordena aleatoriamente) los elementos de la matriz.

Múltiples ejecuciones de [número] shufflepueden dar lugar a diferentes órdenes de elementos. Por ejemplo: */

let juego = [1, 2, 3];

function shuffle(array){
  for (let i = 0; i < array.length; i++) {
  let contador= Math.floor(Math.random() * 3)
 array.splice(1,1,contador )
 

}
return array
}


shuffle(juego);
// arr = [3, 2, 1]
console.log(shuffle(juego));


console.log(shuffle(juego));
  ;
// arr = [2, 1, 3]

console.log(shuffle(juego));
;
// arr = [3, 1, 2]
// ...