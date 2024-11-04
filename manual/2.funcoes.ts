function Myname( name:string) {
    console.log("hello,", name, "!");
}

function Age(age:number) {
    console.log("I'm", age, "years old!")
}

Myname('Guilherme');

Age(19);
//Quando um parâmetro tem uma anotação de tipo, os argumentos para essa função serão verificados:
//Mesmo que você não tenha anotações de tipo em seus parâmetros, o TypeScript ainda verificará se você passou o número correto de argumentos.

function getFavorNumber():number {
    return 10;
}

console.log(getFavorNumber())
//Se você quiser anotar o tipo de retorno de uma função que retorna uma promessa, você deve usar o Promisetipo:

async function getFavoriteNumber(): Promise<number> {
  return 26;
}

console.log(getFavoriteNumber())



const names = ["Alice", "Bob", "Eve"]; 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});