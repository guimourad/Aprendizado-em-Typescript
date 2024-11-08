//Para definir um tipo de proteção definido pelo usuário, precisamos simplesmente definir uma função cujo tipo de retorno seja um predicado de tipo :

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
//'pet is Fish' é nosso predicado de tipo neste exemplo.

//Sempre que isFishfor chamado com alguma variável, o TypeScript restringirá essa variável ao tipo específico se o tipo original for compatível.

// Both calls to 'swim' and 'fly' are now okay.


// let pet = getSmallPet();

// if (isFish(pet)){
//     pet.swim();
// } else{
//     pet.fly();
// }

//Você pode usar o tipo de proteção isFishpara filtrar uma matriz de Fish | Birde obter uma matriz de Fish:
// const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
// const underWater1: Fish[] = zoo.filter(isFish);
// // or, equivalently
// const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// // The predicate may need repeating for more complex examples
// const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
//   if (pet.name === "sharkey") return false;
//   return isFish(pet);
// });
