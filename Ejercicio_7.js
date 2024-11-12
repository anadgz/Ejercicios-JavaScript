// Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else if (numberTwo > numberOne) {
    return numberTwo
  } else {
    console.log('Los números son iguales')
  }
}

console.log(sum(2, 2))
