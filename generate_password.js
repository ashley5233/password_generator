function generatePassword(option) {
  //define the characters
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define collection that we can save what we need
  let collection = []
  if (option.lowercase === 'on') {
    let lowerCaseArr = lowerCaseLetters.split('')
    collection = collection.concat(lowerCaseArr)
  }
  if (option.uppercase === 'on') {
    let uppercaseArr = upperCaseLetters.split('')
    collection = collection.concat(uppercaseArr)
  }
  if (option.numbers === 'on') {
    let numberArr = numbers.split('')
    collection = collection.concat(numberArr)
  }
  if (option.symbols === 'on') {
    let symbolsArr = symbols.split('')
    collection = collection.concat(symbolsArr)
  }
  if (option.excludeCharacters) {
    collection = collection.filter((character) => {
      return !option.excludeCharacters.includes(character)
    })
  }
  if (collection.length === 0) {
    return 'There is no valid character in your selection.'
  }

  //random generate password 
  function randomPassword() {
    let randomIndex = Math.floor(Math.random() * collection.length)
    return collection[randomIndex]
  }
  let password = ''
  for (let i = 0; i < option.length; i++) {
    password += randomPassword()
  }
  return password
}
// invoke generatePassword function 
module.exports = generatePassword