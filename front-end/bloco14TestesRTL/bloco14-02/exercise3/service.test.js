const service = require('./service');

test('Testa se a função é chamada', () => {
    service.generateRandomNumber = jest.fn().mockReturnValue(10);

    expect(service.generateRandomNumber()).toBe(10);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
});

test('Testa se implementar uma nova funcionalidade, a função se comporta da maneira esperada', () => {
    service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.generateRandomNumber(10, 5)).toBe(2);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(10, 5);
});

test('Teste se implementar uma, ainda mais, nova funcionalidade, a função se comporta da maneira esperada', () => {
    service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

    expect(service.generateRandomNumber(2, 5, 4)).toBe(40);
    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(service.generateRandomNumber).toHaveBeenCalledWith(2, 5, 4);
});

test('Testa se as funções: "allCaps", "firstLetter" e "concatWords" se comportam da maneira esperada', () => {
    service.allCaps = jest.fn().mockImplementation((str) => str.toLowerCase());
    service.firtLetter = jest.fn().mockImplementation((str) => str[str.length - 1]);
    service.concatWords = jest.fn().mockImplementation((str, str2, str3) => `${str}${str2}${str3}`);

    expect(service.allCaps('TESTE')).toBe('teste');
    expect(service.firtLetter('teste')).toBe('e');
    expect(service.concatWords('teste', 'teste2', 'teste3')).toBe('testeteste2teste3');
    service.allCaps.mockRestore();
    service.allCaps = jest.fn().mockReturnValue('TESTE');
    expect(service.allCaps('teste')).toBe('TESTE');
});

describe('Testa se a função "fetchDog" se comporta da maneira esperada', () => {
    service.fetchDog = jest.fn();
    afterEach(service.fetchDog.mockReset);

    test('Testando a requisição caso a promise resolva', async () => {
        service.fetchDog.mockResolvedValue("request sucess");

        service.fetchDog();
        expect(service.fetchDog).toHaveBeenCalled();
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
        await expect(service.fetchDog()).resolves.toBe("request sucess");
        expect(service.fetchDog).toHaveBeenCalledTimes(2);
    });

    test('Testando a requisição caso a promise falhe', async () => {
        service.fetchDog.mockRejectedValue("request failed");

        expect(service.fetchDog).not.toHaveBeenCalled();
        await expect(service.fetchDog()).rejects.toBe("request failed");
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
    });
});