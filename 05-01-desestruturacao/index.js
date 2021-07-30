const person = {
  name: 'Italo',
  age: 14
}

function introduce({name, age}) { // desestruturação {}
  console.log(`oi! meu nome é ${name} e eu tenho ${age} anos`)
}

const fruits = ['banana', 'morango', 'manga']

const [firstFruit, secondFruit] = fruits //forma desestruturação

// const secondFruit = fruits[1] // forma normal

console.log(firstFruit)