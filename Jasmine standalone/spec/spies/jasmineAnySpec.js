describe("Testes do jasmine.any", function() {

    var dobro;

    beforeAll(function() {

        dobro = jasmine.createSpy("dobro");
    });

    it("Deve demonstrar o uso do jasmine.any", function() {

        dobro("80");

        expect(dobro).toHaveBeenCalledWith(jasmine.any(String));
    });

    it("Deve demonstrar o uso do jasmine.anything", function(){


        expect(dobro).toHaveBeenCalledWith(jasmine.anything());
    });
});