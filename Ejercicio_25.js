// Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

function average(param) {
  totalVentas = 0
  for (i = 0; i < products.length; i++) {
    totalVentas += products[i].sellCount
  }
  return (average = totalVentas / products.length)
}

console.log('La media de las ventas es: ', average(products))
