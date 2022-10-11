const fn1 = (number, test) => {
    return test() + number
}

const fn2 = (number) => () => number

let test = fn2

console.log(fn1(5, test(5)))