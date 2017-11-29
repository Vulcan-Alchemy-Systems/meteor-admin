Template.EventViewWarning.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "events.list.warning",
      ...arguments,
      function (error, result) {
        Session.set('eventsListWarning', result);
      }
    );
  },1000);
};

Template.EventViewWarning.helpers({
  // get the list of events
  events: function() {
    return Session.get('eventsListWarning');
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
FlowRouter.route('/sensors/warning', {
  name: 'eventsWarning',
  parent: 'dashboard',
  title: 'Sensors Warning',
  action: function() {
    BlazeLayout.render('MainLayout', {main: 'EventViewWarning'});
  },
});
