describe("Teste do toBeLessThan", function(){
    it("Deve demonstrar o uso do matcher toBeLessThan", function(){
       const PI = 3.14159

       expect(3).toBeLessThan(PI);
       
       // O matcher converte string em valor numerico
       expect("3").toBeLessThan(PI);
       
       expect(3.5).not.toBeLessThan(PI);
    });
});