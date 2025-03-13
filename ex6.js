/**
 * Implementa una función que calcule el área de una esfera dado su radio.
 * Fórmula del área de una esfera: A = 4 * π * r²
 */

function sphereArea(radius) {
    let area = 4 * Math.PI * radius**2;
    return area;
}

console.log("Area de la esfera para el valor 1: ", sphereArea(1));  // ≈ 12.5664
console.log("Area de la esfera para el valor 3: ", sphereArea(3));  // ≈ 113.097
console.log("Area de la esfera para el valor 3: ", sphereArea(5));  // ≈ 314.159