describe("teste do jasmine.objectContaining", function() {

    var carro;

    beforeEach(function() {
        carro = {
            'ano': 2018,
            'modelo': 'Celta',
            'marca': 'Chevrolet'
        }
    });

    it("Deve demonstrar o uso do jasmine.objectContaining", function(){

        expect(carro).toEqual(jasmine.objectContaining({'modelo': 'Celta'}));
    });
});