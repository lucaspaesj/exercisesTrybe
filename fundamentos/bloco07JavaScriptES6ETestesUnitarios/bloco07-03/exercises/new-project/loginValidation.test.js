// loginValidation.test.js
const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
  verificaNumeros,
} = require("./loginValidation.js");

describe("Testes verificaNumeros()", () => {
  it("Quando passado [1, 2, 3, 4, 5] retorna true", () => {
    expect(true).toEqual(verificaNumeros([1, 2, 3, 4, 5]));
  });
  it("Quando passado [1, 2, '3', 4, 5] retorna false", () => {
    expect(false).toEqual(verificaNumeros([1, 2, '3', 4, 5]));
  });
  it("Quando passado [''] retorna false", () => {
    expect(false).toEqual(verificaNumeros(['']));
  });
});

describe("Testes verifyCredentials()", () => {

  it("verifyCredentials() calls the correct function depending on the user and password input", () => {

    const user = {
      userName: 'Joana',
      password: 123456,
    };

    const { userName, password } = user;

    expect(verifyCredentials({ userName, password })).toBe(
      "Hello, Joana! Que bom ter você de volta"
    );
  });

  it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
    expect(greetingMessage("Lucas")).toBe(
      "Hello, Lucas! Que bom ter você de volta"
    );
  });

  it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
    expect(loginErrorMessage("Bob")).toBe(
      "Pessoa usuária 'Bob' não encontrada, tente novamente!"
    );
  });
});