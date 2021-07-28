function greet() {
  // console.log('bom dia')
  console.log(this)
}

const me = {
  name: 'daniel',
  greet(){
    console.log(this)
    return 'batata'
  }
}

function getTemaningYearsToMajority(age) {
  return 18 - age
}

const remaingYears = getTemaningYearsToMajority(15)

console.log(remaingYears)