// on created
Template.Location.onCreated(function() {
  var self = this;

  // subscribe
  self.autorun(function() {
    var id = FlowRouter.getParam('id');
    Session.set('locationId', id);
    self.subscribe("singleLocation", id);
  });
});

// events
Template.Location.events({
  // editLocation
  'click .edit-location': function() {
    Session.set('editLocation', true);
    Session.set('viewSensor', false);
    Session.set('sensorId', null);
  },
  // cancel-edit-location
  'click .cancel-edit-location': function() {
    Session.set('editLocation', false);
    Session.set('newSensor', false);
    Session.set('viewSensor', false);
    Session.set('sensorId', null);
  },
  // form submit
  'submit #updateLocationForm': function () {
    Session.set('editLocation', false);
    FlashMessages.sendSuccess("Location was updated.");
  }
});

// helpers
Template.Location.helpers({
  location: ()=> {
    var id = FlowRouter.getParam('id');
    return Location.findOne({_id: id});
  }
});

// router
FlowRouter.route('/location/:id', {
  name: 'location',
  parent: 'dashboard',
  title: 'Locations',
  action: function() {
    BlazeLayout.render('MainLayout', {main: 'Location'});
  },
});
