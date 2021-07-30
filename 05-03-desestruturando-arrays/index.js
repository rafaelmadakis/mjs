const fruits = ['banana', 'morango', 'manga']
const person = {name: 'joaquin', age: 32}
const person2 = {name: 'Jonas', age: 33 }
const person3 = {name: 'João', age: 34 }


// const [firstItem, secondItem] = fruits  //desestruturando arrays []
// const secondItem = fruits[1]

const friends = [person, person2, person3]

//antes
// const secondPerson = friends[1]
// const name = secondPerson.name


//atual
// const[, {name}] = friends

const chart = [[1,2], [3,4], [5,6]]

const [, ,[x, y]] = chart


console.log(y, x)