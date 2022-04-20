const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

it("Testa se uppercase transforma a string com letras minúsculas e maiúsculas em apenas letras maiúsculas", (done) => {
    uppercase('oLa MunDo', (str) => {
        try {
            expect(str).toBe('OLA MUNDO');
            done();
        } catch (error) {
            done(error);
        }
    })
})