const degreeType = document.getElementById('degreeType')
const likeToStudy = document.getElementById('likeToStudy')
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const email = document.getElementById('email')
const telephone = document.getElementById('telephone')
const address = document.getElementById('address')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {

let messages = []

if (degreeType.value === '' || degreeType.value == null) {
messages.push('You must select a degree type.')
}

if (likeToStudy.value === '' || likeToStudy.value == null) {
messages.push('You must select a subject you would like to study.')
}

if (fName.value === '' || fName.value == null) {
messages.push('Your first name is required.')
}

if (lName.value === '' || lName.value == null) {
messages.push('Your last name is required.')
}

if (email.value === '' || email.value == null) {
messages.push('Your email is required.')
}

if (telephone.value === '' || telephone.value == null) {
messages.push('Your phone number is required.')
}

if (address.value === '' || address.value == null) {
messages.push('Your address is required.')
}

if (messages.length > 0) {
e.preventDefault()
errorElement.innerText = messages.join(' ')
}

document.getElementById("error").className += "errorMessage";

})