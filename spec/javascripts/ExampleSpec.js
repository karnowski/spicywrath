describe('SpicyWrath', function (){

  describe("setupCss", function(){
    it("creates a style tag in the head tag with 'spicywrath' CSS", function(){
      SpicyWrath.setupCss();
      var css = $("head style").last().text();
      expect(css).toMatch(/spicywrath/);
    });
  });

  describe("handleIncomingMessage", function(){
    describe("when the incoming message is NOT from Chad", function(){
      it("returns true if the incoming message is in all capital letters", function(){
        var event = { user: { name: "larry"}, content: "I AM SHOUTING IN ALL CAPITAL LETTERS!" };
        expect(SpicyWrath.handleIncomingMessage(event)).toEqual(true);
      });

      it("returns true if the incoming message is NOT in all capital letters", function(){
        var event = { user: { name: "larry"}, content: "This message is NOT in all capital letters." };
        expect(SpicyWrath.handleIncomingMessage(event)).toEqual(true);
      });
    });
    
    describe("when the incoming message is from Chad", function(){
      it("returns false if the incoming message is in all capital letters", function(){
        var event = { user: { name: "chad"}, content: "I AM SHOUTING IN ALL CAPITAL LETTERS!" };
        expect(SpicyWrath.handleIncomingMessage(event)).toEqual(false);
      });
    
      it("returns true if the incoming message is NOT in all capital letters", function(){
        var event = { user: { name: "chad"}, content: "This message is NOT in all capital letters." };
        expect(SpicyWrath.handleIncomingMessage(event)).toEqual(true);
      });
    });
  });
});