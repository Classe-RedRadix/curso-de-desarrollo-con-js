/**
 * Implementa la función promiseAllSafe que recibe una lista de promesas y devuelve una
 * lista con los resultados.
 * - Si la promesa se resuelve, añade el resultado a la lista.
 * - Si la promesa falla, añade null a la lista e imprime el error por consola.
 * - Las promesas se deben lanzar secuencialmente
 */

async function wait(milliseconds) {
    return new Promise((resolve, _) => {
        setTimeout(resolve, milliseconds)
    })
}

async function maybeFailingLogger() {
    const rndMilliseconds = Math.max(499, Math.floor(Math.random() * 1000));

    // const rndMilliseconds = 1001
    await wait(rndMilliseconds)
    const willFail = Math.random() > 0.5
    console.log("rndMilliseconds=>", rndMilliseconds, " fail? ", willFail)

    if (willFail) throw new Error("Failed.");
    return rndMilliseconds;
}


async function promiseAllSafe(promiseList) {
    const result = []

    for (const item of promiseList) {
        try {
            const val = await item
            result.push(val)
        } catch (error) {
            result.push(error.message)
        }

    }
    return result
}

async function main() {
    try {
        promiseAllSafe([
            maybeFailingLogger(),
            maybeFailingLogger(),
            maybeFailingLogger(),
            maybeFailingLogger(),
            maybeFailingLogger(),
            maybeFailingLogger(),
            maybeFailingLogger(),
            maybeFailingLogger(),
        ]).then(console.log)
    } catch (error) {
        console.log("ERROR.....", error.message)
    }
}

main()