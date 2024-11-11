//As funções JavaScript também podem ser invocadas com o 'new'
//O TypeScript se refere a elas como construtores porque elas geralmente criam um novo objeto. 
//Você pode escrever uma assinatura de construção adicionando a newpalavra-chave na frente de uma assinatura de chamada:

type SomeConstructor = {
    //new (s: string): SomeObject;
  };
  function fn(ctor: SomeConstructor) {
    //return new ctor("hello");
  }

//Alguns objetos, como Dateo object do JavaScript, podem ser chamados com ou sem new.
//Você pode combinar assinaturas call e construct no mesmo tipo arbitrariamente:
interface CallOrConstruct {
    (n?: number): string;
    new (s: string): Date;
  }

function fn1(ctor:CallOrConstruct) {
    // Passing an argument of type `number` to `ctor` matches it against
    // the first definition in the `CallOrConstruct` interface.
    console.log(ctor(10));

    // Similarly, passing an argument of type `string` to `ctor` matches it
    // against the second definition in the `CallOrConstruct` interface.
    console.log(new ctor("10"));
}
fn1(Date);