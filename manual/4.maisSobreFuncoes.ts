//A maneira mais simples de descrever uma função é com uma expressão de tipo de função . Esses tipos são sintaticamente semelhantes a funções de seta:

function greeter3(fn: (a:string) => void) {
    fn("hello, world");
}

function printToConsole(s:string) {
    console.log(s);
}

greeter3(printToConsole);

//podemos usar um alias de tipo para nomear um tipo de função:
type GreetFunction = (a: string) => void;
function greeter4(fn: GreetFunction){
    //
}