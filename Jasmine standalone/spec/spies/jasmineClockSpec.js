describe("Teste do jasmine.clock", function() {

    var dobro;

    beforeEach(function(){

        jasmine.clock().install();
        dobro = jasmine.createSpy("dobro");
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("Deve demonstrar o uso do jasmine.clock com o setTimeout", function(){

        setTimeout(function(){ dobro(26); }, 1000);
        jasmine.clock().tick(1000);
        expect(dobro).toHaveBeenCalled();
    });

    it("Deve demonstrar o uso do jasmine.clock com o setInterval", function(){
        setInterval(function(){ dobro(14); }, 500);
        jasmine.clock().tick(500);
        expect(dobro).toHaveBeenCalled();
    });
});