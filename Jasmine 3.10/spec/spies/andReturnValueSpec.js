describe("Teste do objeto Spy com and.returnValue", function(){

    var Calculadora = {
        somar: function(n1, n2){
            return n1 + n2;
        },

        subtrair: function(n1, n2){
            return n1- n2;
        }
    }

    //Teste com o ReturnValue
    
    // beforeAll(function(){
        
    //     spyOn(Calculadora, "somar").and.returnValue(10);
    //     spyOn(Calculadora, "subtrair");
    // });

    // it("Deve retornar sempre 10 para o método somar", function(){

    //     expect(Calculadora.somar(1, 2)).toEqual(10);
    // });

    //Teste com ReturnValues
    
    beforeAll(function(){
        spyOn(Calculadora, "somar").and.returnValues(1,10);
        spyOn(Calculadora, "subtrair");
    });

    it("Deve retornar valores distintos para o método somar", function(){

        expect(Calculadora.somar(23, 433)).toEqual(1);
        expect(Calculadora.somar(232, 32)).toEqual(10);
        expect(Calculadora.somar(13, 3333)).toBeUndefined();
    });
});