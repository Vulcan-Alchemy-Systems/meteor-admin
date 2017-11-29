Template.LocationList.onCreated(function() {
  var self = this;

  // reset all sensor states
  Session.set('sensorId', null);
  Session.set('viewSensor', false);
  Session.set('editSensor', false);

  // subscribe
  self.autorun(function() {
    self.subscribe("location");
  });
});

// events
Template.LocationList.events({
  // new clicked
  'click .new-location': function() {
    Session.set('newLocation', true);
  },
  // new-location-cancel
  'click .new-location-cancel': function() {
    Session.set('newLocation', false);
  },

});

// helpers
Template.LocationList.helpers({
  // location lists
  locationList: function() {
    return Location.find();
  },
});
