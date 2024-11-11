// É comum escrever uma função onde os tipos de entrada se relacionam com o tipo de saída, ou onde os tipos de duas entradas são relacionados de alguma forma.
// Vamos considerar por um momento uma função que retorna o primeiro elemento de um array:

function firstElement(arr:any[]) {
    return arr[0];
}

// Esta função faz seu trabalho, mas infelizmente tem o tipo de retorno any. Seria melhor se a função retornasse o tipo do elemento do array.

// No TypeScript, genéricos são usados ​​quando queremos descrever uma correspondência entre dois valores.
// Fazemos isso declarando um parâmetro de tipo na assinatura da função:
function firstElement1<Type>(arr: Type[]): Type | undefined{
    return arr[0]
}

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// b is of type 'number'
const b = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

console.log(s, b, u)