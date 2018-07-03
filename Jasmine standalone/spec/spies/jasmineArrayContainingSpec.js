describe("Teste do jasmine.arrayContaining", function() {

    var numeros;

    beforeEach(function() {
        numeros = [1, 3, 4, 5, 6];
    });

    it("Deve demonstrar o uso do jasmine.arrayContaining", function() {

        expect(numeros).toEqual(jasmine.arrayContaining([1, 3, 5]));
        expect(numeros).toEqual(jasmine.arrayContaining([4, 6]));
        expect(numeros).not.toEqual(jasmine.arrayContaining([2, 10]));
    });
});