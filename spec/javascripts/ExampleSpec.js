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
      beforeEach(function(){ 
        this.event = { user: { name: "larry"} };
      });
      
      it("returns true if the incoming message is in all capital letters", function(){
        this.event.content = "I AM SHOUTING IN ALL CAPITAL LETTERS!"
        expect(SpicyWrath.handleIncomingMessage(this.event)).toEqual(true);
      });

      it("returns true if the incoming message is NOT in all capital letters", function(){
        this.event.content = "This message is NOT in all capital letters."
        expect(SpicyWrath.handleIncomingMessage(this.event)).toEqual(true);
      });
    });
    
    describe("when the incoming message is from Chad", function(){
      beforeEach(function(){ 
        this.event = { user: { name: "chad"} };
      });
      
      it("returns false if the incoming message is in all capital letters", function(){
        this.event.content = "I AM SHOUTING IN ALL CAPITAL LETTERS!"
        expect(SpicyWrath.handleIncomingMessage(this.event)).toEqual(false);
      });
    
      it("returns true if the incoming message is NOT in all capital letters", function(){
        this.event.content = "This message is NOT in all capital letters."
        expect(SpicyWrath.handleIncomingMessage(this.event)).toEqual(true);
      });
    });
  });
});