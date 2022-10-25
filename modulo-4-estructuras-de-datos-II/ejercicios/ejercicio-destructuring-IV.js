// Crea aqui la estructura que cumpla los requisitos para que
// la destructuración anidada funcione.

const estructura = [{ lista:[ ,{ x: { y: 2 } } ] }]

const [
  {
    lista: [
      ,
      {
        x: { y: dos },
      },
    ],
  },
] = estructura;

const compose = (...fns) => fn => fns.reduce((acc, fun) => fun(acc),fn)

const addFee = (amount) => amount * 2
const addDiscount = (amount) => amount - 10

const result = compose(addFee, addDiscount)(100)

//console.log({} ?? true)

const test = {email:'test'}

//console.log(Reflect.getOwnPropertyDescriptor(test, 'email'))

const getData = async() => {
  const data = await fetch('https://github.com/midudev/midu.dev/blob/master/content/posts/14-habitos-programadores-altamente-productivos.md')
  const response = await data.text()
  return response
}

//const data = getData().then(data => console.log(data))
const data = getData().then(data => console.log(data))