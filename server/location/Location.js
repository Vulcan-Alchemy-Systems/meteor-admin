Meteor.publish("location", function() {
  return Location.find();
});

Meteor.publish("singleLocation", function(id) {
  return Location.find({_id: id});
});
