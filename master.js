
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


