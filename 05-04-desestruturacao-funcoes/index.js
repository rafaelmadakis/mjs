function createUser({name, age, email}) {
  return {
    name,
    age,
    contact: {email}
  }
}

// const {name} = createUser('Lucas', 32, 'lucas@email.com')

const user = createUser ({
  name: 'Lucas',
  age: 32,
  email: 'lucas@email.com'
})


console.log(user)