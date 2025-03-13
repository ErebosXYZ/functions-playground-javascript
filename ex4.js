/**
 * Implementa una función que simule el lanzamiento de un dado de 6 caras.
 */

function rollDice() {
    // COMPLETAR
    return Math.floor(Math.random() * 6) + 1;
}
// Math.floor perquè el número sigui enter
// Math random genera un número aleatori entre el 0 i el 1. Ho multipliquem per 6 perquè generi un número del 0 al 5.9 (5 pq serà enter pel Math.floor) i li sumo 1 perquè el resultat estigui sempre entre l'1 i el 6

console.log(rollDice()); // Un número entre 1 y 6
console.log(rollDice()); // Un número entre 1 y 6
console.log(rollDice()); // Un número entre 1 y 6