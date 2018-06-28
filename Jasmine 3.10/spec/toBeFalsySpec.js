describe("Teste do toBeFalsy", function(){
    it("Deve validar o uso do matcher toBeFalsy", function(){
        expect(null).toBeFalsy();
        expect('').toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(0).toBeFalsy();
        expect(false).toBeFalsy();

        expect(true).not.toBeFalsy();

    });
});