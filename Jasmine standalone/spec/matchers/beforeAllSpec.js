describe("Teste do beforeAll", function(){
    
    var contador = 0;

    //Função chamada apenas 1 vez, antes de todos os testes
    beforeAll(function(){
        contador = 10;
    });

    beforeEach(function(){
        contador++;
    });

    it("Deve garantir que o contador terá valor de 11", function(){

        expect(contador).toEqual(11);
    });

    it("Deve garantir que o contador terá valor de 12", function(){
        
        expect(contador).toEqual(12);
    });
});