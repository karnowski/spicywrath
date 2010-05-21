var SpicyWrath = {
  spicycode: "chad",
  fireImageUrl: "http://fc09.deviantart.com/fs9/i/2006/061/f/7/animated_fire_by_darkmoon3636.gif",  
  
  setupCss: function(){
    $("head").append('\
      <style type="text/css" media="screen">\
        .spicywrath {font-weight: bold; }\
        .spicywrath span { padding: 0px 5px 0px 5px; }\
      </style>\
    ');
  },
  
  handleIncomingMessage: function(event){
    if(!this.isSpicyEvent(event)) { return true }
    if(!this.isUpperCase(event.content)) { return true }
    
    Talker.insertMessage(event, "something");
    return false;
  },
  
  isUpperCase: function(string){
    return string.toUpperCase() == string;
  },
  
  isSpicyEvent: function(event){
    return event.user.name == this.spicycode;
  },
  
  spiceUpMessage: function(message){
    var fireImage = '<img src="' + SpicyWrath.fireImageUrl + '"/>';
    return '<div class="spicywrath">' + fireImage + '<span>' + message + '</span>'+ fireImage + '</div>';
  }
};