class Human {
  hungry = true
  awake = true

  eat() {
    this.hungry = false 
    
  } 
}

Human.prototype.sleep = () => {
  this.awake = false
}

// person.sleep()

const person = new Human()

console.log(person.sleep)
