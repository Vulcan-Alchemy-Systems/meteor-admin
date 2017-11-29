Template.EventCountError.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "events.count.error",
      ...arguments,
      function (error, result) {
        Session.set('eventCountError', result);
      }
    );
  },1000);
};

Template.EventCountError.helpers({
  eventsCount: function() {
    return Session.get('eventCountError');
  },
});
