const parts = ['ombro', 'joelho']
const sentence = ['cabeça', ...parts, 'pés'] // sprear operator ...


function createUser(name, age, ...contacts) { // spread operator ...
    return {
      name,
      age,
      contacts
    }  
}

const immutableArray = ['select', '*', 'from', 'post']

const mutableArray = [...immutableArray]
mutableArray.push('where id= 1')

// console.log(createUser('Lucas', 32, 'lucas@email.com', 'email2', 'email3', 'email4', 'email5'))

console.log(mutableArray)