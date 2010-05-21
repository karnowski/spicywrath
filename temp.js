var SpicyWrath = {
  debug: function(arg){
    if(console != undefined) { console.debug(arg); }
  }
};

plugin.onMessageReceived = function(event) {
  SpicyWrath.debug(event);
  Talker.insertMessage(event, "this message was trumped by you-know-who!")
  return false;
};