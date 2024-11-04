//string
//boolean
//number
let hello: string = 'abc';
let num: number = 58;
let torf: boolean = true;
let array: number[]; //Array<number>

let obj: any = { x: 0 };
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
const n: number = obj 
//Quando você não especifica um tipo e o TypeScript não consegue inferi-lo do contexto, o compilador normalmente usará any.