// O uso é desencorajado devido ao aumento da complexidade do código

describe("Suite externa", function(){

    var contador = 0;

    beforeEach(function(){
        contador++
    });

    it("Deve possuir valor 1 para o contador", function(){
        expect(contador).toEqual(1);
    });
    
     
    describe("Suite interna", function(){

        var contadorInterno = 1;

        beforeEach(function(){
            contadorInterno++;
        });
        // O beforeEach da suite externa também é chadado 
        it("Deve validar os valores dos contadores", function(){
            expect(contadorInterno).toEqual(2);
            expect(contador).toEqual(2);
        });
    });
});