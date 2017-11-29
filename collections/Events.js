Events = new Meteor.Collection("events");

Events.allow({
  insert: function() {
    return true;
  }
});

Meteor.methods({
  'events.reset'() {
    Events.remove({});
  },
  'events.list'() {
    return Events.find({}).fetch();
  },
  'events.list.ok'() {
    return Events.find({message: "ok"}).fetch();
  },
  'events.list.warning'() {
    return Events.find({message: "warning"}).fetch();
  },
  'events.list.error'() {
    return Events.find({message: "emergency"}).fetch();
  },
  'events.count'() {
    return Events.find().count();
  },
  'events.count.ok'() {
    return Events.find({message: "ok"}).count();
  },
  'events.count.warning'() {
    return Events.find({message: "warning"}).count();
  },
  'events.count.error'() {
    return Events.find({message: "emergency"}).count();
  }
});
