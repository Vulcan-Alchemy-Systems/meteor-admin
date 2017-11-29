Meteor.publish("singleEvent", function(topic) {
  return Events.find({topic: topic});
});
