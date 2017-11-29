Template.EventCountWarning.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "events.count.warning",
      ...arguments,
      function (error, result) {
        Session.set('eventCountWarning', result);
      }
    );
  },1000);
};

Template.EventCountWarning.helpers({
  eventsCount: function() {
    return Session.get('eventCountWarning');
  },
});
