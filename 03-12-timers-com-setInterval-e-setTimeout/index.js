const interval = setInterval(() => {
  console.log('Executou')
}, 5000)

setTimeout(() => {
  clearInterval(interval)
}, 20000);

