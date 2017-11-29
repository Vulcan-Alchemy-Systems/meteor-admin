Template.SensorDetails.onCreated(function() {
  var self = this;

  self.autorun(function() {
    self.subscribe("singleSensor");
  });
});

// events
Template.SensorDetails.events({
  'click .edit-sensor': function() {
      Session.set('editSensor', true);
      Session.set('viewSensor', false);
  },
  // delete
  'click .delete-sensor': function() {
    var sensorId = Session.get('sensorId');
    Meteor.call('deleteSensor', sensorId);
    Session.set('sensorId', false);
    Session.set('viewSensor', false);
    Session.set('editSensor', false);
    FlashMessages.sendSuccess("Sensor was deleted.");
  },
  // cancel edit
  'click .cancel-edit-sensor': function() {
    Session.set('editSensor', false);
    Session.set('viewSensor', true);
  },
  // submit
  'submit': function() {
    Session.set('editSensor', false);
    Session.set('viewSensor', true);
    FlashMessages.sendSuccess("Sensor was updated.");
  }
});

// helpers
Template.SensorDetails.helpers({
  singleSensor: function() {
    var sensorId = Session.get('sensorId');
    console.log(sensorId);
    return Sensor.findOne({_id: sensorId});
  },
});
