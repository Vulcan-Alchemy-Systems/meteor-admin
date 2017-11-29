Template.MessageList.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "messages.list",
      ...arguments,
      function (error, result) {
        Session.set('messages',result);
      }
    );
  },1000);
};

Template.MessageList.helpers({
  messages: function() {
    return Session.get('messages');
  },
  messageCount: function() {
    return Meteor.call('messages.count');
  }
});

Template.MessageList.events({
  'click #reset'(){
    Meteor.call("messages.reset");
  }
});
