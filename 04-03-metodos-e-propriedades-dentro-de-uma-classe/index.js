class Human {
  hungry = true

  eat() {
    this.hungry = false
    return this.hungry
  }
}

const person = new Human()
const person2 = new Human()


console.log(person2)
