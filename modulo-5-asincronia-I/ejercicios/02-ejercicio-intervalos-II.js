/**
 * Imprime ‘ping’ cada 500ms de forma infinita.
 * No utilices setInterval
 */

function ping() {
    console.log("ping");
    setTimeout(ping, 500);
}

ping();