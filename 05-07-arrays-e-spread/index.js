const parts = ['ombro', 'joelho']
const sentence = ['cabeça', ...parts, 'pe']  // ...parts, spread operator

const immutableArray = ['Select', '*', 'from']
const mutableArray = [...immutableArray]
mutableArray.push('batata')


console.log(mutableArray)