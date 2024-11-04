//Por exemplo, se você tem a união string | number, não pode usar métodos que estão disponíveis somente em string:

// function printId(id: number | string) {
//   console.log("Your ID is: ", id);
//   console.log(id.toUpperCase());
// }

function printId(id: number | string) {
    if (typeof id === "string") {
      // In this branch, id is of type 'string'
      console.log("Your ID is: ",id.toUpperCase());
    } else {
      // Here, id is of type 'number'
      console.log("Your ID is: ",id);
    }
  }

printId(101); //number
printId("101"); //string

///////////////////////////////////////////////////////


function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
  }
  
welcomePeople("Gui")

///////////////////////////////////////////

function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

const na = [1, 2, 3, 4, 5, 6, 7 , 8, 9 , 0]; 
console.log(getFirstThree(na))

