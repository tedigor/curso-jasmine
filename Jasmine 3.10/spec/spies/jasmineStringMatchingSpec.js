describe("Teste do jasmine.stringMatching", function(){

    var exibirTexto;

    beforeAll(function(){

        exibirTexto = jasmine.createSpy("exibirTexto");
    });

    it("Deve demonstrar o uso do jasmine.stringMatching", function(){

        exibirTexto("Ted Medeiros");

        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching("Medeiros"));
        expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching(/medeiros/i));
    });
});