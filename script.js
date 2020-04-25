const dogs = ['Harry', 'Priscilla']
const dogs2 = ['Tom', 'Hanks']

function listDogs(dogsArray, customGreeting) {
  let info = 'My doggos are called '
  let greeting = customGreeting ? customGreeting : info
  return greeting + dogsArray.join(', ') + '.'
}

console.log(listDogs(dogs))
console.log(listDogs(dogs2, "My puppos are "))

// const dogsDetail = [
//   ['Harry', 'Jack Russell terrier', 7],
//   ['Priscilla', 'Australian Shepherd', 9],
// ]

// for (let index = 0; index < dogsDetail.length; index++) {
//   const dog = dogsDetail[index]
//   const text = `Name: ${dog[0]}, Breed: ${dog[1]}, Age: ${dog[2]}`
//   console.log(text);
// }

// for (let i = 0; i <= 7; i++) {
//   console.log(i)
// }
