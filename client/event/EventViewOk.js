Template.EventViewOk.rendered = function(){
  Meteor.setInterval(function () {
    Meteor.call(
      "events.list.ok",
      ...arguments,
      function (error, result) {
        Session.set('eventsListOk', result);
      }
    );
  },1000);
};

Template.EventViewOk.helpers({
  // get the list of events
  events: function() {
    return Session.get('eventsListOk');
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
FlowRouter.route('/sensors/ok', {
  name: 'eventsOk',
  parent: 'dashboard',
  title: 'Sensors OK',
  action: function() {
    BlazeLayout.render('MainLayout', {main: 'EventViewOk'});
  },
});
