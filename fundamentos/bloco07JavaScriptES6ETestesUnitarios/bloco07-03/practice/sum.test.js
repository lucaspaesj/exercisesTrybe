const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee
} = require("./sum");

describe("Requisito 1 - Função sum()", () => {
  it("Se passado (4, 5) a função sum retorna 9", () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it("Se passado (0, 0) a função sum retorna 0", () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it("Se passado (4, '5') a função retorna um erro", () => {
    expect(() => { sum(4, '5') }).toThrow(Error);
  });
  it("Se passado (4, '5') o erro é igual à 'parameters must be numbers'", () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'));
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

describe('Requisito 5 - Função techList()', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Requisito 6 - Função hydrate()', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe("Requisito bônus - Função searchEmployee()", () => {
  const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];
  it('Testa se a função searchEmployee é definida', () => {
    expect(searchEmployee).toBeDefined();
  });
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Testa se informados os parâmetros "id" e "firstName" para searchEmployee o dado solicitado é retornado', () => {
    expect(searchEmployee("8579-6", "firstName")).toEqual(professionalBoard[0].firstName);
    expect(searchEmployee("5569-4", "firstName")).toEqual(professionalBoard[1].firstName);
    expect(searchEmployee("4456-4", "firstName")).toEqual(professionalBoard[2].firstName);
    expect(searchEmployee("1256-4", "firstName")).toEqual(professionalBoard[3].firstName);
    expect(searchEmployee("9852-2-2", "firstName")).toEqual(professionalBoard[4].firstName);
    expect(searchEmployee("4678-2", "firstName")).toEqual(professionalBoard[5].firstName);
  });
  it('Testa se informados os parâmetros "id" e "lastName" para searchEmployee o dado solicitado é retornado', () => {
    expect(searchEmployee("8579-6", "lastName")).toEqual(professionalBoard[0].lastName);
    expect(searchEmployee("5569-4", "lastName")).toEqual(professionalBoard[1].lastName);
    expect(searchEmployee("4456-4", "lastName")).toEqual(professionalBoard[2].lastName);
    expect(searchEmployee("1256-4", "lastName")).toEqual(professionalBoard[3].lastName);
    expect(searchEmployee("9852-2-2", "lastName")).toEqual(professionalBoard[4].lastName);
    expect(searchEmployee("4678-2", "lastName")).toEqual(professionalBoard[5].lastName);
  });
  it('Testa se informados os parâmetros "id" e "specialities" para searchEmployee o dado solicitado é retornado', () => {
    expect(searchEmployee("8579-6", "specialities")).toEqual(professionalBoard[0].specialities);
    expect(searchEmployee("5569-4", "specialities")).toEqual(professionalBoard[1].specialities);
    expect(searchEmployee("4456-4", "specialities")).toEqual(professionalBoard[2].specialities);
    expect(searchEmployee("1256-4", "specialities")).toEqual(professionalBoard[3].specialities);
    expect(searchEmployee("9852-2-2", "specialities")).toEqual(professionalBoard[4].specialities);
    expect(searchEmployee("4678-2", "specialities")).toEqual(professionalBoard[5].specialities);
  });
  it('Testa se informado um "id" não existente a função retorna um erro', () => {
    expect(() => {searchEmployee("5555-5", "lastName")}).toThrow(Error);
  });
  it('Testa se informado um "id" não existente a função retorna o erro "ID não identificada"', () => {
    expect(() => {searchEmployee("5555-5", "lastName")}).toThrowError(new Error("ID não identificada"));
  });
  it('Testa se informado um detalhe não existente a função retorna um erro', () => {
    expect(() => {searchEmployee("4678-2", "city")}).toThrow(Error);
  });
  it('Testa se informado um detalhe não existente a função retorna o erro "Informação indisponível"', () => {
    expect(() => {searchEmployee("4678-2", "city")}).toThrowError(new Error("Informação indisponível"));
  })
});