function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}

///////////

// function printAll(strs: string | string[] | null) {
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     } else {
//       // do nothing
//     }
//   }

//////////////////

//Em JavaScript, podemos usar qualquer expressão em condicionais, &&s, ||s, if declarações, negações booleanas ( !), e mais.
//Como exemplo, if declarações não esperam que sua condição sempre tenha o tipo boolean.
function getUsersOnlineMessage(numUsersOnline: number) {
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }
  return "Nobody's here. :(";
}

////////////////////
//É bastante popular alavancar esse comportamento, especialmente para proteger contra valores como nullou undefined.
// function printAll(strs: string | string[] | null) {
//     if (strs && typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
//   }

// E S T R E I T A M E N T O   D A   V E R D A D E
function printAll(strs: string | string[] | null) {
  if (strs) {
    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
//Envolvemos todo o corpo da função em uma verificação de verdade, mas isso tem uma desvantagem sutil:
//podemos não estar mais lidando corretamente com o caso de string vazia.

////////////////////
//Uma última palavra sobre o estreitamento pela veracidade é que as negações booleanas são !filtradas a partir de ramificações negadas.
function multiplyAll(
  values: number[] | undefined,
  factor: number
): number[] | undefined {
  if (!values) {
    return values;
  } else {
    return values.map((x) => x * factor);
  }
}

//////////////////////////////////////////////

//E S T R E I T A M E N T O   D A   I G U A L D A D E
//O TypeScript também usa switchinstruções e verificações de igualdade como ===, !==, ==, e !=para restringir tipos. Por exemplo:
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

example("x", "y");

///////////////////

function printAll1(strs: string | string[] | null) {
  if (strs !== null) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}


/////////////

interface Container{
    value: number | null | undefined;
}

function multiplyValue(container:Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
        console.log(container.value);
        
        // Now we can safely multiply 'container.value'.
        container.value *= factor
    }

}



///////////////////////////

//  operador  I N
type Fish = { swim: () => void };
type Bird = { fly: () => void  };
type Human = {swim?: () => void; fly?: () => void };

function move(animal:Fish | Bird) {
    if("swim" in animal){
        return animal;
    }
    return animal;
}


////////////

// INSTANCEOF


function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}