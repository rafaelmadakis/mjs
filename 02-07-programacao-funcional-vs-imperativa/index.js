var person = {
  age: 17,
  name: 'Lucas'
}

//função pura
function getRemaingYearsToMajority(person) {
  return 18 - person.age
}

// função impura - gera efeitos colaterais
function increasePersonAge(person) {
  person.age = person.age + 1
}

// chamou um método impuro
increasePersonAge(person)


var remaningYears = getRemaingYearsToMajority(person)

console.log(remaningYears)