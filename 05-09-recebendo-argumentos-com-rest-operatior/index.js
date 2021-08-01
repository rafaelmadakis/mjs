function createUser(name,age, ...contacts) { 
  return {
    name,
    age,
    contacts
  }
}

console.log(createUser('Lucas', 32, 'email@email1.com', 'email@email2.com', 'email@email3.com', 'email@email4.com', 'email@email5.com'))