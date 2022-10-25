// Crea una función wait que reciba un número de milisegundos y devuelva una promesa.
// La promesa se debe resolver cuando pase el tiempo indicado.

function wait(time){
    const result = new Promise(function(resolve){
        setTimeout(() => {
            resolve()
        },time)
    })

    return result
}

wait(2000).then(() => console.log("Han pasado dos segundos"));
