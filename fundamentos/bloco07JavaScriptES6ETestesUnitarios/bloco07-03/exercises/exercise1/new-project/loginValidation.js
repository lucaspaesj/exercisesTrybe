// loginValidation.js
const greetingMessage = (user) => {
  return `Hello, ${user}! Que bom ter você de volta`;
};

const loginErrorMessage = (user) => {
  return `Pessoa usuária '${user}' não encontrada, tente novamente!`;
};

const user = {
  userName: "Joana",
  password: 123456,
};

const verifyCredentials = ({ userName, password }) => {
  if (password === 123456 && userName === "Joana") {
    return greetingMessage(userName);
  } else {
    return loginErrorMessage(userName);
  }
};

const { userName, password } = user;

const verificaNumeros = (arr) => {
  for(let i = 0; i < arr.length; i += 1){
    if(typeof arr[i] !== "number"){
      return false;
    }
  }
  return true;
}

module.exports = { greetingMessage, loginErrorMessage, verifyCredentials, verificaNumeros }