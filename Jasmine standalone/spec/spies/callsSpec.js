describe("Teste do objeto Spy com calls", function(){

    var Calculadora = {
        somar: function(n1, n2){
            return n1 + n2;
        },

        subtrair: function(n1, n2){
            return n1- n2;
        }
    }
    
    beforeAll(function(){
        
        spyOn(Calculadora, "somar").and.returnValue(10);
        spyOn(Calculadora, "subtrair");
    });

    it("Deve demonstrar o uso do calls.any", function(){

        Calculadora.somar(1, 1);
        expect(Calculadora.somar.calls.any()).toBeTruthy();
    });

    it("Deve demonstrar o uso do calls.count", function(){
        
        Calculadora.somar(1, 3);
        expect(Calculadora.somar.calls.count()).toEqual(2);
    });

    it("Deve demonstrar o uso do calls.argsFor", function(){

        expect(Calculadora.somar.calls.argsFor(0)).toEqual([1, 1]);
        expect(Calculadora.somar.calls.argsFor(1)).toEqual([1, 3]);

    });

    it("Deve demonstrar o uso do calls.allArgs", function(){

        expect(Calculadora.somar.calls.allArgs())
        .toEqual([[1, 1], [1, 3]]);
    });

    // uso do calls.all
    // it("Deve demonstrar o uso do calls.all", function(){

    //     var retorno = Calculadora.somar.calls.all();

    //     expect(retorno[1].object).toEqual(Calculadora);
    //     expect(retorno[1].args).toEqual([1, 3]);
    //     expect(retorno[1].returnValue).toEqual(10);
    // });

    it("Deve demonstrar o uso do calls.mostRecent", function(){

        var retorno = Calculadora.somar.calls.mostRecent();

        expect(retorno.object).toEqual(Calculadora);
        expect(retorno.args).toEqual([1, 3]);
        expect(retorno.returnValue).toEqual(10);
    });

    it("Deve demonstrar o uso do calls.first", function(){

        var retorno2 = Calculadora.somar.calls.first();

        expect(retorno2.object).toEqual(Calculadora);
        expect(retorno2.args).toEqual([1, 1]);
        expect(retorno2.returnValue).toEqual(10);
    });

    it("Deve demonstrar o uso do calls.reset", function(){

        expect(Calculadora.somar.calls.any()).toBeTruthy();
        
        Calculadora.somar.calls.reset();

        expect(Calculadora.somar.calls.any()).toBeFalsy();
    });
});