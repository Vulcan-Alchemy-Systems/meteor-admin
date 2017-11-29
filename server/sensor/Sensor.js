Meteor.publish("sensor", function() {
  return Sensor.find();
});

Meteor.publish("singleSensor", function(id) {
  return Sensor.find({_id: id});
});
