class Animal {
  sex

  constructor(props){
    this.sex = props.sex
  }
}

class Human extends Animal {
  hungry = true
  name
  age
  

  constructor(props){
    super(props)
    
    if(!props.name)
    throw Error('Nome é obrigatorio')
    this.name = props.name
    this.age = props.age
    
  }

  eat() {
    this.hungry = false
    
  }
}

const person = new Human({
  name: 'Lucas',
  age: 34,
  sex: 'male'
})



console.log(person)
