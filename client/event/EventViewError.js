Template.EventViewError.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "events.list.error",
      ...arguments,
      function (error, result) {
        Session.set('eventsListError', result);
      }
    );
  },1000);
};

Template.EventViewError.helpers({
  // get the list of events
  events: function() {
    return Session.get('eventsListError');
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

// router
FlowRouter.route('/sensors/error', {
  name: 'eventsError',
  parent: 'dashboard',
  title: 'Sensors Error',
  action: function() {
    BlazeLayout.render('MainLayout', {main: 'EventViewError'});
  },
});
