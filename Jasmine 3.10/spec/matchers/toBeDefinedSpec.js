describe("Teste do toBeDefined", function(){
    it("Deve validar o uso do matcher toBeDefined", function(){
        var n1 = 10;
        var n2;
        var n3 = undefined;

        expect(n1).toBeDefined();
        expect(null).toBeDefined();
        expect(NaN).toBeDefined();
        
        // O Uso do "not.toBeDefined()" não deve ser feito, preferir o "toBeUndefined()"
        expect(n2).not.toBeDefined();
        expect(n3).not.toBeDefined();
    });
});