// events
Template.NewSensor.events({
  // cancel-new-sensor
  'click .cancel-new-sensor': function() {
    Session.set('newSensor', false);
    Session.set('editLocation', false);
    Session.set('viewSensor', false);
    Session.set('editSensor', false);
  },
  // submit
  'submit': function() {
    Session.set('newSensor', false);
    Session.set('editLocation', false);
  }
});

Template.NewSensor.helpers({
  locationId: function() {
        return { locationId: Session.get('locationId') };
    }
});
