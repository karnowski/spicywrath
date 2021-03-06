//stub out Talker for our tests
var Talker = { insertMessage: function(){} };

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
      it("returns true if the incoming message is NOT in all capital letters", function(){
        var event = { user: { name: "chad"}, content: "This message is NOT in all capital letters." };
        expect(SpicyWrath.handleIncomingMessage(event)).toEqual(true);
      });
      
      describe("when the incoming message is in all capital letters", function(){
        beforeEach(function(){
          this.event = { user: { name: "chad"}, content: "I AM SHOUTING IN ALL CAPITAL LETTERS!" };
        });
        
        it("returns false", function(){
          expect(SpicyWrath.handleIncomingMessage(this.event)).toEqual(false);
        });
        
        it("tells Talker to insert a 'spicier' version of the message", function(){
          spyOn(Talker, 'insertMessage');
          spyOn(SpicyWrath, 'spiceUpMessage').andReturn("a spicy message");
          SpicyWrath.handleIncomingMessage(this.event);
          expect(Talker.insertMessage).wasCalledWith(this.event, 'a spicy message');
        });
      });
    });
  });
  
  describe("spiceUpMessage", function(){
    it("wraps the given message in very spicy HTML, indeed", function(){
      var msg1 = SpicyWrath.spiceUpMessage("my cool message");
      expect(msg1).toEqual('<div class="spicywrath"><img src="http://fc09.deviantart.com/fs9/i/2006/061/f/7/animated_fire_by_darkmoon3636.gif"/><span>my cool message</span><img src="http://fc09.deviantart.com/fs9/i/2006/061/f/7/animated_fire_by_darkmoon3636.gif"/></div>');
      
      var msg2 = SpicyWrath.spiceUpMessage("my other cool message");
      expect(msg2).toEqual('<div class="spicywrath"><img src="http://fc09.deviantart.com/fs9/i/2006/061/f/7/animated_fire_by_darkmoon3636.gif"/><span>my other cool message</span><img src="http://fc09.deviantart.com/fs9/i/2006/061/f/7/animated_fire_by_darkmoon3636.gif"/></div>');
    });
  });
  
});