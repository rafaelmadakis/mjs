/*Function declaration
function name(){

}*/

/*Function expressions
const name = function(){

}*/

//Arrow functions
const getRemaingYears = (age) => {
  return 18 - age
}

const me = {
  name: 'lucas',
  age: 12,
  greet: () => {
    console.log(this)
  }
}


console.log()