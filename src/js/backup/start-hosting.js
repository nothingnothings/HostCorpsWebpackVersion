


// const checkboxInput = document.getElementById('checkbox');

// const signupButton = document.getElementById('signupButton');

// const inputs = document.querySelectorAll('input');

// for (let input of inputs) {
//   input.addEventListener('focus', () => {
//     input.classList.remove('blurred');
//   });
//   input.addEventListener('blur', () => {
//     input.classList.add('blurred');
//   });
// }




export class Validator {



  static validate(textField) {
    let button = document.getElementById('signupButton');
    let firstNameInput = document.getElementById('first-name');
    let lastNameInput = document.getElementById('last-name');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
  
    button.disabled = true;
  
    if (
      textField.value !== '' &&
      firstNameInput.value !== '' &&
      lastNameInput.value !== '' &&
      (passwordInput.value !== '') & this.validateEmail(emailInput.value)
    ) {
      if (checkboxInput.checked) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    }
  }
  
  static validateEmail(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  
    if (reg.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  
  static checkboxChecked() {
    if (checkboxInput.value === 'checked') {
      checkboxInput.value === 'unchecked';
    } else {
      checkboxInput.value === 'checked';
    }
  
    this.validate(checkboxInput);
  }
  
  static showDummyMessage() {
    let warning = document.createElement('span');
    warning.innerHTML = 'WARNING: ';
    let tag = document.createElement('p');
    let text = document.createTextNode(
      'This is a dummy form, so no data is actually sent by its submission.'
    );
    tag.appendChild(warning);
    tag.appendChild(text);
    let element = document.getElementById('dummy-message');
    element.appendChild(tag);
  
    setTimeout(() => {
      tag.parentElement.removeChild(tag);
    }, 2000);
  }
}



// export function validate(textField) {
//   let button = document.getElementById('signupButton');
//   let firstNameInput = document.getElementById('first-name');
//   let lastNameInput = document.getElementById('last-name');
//   let emailInput = document.getElementById('email');
//   let passwordInput = document.getElementById('password');

//   button.disabled = true;

//   if (
//     textField.value !== '' &&
//     firstNameInput.value !== '' &&
//     lastNameInput.value !== '' &&
//     (passwordInput.value !== '') & validateEmail(emailInput.value)
//   ) {
//     if (checkboxInput.checked) {
//       button.disabled = false;
//     } else {
//       button.disabled = true;
//     }
//   }
// }

// export function validateEmail(email) {
//   var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

//   if (reg.test(email)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// export function checkboxChecked() {
//   if (checkboxInput.value === 'checked') {
//     checkboxInput.value === 'unchecked';
//   } else {
//     checkboxInput.value === 'checked';
//   }

//   validate(checkboxInput);
// }

// export function showDummyMessage() {
//   let warning = document.createElement('span');
//   warning.innerHTML = 'WARNING: ';
//   let tag = document.createElement('p');
//   let text = document.createTextNode(
//     'This is a dummy form, so no data is actually sent by its submission.'
//   );
//   tag.appendChild(warning);
//   tag.appendChild(text);
//   let element = document.getElementById('dummy-message');
//   element.appendChild(tag);

//   setTimeout(() => {
//     tag.parentElement.removeChild(tag);
//   }, 2000);
// }

// signupButton.addEventListener('click', showDummyMessage);
