describe("Teste do toBeTruthy", function(){
    it("Deve validar o uso do matcher toBeTruthy", function(){
        var n1 = 10;
        var n2 = null;
        var n3 = '';
        var n4 = undefined;
        var n5 = NaN;
        var n6 = 0;
        var n7;

        expect(n1).toBeTruthy();
        expect("Teste").toBeTruthy();
        expect(true).toBeTruthy();

        
        expect(n2).not.toBeTruthy();
        expect(n3).not.toBeTruthy();
        expect(n4).not.toBeTruthy();
        expect(n5).not.toBeTruthy();
        expect(n6).not.toBeTruthy();
        expect(n7).not.toBeTruthy();
        expect(false).not.toBeTruthy();
    });
});