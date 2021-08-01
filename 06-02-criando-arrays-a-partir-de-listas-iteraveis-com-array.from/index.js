function greet(){
  const args = Array.from(arguments, function(name){
    return name + '!'  
  })
  
  
  args.forEach(arguments => {
    console.log( `Hello, ${arguments}`)
    
  }); 
  
}

console.log(greet('Julio', 'Helio', 'Jonas'))