// Escribe una función throwOneCoin que devuelva una promesa que represente el lanzamiento de una moneda.
// La moneda tarda 2 segundos en caer.
// 50% de las veces, la promesa se resuelve y devuelve “cruz!”.
// 50% de las veces, la promesa se rechaza y devuelve “cara…”.

function throwOneCoin(){
    const result = new Promise((resolve, reject) => {
        setTimeout(() =>{
            Math.random() < 0.5 ? resolve('cruz') : reject('cara')
        },2000)
    });
    return result
}

const test = {name: 'hola'}

console.log(Reflect.getOwnPropertyDescriptor(test, 'name'))

throwOneCoin()
    .then(data => console.log(data))
    .catch(data => console.log(data))