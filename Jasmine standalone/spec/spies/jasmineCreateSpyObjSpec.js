describe("Teste do jasmine.createSpyObj", function(){

    var Calculadora;

    beforeAll(function(){

        Calculadora = jasmine.createSpyObj("Calculadora", 
        ["somar", "subtrair"]);

        Calculadora.somar.and.returnValue(5);

    });

    it("Deve demonstrar o uso do jasmine.createSpyObj", function(){

        var retorno = Calculadora.somar(1, 2);

        expect(Calculadora.somar).toHaveBeenCalled();
        expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);
        expect(retorno).toEqual(5);
    });
});