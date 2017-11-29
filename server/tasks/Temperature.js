Meteor.publish("temperature", function() {
  return Temperature.find();
});

Meteor.publish("singleTemperature", function(id) {
  return Temperature.find({_id: id});
});
