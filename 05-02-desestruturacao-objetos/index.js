const person = {
  name: 'Italo',
  age: 14,
    contact: {
      email: 'rafaelmadakis@gmail.com'
    }
}


const { name: batata} = person // desestruturação de objetos {}
// const age = person.age

console.log(batata)