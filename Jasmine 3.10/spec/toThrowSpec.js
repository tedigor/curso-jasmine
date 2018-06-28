describe("Teste do toThrow", function(){
    it("Deve demonstrar o uso do matcher toThrow", function(){
        function multiplicar(){
            numero * 10
        };

        function somar(num1, num2){
            return num1 + num2;
        };

        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();
    });
});