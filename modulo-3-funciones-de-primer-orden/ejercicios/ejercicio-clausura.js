const fn1 = (number1) => {
    const fn2 = (number2) => {
        return number1 + number2
    }
    return fn2
}

const fn2 = fn1(5)

console.log(fn2(2))
