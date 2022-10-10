// Crea aquí tu función cut

const cut = (array, firstIndex, secondIndex) => {
    const secondIndexSafe = secondIndex || array.length - 1
    
    return array.map((value, index) => {
        const firstRange = index >= firstIndex
        const secondRAnge = index <= secondIndexSafe
        
        if(firstRange && secondRAnge) return value
    }).filter(value => value)
} 

console.log(cut(["a", "b", "c", "d"], 1, 2)) // ["b", "c"]
console.log(cut(["a", "b", "c", "d"], 1)) // ["b", "c", "d"]

const cut2 = (array, firstIndex, secondIndex) => {
    const secondIndexSafe = secondIndex ?? array.length - 1
    
    return array.reduce((acc, value, index) => {
        const firstRange = index >= firstIndex
        const secondRAnge = index <= secondIndexSafe

        if(firstRange && secondRAnge) acc.push(value)
        return acc
    },[])
} 

console.log(cut2(["a", "b", "c", "d"], 1, 2)) // ["b", "c"]
console.log(cut2(["a", "b", "c", "d"], 1)) // ["b", "c", "d"]


