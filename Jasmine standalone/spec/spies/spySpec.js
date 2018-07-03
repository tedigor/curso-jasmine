
describe("Teste do objeto Spy", function(){

    var Calculadora = {
        somar: function(n1, n2){
            return n1 + n2;
        }
    };

    beforeAll(function(){
        
        spyOn(Calculadora, "somar");
    });
    
    //O spyOn no primeiro momento retorna um objeto undefined
    // it("Deve possuir o método somar não definido", function(){
    //     expect(Calculadora.somar(1, 1)).toBeUndefined();
    // });

    // it("Deve chamar o método somar ao menos uma vez", function(){

    //     Calculadora.somar(1,1);
    //     expect(Calculadora.somar).toHaveBeenCalled();

    // });

    it("Deve chamar o método somar duas vezes", function(){

        Calculadora.somar(1,1);
        Calculadora.somar(1,2);

        expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });

    it("Deve chamar o método somar com parâmetros válidos", function(){

        expect(Calculadora.somar).toHaveBeenCalledWith(1, 1);
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);

    });

});