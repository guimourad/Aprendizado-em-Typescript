//tem dois valores primitivos usados ​​para sinalizar valores ausentes ou não inicializados: nulle undefined.

function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }
doSomething('gui')

///////////////////////////////
//Escrever '!' depois de qualquer expressão é efetivamente uma asserção de tipo de que o valor não é null or undefined:
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}