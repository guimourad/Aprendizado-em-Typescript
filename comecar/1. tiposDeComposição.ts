type bool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumberUnderTen = 1 | 3 | 5 | 7| 9;


function getLength(obj: string | string[]) {
    if (typeof obj === "string"){
        return [obj];
  }
  return obj;
}


type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNumberArray = Array<{ name: string }>;

