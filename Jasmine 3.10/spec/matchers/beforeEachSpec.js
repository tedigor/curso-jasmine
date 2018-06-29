
describe("Teste do beforeEach", function(){
    var contador = 0;

    // Executa uma função antes de cada teste
    beforeEach(function(){
        contador++;
    });

    it("Deve incrementar o contador para 1", function(){
        expect(contador).toEqual(1);
    });

    it("Deve incrementar o contador para 2", function(){
        expect(contador).toEqual(2);
    });
});