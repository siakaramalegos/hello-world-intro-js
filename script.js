const myDog = {
  name: "Tina Turner",
  breed: "Afghan hound",
  age: 7,
  greeting: function() {
    alert('woof')
  },
  toys: ['microphone', 'short dress'],
  owner: {
    firstName: 'Sia',
    city: 'New Orleans'
  }
}

myDog.age = 8
myDog.color = 'blond'

const nameInput = document.querySelector('#name')

function onNameChange(event) {
  myDog.owner.firstName = event.target.value;
}

nameInput.addEventListener('change', onNameChange)
