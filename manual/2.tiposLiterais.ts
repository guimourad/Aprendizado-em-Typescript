//var e let permitem alterar o que é mantido dentro da variável, e constnão. 

let changingString = "hello world";
changingString = 'ola mundo';

changingString

///

const constantString = 'hello world';
constantString

/////////////
//não assume que a atribuição de 1 a um campo que tinha anteriormente 0é um erro.
//Outra maneira de dizer isso é que obj.counterdeve ter o tipo number, não 0, porque os tipos são usados ​​para determinar o comportamento de leitura e escrita .
// const obj1 = { counter: 0 };
// if (/*'someCondition'*/) {
//   obj.counter = 1;
// }

// //Outra maneira de dizer isso é que 'method' ter o tipo string, não 'get', porque os tipos são usados ​​para determinar o comportamento de leitura e escrita .
// declare function handleRequest(url: string, method: "GET" | "POST"): void;

// // Change 1:
// const req = { url: "https://example.com", method: "GET" as "GET" };
// // Change 2
// handleRequest(req.url, req.method as "GET");

// ///

// //Você pode usar as constpara converter o objeto inteiro em literais de tipo:

// const req = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method);