describe("Teste do toBeUndefined", function(){
    it("Deve validar o uso do matcher toBeUndefined", function(){
        var n1;
        var n2 = undefined;
        var n3 = false;

        expect(n1).toBeUndefined();
        expect(n2).toBeUndefined();

        expect(n3).not.toBeUndefined();
    });
});