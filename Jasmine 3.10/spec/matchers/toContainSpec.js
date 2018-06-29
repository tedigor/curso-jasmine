describe("Teste do toContain", function(){
    it("Deve demonstrar o uso do matcher toContain", function(){
        var texto = "Meu nome é Ted Medeiros";
        var carros = ["celta", "oroch", "onix", "siena"];
        
        //O matcher é case sensitive 
        expect(texto).toContain("Ted");
        expect(texto).not.toContain("Clenildo");
        
        expect(carros).toContain("onix");
        expect(carros).not.toContain("Gol");

    });
});