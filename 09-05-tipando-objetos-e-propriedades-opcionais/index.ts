type Person = {
  name: string
  age: number
  contacts?: string[],
  isAlive: boolean
}


const person: Person = {
  age: 22,
  name: 'Lucas',
  // contacts: []
  isAlive: true
}

const person2: Person = {
  name: 'João',
  age: 43,
  isAlive: true
}