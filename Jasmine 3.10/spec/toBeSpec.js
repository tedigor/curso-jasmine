describe("Comparador toBe", function(){
    it("deve validar o uso do toBe", function(){
        var obj1 = { valor: true };
        var obj2 = { valor:true };            
        
        expect(true).toBe(true);
        expect("true").toBe("true");
        expect(obj1).not.toBe(obj2);
    });
});