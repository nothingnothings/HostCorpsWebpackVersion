import '../assets/css/start-hosting.css';

const checkboxInput = document.getElementById('checkbox');
const signupButton = document.getElementById('signupButton');
const inputs = document.querySelectorAll('input');

let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');

for (let input of inputs) {
  input.addEventListener('focus', () => {
    input.classList.remove('blurred');
  });
  input.addEventListener('blur', () => {
    input.classList.add('blurred');
  });
}

function validate(textField) {
  let button = document.getElementById('signupButton');
  button.disabled = true;
  
  if (
    textField.value !== '' &&
    firstNameInput.value !== '' &&
    lastNameInput.value !== '' &&
    (passwordInput.value !== '') & validateEmail(emailInput.value)
  ) {
    if (checkboxInput.checked) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }
}

window.validate = validate;

function validateEmail(email) {
  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  if (reg.test(email)) {
    return true;
  } else {
    return false;
  }
}

function checkboxChecked() {
  if (checkboxInput.value === 'checked') {
    checkboxInput.value === 'unchecked';
  } else {
    checkboxInput.value === 'checked';
  }

  validate(checkboxInput);
}

function showDummyMessage() {
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

if (signupButton) {
  signupButton.addEventListener('click', showDummyMessage);
}

if (checkboxInput) {
  checkboxInput.addEventListener('click', checkboxChecked);
}

if ((firstNameInput, lastNameInput, emailInput, passwordInput)) {
  console.log('ENTERED');
  firstNameInput.addEventListener('keyup', validate.bind(this));
  lastNameInput.addEventListener('keyup', validate.bind(this));
  email.addEventListener('keyup', validate.bind(this));
  passwordInput.addEventListener('keyup', validate.bind(this));
}
