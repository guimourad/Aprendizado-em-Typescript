//Uma declaração de interface é outra maneira de nomear um tipo de objeto:

interface Point3 {
    x:number;
    y:number;
}

function printCoord2(pt: Point3) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord2({ x: 101, y: 101 });


  //////////////////////////////////

  interface Animal {
    name: string;
  }
  
  interface Bear extends Animal {
    honey: boolean;
  }

  /////////////////////////

