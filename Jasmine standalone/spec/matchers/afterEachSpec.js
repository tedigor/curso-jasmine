describe("Teste do afterEach", function(){
    var contador = 0;

    beforeEach(function(){
        contador++;
    });

    // Realiza função após cada teste
    afterEach(function(){
        contador = 0;
    });

    it("Deve garantir que o contador terá o valor de 1", function(){
        expect(contador).toEqual(1);
    });

    it("Deve garantir que o contador ainda terá o valor 1", function(){
        expect(contador).toEqual(1);
    });
});