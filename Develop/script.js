// Assignment Code

let generateBtn = document.querySelector("#generate");
// const lower = 
// const upper = lowerAmount.value
// const numbers = lowerAmount.value
// const specialCharacters = lowerAmount.value
// const characterAmount = lowerAmount.value

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    function generatePassword() {
        let lower = window.confirm('Would you like to use lower case characters');
        if(lower == false) {
              window.alert("Goodbye!")
              return
        }
        let upper = window.confirm('Would you like to use upper case character');
        if(upper == false) {
          window.alert("Goodbye!")
          return
        }
        let numbers = window.confirm('Would you like to use numbers?');
        if(numbers == false) {
          window.alert("Goodbye!")
          return
        }
        let specialCharacters = window.confirm('Would you like to use special character');
        if(specialCharacters == false) {
          window.alert("Goodbye!")
          return
        }
        let characterAmount = window.confirm('How long would you like the pasword?');
        if(characterAmount == false) {
          window.alert("Goodbye!")
          return
        }

        const uppercaseCharacters = arrayFromLowToHigh(65, 90)
        const lowercaseCharacters = arrayFromLowToHigh(97, 122)
        const numberCharacters = arrayFromLowToHigh(48, 57)
        const symbolCharacters = arrayFromLowToHigh(33, 47)
            .concat(arrayFromLowToHigh(58, 64))
            .concat(arrayFromLowToHigh(91, 96))
            .concat(arrayFromLowToHigh(123, 126))

  function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return console.log(array);
    
  }
        


        
    }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

