function sum(a, b){
  console.log(this)
  return a + b
}

const me = { name: 'José'}

// console.log(sum.call(me, 1,2))

console.log(sum.apply(me, [1,2]))