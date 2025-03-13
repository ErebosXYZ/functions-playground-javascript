/**
 * Extiende la función del ex4.
 *
 * Ahora, también vamos a determinar el agua necesaria en función de la condición física del ciclista.
 *
 * Si la condición es 'buena', el ciclista necesita 0.5l por cada km
 * Si la condicion es 'regular', el ciclista necesita 0.6l por cada km
 * Si la condición es 'mala', el ciclista necesita 0.7l por cada km
 */

/** La función está incompleta. SOLO debes modificar la función */

//  si la condició és bona l'aigua necessària serà els quilòmetres multiplicat per 0.5, s
//   `Para recorrer ${km} kms con una condición física ${condicion}, el ciclista necesita ${agua}l de agua`


function agua_necesaria(condicion, km) {
  let agua_por_km;
  let litros_totales;

  if (condicion == "buena") {
    agua_por_km = 0.5;
  } if(condicion == "regular") {
    agua_por_km = 0.6;
  } if(condicion == "mala") {
    agua_por_km = 0.7;
  }
  litros_totales = agua_por_km * km
  return litros_totales;
}

let condicion = "buena";
let km = 5;
let agua = agua_necesaria(condicion, km);
console.log(
  `Para recorrer ${km} kms con una condición física ${condicion}, el ciclista necesita ${agua}l de agua`
);

/**
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODc4ODA0NF8yMjIwOTMyMA
 */
