Template.EventCountOk.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "events.count.ok",
      ...arguments,
      function (error, result) {
        Session.set('eventCountOk', result);
      }
    );
  },1000);
};

Template.EventCountOk.helpers({
  eventsCount: function() {
    return Session.get('eventCountOk');
  },
});
