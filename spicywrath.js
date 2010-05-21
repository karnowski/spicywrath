var SpicyWrath = {
  spicycode: "chad",
  
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
    return !this.isUpperCase(event.content);
  },
  
  isUpperCase: function(string){
    return string.toUpperCase() == string;
  },
  
  isSpicyEvent: function(event){
    return event.user.name == this.spicycode;
  }
};