// Note que não tivemos que especificar Typeneste exemplo. O tipo foi inferido - escolhido automaticamente - pelo TypeScript.

// Podemos usar múltiplos parâmetros de tipo também. Por exemplo, uma versão autônoma de mapficaria assim:

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}
 
// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));