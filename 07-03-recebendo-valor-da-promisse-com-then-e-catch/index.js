function handleClick() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(123)
    }, 5000)
  })
  
}

const result = handleClick().then(res => {
  console.log(123 === res)
  console.log('Finalizou')
  return 'batata'
})
.catch(err => { 
  console.log('Houve um erro')
  console.log(err)
})

console.log(result)