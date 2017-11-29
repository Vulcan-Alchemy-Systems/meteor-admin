Template.EventCount.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "events.count",
      ...arguments,
      function (error, result) {
        console.log(result);
        Session.set('eventCount', result);
      }
    );
  },1000);
};

Template.EventCount.helpers({
  eventsCount: function() {
    return Session.get('eventCount');
  },
});
