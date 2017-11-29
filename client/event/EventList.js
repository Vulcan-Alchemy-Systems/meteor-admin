
Template.EventList.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "events.list",
      ...arguments,
      function (error, result) {
        Session.set('events', result);
      }
    );
  },1000);
};

Template.EventList.helpers({
  // get the list of events
  events: function() {
    return Session.get('events');
  },
  // sets the background
  eventStatus: function(message) {
    if(message == "emergency") {
      return "bg-red";
    } else if(message == "warning") {
        return "bg-yellow";
    } else {
      return "bg-green";
    }
  },
  // date format
  dateFormat: function(date) {
    return moment(date).format(Meteor.settings.public.longDate);
  }
});

Template.EventList.events({
  'click #reset'(){
    Meteor.call("events.reset");
  }
});
