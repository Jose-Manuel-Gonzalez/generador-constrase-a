// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const passwordElement = document.getElementById('password');
const lengthTextElement = document.getElementById('password-length');
const rangeElement = document.getElementById('range');
const buttonGenerateElement = document.getElementById('generate-password');

const allowedCharacters = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM+-.,!"·$%&/(){}';

let passwordLength = 16;

const setPasswordLenght = event => {
  //asignar longitud de password
  //lengthTextElement.textContent = event.target.value; Sustituido por:
  passwordLength = event.target.value;
  lengthTextElement.textContent = passwordLength;
};

const printPassword = password => {
  passwordElement.value = password;
};

const generatePassword = () => {
  //longitud del password
  //generar un caracter aleatorio
  //guardar el password

  let newPassword = '';
  for (let index = 0; index < passwordLength; index++) {
    const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
    const randomCharacter = allowedCharacters.charAt(randomNumber);
    newPassword += randomCharacter;
  }
  printPassword(newPassword);
};

rangeElement.addEventListener('input', setPasswordLenght);

buttonGenerateElement.addEventListener('click', generatePassword);
