Template.EventView.onCreated(function() {
  var self = this;

  // subscribe
  self.autorun(function() {
    self.subscribe("singleEvent");
  });
});

// helpers
Template.EventView.helpers({
  // get the list of events
  event: function(){
    var id = FlowRouter.getParam('id');
    return Events.findOne({_id: id});
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

// events
Template.EventView.events({

});

// router
FlowRouter.route('/sensor/view/:id', {
  name: 'eventView',
  parent: 'dashboard',
  title: 'View Sensor',
  action: function() {
    BlazeLayout.render('MainLayout', {main: 'EventView'});
  },
});
