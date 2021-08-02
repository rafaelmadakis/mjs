const students = [
  {name: 'Lucas', grade: 8},
  {name: 'Mario', grade: 2},
  {name: 'Jean', grade: 10},
  {name: 'Rogerio', grade: 6},
  {name: 'Marcos', grade: 5},
  
]

// let totalGrade = 0
// students.forEach((pupil => totalGrade += pupil.grade))

const classroomTotalPoints = students.reduce(
  (prev, current) => {
    console.log(prev)
    return prev + current.grade
  }, 
  0
  )

  console.log(classroomTotalPoints)

