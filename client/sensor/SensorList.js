Template.SensorList.onCreated(function() {
  var self = this;

  // subscribe
  self.autorun(function() {
    self.subscribe("sensor");
  });
});

// events
Template.SensorList.events({
  // new-sensor
  'click .new-sensor': function() {
    Session.set('newSensor', true);
    Session.set('editLocation', false);
    Session.set('viewSensor', false);
    Session.set('sensorId', null);
    Session.set('editSensor', false);
  },
  'click .view-sensor': function() {
    Session.set('newSensor', false);
    Session.set('editLocation', false);
    Session.set('viewSensor', true);
    Session.set('sensorId', this._id);
    Session.set('editSensor', false);
  }
});

// helpers
Template.SensorList.helpers({
  sensorList: function(id) {
    return Sensor.find({locationId: id});
  },
  sensorTypeIcon: function(type) {
    switch(type) {
      case 'Temperature':
        return 'fa-thermometer-full';
        break;
      case 'Light':
        return 'fa-lightbulb-o';
        break;
      case 'Video':
        return 'fa-video-camera';
        break;
      case 'Battery':
        return 'fa-battery-full';
        break;
    }
  }
});
