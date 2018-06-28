describe("Teste do toThrowError", function(){
    
    it("Deve demonstrar o uso do matcher toThrowError", function(){

        var multiplicacao = function(n1, n2){
            if(n1 <= 0 || n2 <= 0){
                throw new TypeError("Os numeros devem ser maior que 0");
            }
            return n1 * n2;
        }

        //Valida apenas que foi lançado um erro, sem especificá-lo
        expect(function(){ multiplicacao(0, 0) }).toThrowError();

        //Valida o conteúdo do erro que foi lançado
        expect(function(){ multiplicacao(0, 0) })
        .toThrowError("Os numeros devem ser maior que 0");

        //Valida, com expressão regular, parte do conteudo do erro
        expect(function(){ multiplicacao(0, 0) }).toThrowError(/maior que 0/);

        //Valida o tipo do erro lançado
        expect(function(){ multiplicacao(0, 0) }).toThrowError(TypeError);

        //Aceita mais de uma validação de erro
        expect(function(){ multiplicacao(0, 0) })
        .toThrowError(TypeError, "Os numeros devem ser maior que 0" );

        //Valida a função sem erro
        expect(function(){ multiplicacao(2, 4) }).not.toThrowError();



    });
});