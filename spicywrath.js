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
    if(event.user.name != this.spicycode) { return true }
    return event.content.toUpperCase() != event.content;
  }
};