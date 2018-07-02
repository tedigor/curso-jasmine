describe("Teste do objeto Spy com and.callThrough", function(){

    var Calculadora = {
        somar: function(n1, n2){
            return n1 + n2;
        },

        subtrair: function(n1, n2){
            return n1 - n2;
        }
    };

    beforeAll(function(){
        
        spyOn(Calculadora, "somar").and.callThrough();
        spyOn(Calculadora, "subtrair");
    });

    it("Deve executar o método original", function(){

        expect(Calculadora.somar(1, 1)).toEqual(2);
        expect(Calculadora.subtrair(3, 2)).toBeUndefined();
    });

});