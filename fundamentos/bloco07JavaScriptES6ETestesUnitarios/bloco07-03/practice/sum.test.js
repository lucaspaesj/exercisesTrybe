const {
  sum, 
  myRemove,
  myFizzBuzz,
  encode,
  decode
} = require("./sum");

describe("Requisito 1 - Função sum()", () => {
  it("Se passado (4, 5) a função sum retorna 9", () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it("Se passado (0, 0) a função sum retorna 0", () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it("Se passado (4, '5') a função retorna um erro", () => {
    expect(() => {sum(4, '5')}).toThrow(Error);
  });
  it("Se passado (4, '5') o erro é igual à 'parameters must be numbers'", () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  });
});

describe("Requisito 2 - Função myRemove()", () => {
  const arr = [1, 2, 3, 4];
  it("A função recebe um array 'arr' e retorna uma cópia desse array sem o elemento item caso ele exista no array", () => {
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
  });
  it("A função recebe ([1, 2, 3, 4], 3) e não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("A função recebe ([1, 2, 3, 4], 5) e retorna [1, 2, 3, 4]", () => {
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("Requisito 3 - Função myFizzBuzz()", () => {
  it("A função recebe (15) e retorna 'fizzbuzz'", () => {
    expect(myFizzBuzz(15)).toEqual("fizzbuzz");
  });
  it("A função recebe (3) e retorna 'fizz'", () => {
    expect(myFizzBuzz(3)).toEqual("fizz");
  });
  it("A função recebe (5) e retorna 'buzz'", () => {
    expect(myFizzBuzz(5)).toEqual("buzz");
  });
  it("A função recebe (7) e retorna 7", () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });
  it("A função recebe ('teste') e retorna 'false'", () => {
    expect(myFizzBuzz("teste")).toEqual(false);
  })
}); 

describe("Requisito 4 - Função encode()", () => {
  it("As funções encode e decode existem", () => {
    expect(typeof encode).toBe("function");
    expect(typeof decode).toBe("function");
  });
  it("As vogais a, e, i, o, u, passadas para função encode retornam 1, 2, 3, 4, 5, respectivamente", () => {
    expect(encode("aeiou")).toEqual("12345");
  });
  it("Os números 1, 2, 3, 4, 5, passados para função decode retornam a, e, i, o, u, respectivamente", () => {
    expect(decode("12345")).toEqual("aeiou");
  });
  it("Demais letras e números passados para as funções não são convertidos para cada caso", () => {
    const str = "qwrtypsdfghjklçzxcvbnm";
    expect(encode(str)).toEqual(str);
    const str2 = "67890";
    expect(decode(str2)).toEqual(str2);
  });
  it("A string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro", () => {
    const str = "teste";
    expect(encode(str).length).toEqual(str.length);
    const str2 = "t2st2";
    expect(encode(str2).length).toEqual(str2.length);
  })
});