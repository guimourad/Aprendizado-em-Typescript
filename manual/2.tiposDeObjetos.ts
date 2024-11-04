function Cordenadas(coord:{ x: number; y: number }) {
    console.log("the coordinate's x value is", coord.x);
    console.log("the coordinate's y value is", coord.y);
}

Cordenadas({x: 3, y: 7});


//Propriedades opcionais
// ?
function printName(obj: { first: string; last?: string }) {
    console.log("first name: ", obj.first);
    console.log("full name: ", obj.first, obj.last);
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
