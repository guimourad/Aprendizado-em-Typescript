//A maioria dos exemplos que vimos até agora se concentrou em estreitar variáveis ​​únicas com tipos simples como string, boolean, e number.
//Embora isso seja comum, na maioria das vezes em JavaScript, lidaremos com estruturas um pouco mais complexas.

// interface Shape{
//     kind: "circle" | "square";
//     radius?: number;
//     sideLength?: number;
// }

//Observe que estamos usando uma união de tipos de literais de string:
//"circle"and "square"para nos dizer se devemos tratar a forma como um círculo ou quadrado, respectivamente. 
//Ao usar "circle" | "square"em vez de string, podemos evitar problemas de grafia incorreta.


//Podemos escrever uma getAreafunção que aplica a lógica correta com base em se está lidando com um círculo ou quadrado. Primeiro, tentaremos lidar com círculos.
// function getArea(shape:Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius! ** 2;
//     }
// }

//O problema com essa codificação de Shapeé que o verificador de tipo não tem como saber se radiusou sideLengthestão presentes com base na kindpropriedade. 
//Precisamos comunicar o que sabemos ao verificador de tipo. Com isso em mente, vamos tentar definir Shape.
interface Circle{
    kind: "circle";
    radius: number;
}

interface Square{
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

//Aqui, separamos corretamente Shapeem dois tipos com valores diferentes para a kindpropriedade,
//mas radiuse sideLengthsão declarados como propriedades obrigatórias em seus respectivos tipos.

function getArea(shape:Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
}

//Isso livrou-se do erro! Quando cada tipo em uma união contém uma propriedade comum com tipos literais,
//o TypeScript considera isso como uma união discriminada e pode restringir os membros da união.


//A mesma verificação funciona com switchdeclarações também. Agora podemos tentar escrever nosso complete getAreasem nenhuma !asserção não nula irritante.
function getArea1(shape:Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
    
        case "square":
            return shape.sideLength ** 2;
    }
}