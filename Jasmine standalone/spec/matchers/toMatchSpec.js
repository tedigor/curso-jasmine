describe("Teste do toMatch", function(){
    it("Deve validar o uso do toMatch", function(){
        var texto = "Testes em Jasmine";

        expect(texto).toMatch("Jasmine");
        expect(texto).toMatch(/jasmine/i);
        expect("58401-705").toMatch(/^\d{5}-\d{3}$/);
    });
});