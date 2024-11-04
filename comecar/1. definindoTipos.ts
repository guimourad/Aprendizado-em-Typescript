interface User {
    name: string,
    id: number,
};

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id:number){
        this.name = name;
        this.id = id;
    }
}

const usert: User = new UserAccount('Guilherme', 0);



function getUser(userId: number): User {
    if (userId === 1) {
        return { name: "Alice", id: 1 };
    }
    return { name: "Unknown", id: -1 }; // Default return for other userIds
}


//Você pode usar interfaces para anotar parâmetros e retornar valores para funções:
function deleteUser(user: User) {
    // ...
  }
   
  function getAdminUser(user: User) {
    //...
  }