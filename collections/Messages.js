Messages = new Meteor.Collection("messages");

Messages.allow({
  insert: function() {
    return true;
  }
});

Meteor.methods({
  'messages.reset'() {
    Messages.remove({});
  },
  'messages.list'() {
    return Messages.find({}).fetch();
  },
  'messages.count'() {
    return Messages.find().count();
  }
});
