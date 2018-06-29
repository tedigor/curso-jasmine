describe("Teste do toBeGreaterThan", function(){
    it("Deve demonstrar o uso do matcher toBeGreaterThan", function(){
        const PI = 3.14159

        
        expect(5).toBeGreaterThan(PI);
        
        // O matcher converte string em valor numerico
        expect("5").toBeGreaterThan(PI);

        expect(1).not.toBeGreaterThan(PI);
    });
});