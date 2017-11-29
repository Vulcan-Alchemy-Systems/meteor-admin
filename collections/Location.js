Location = new Mongo.Collection("location");

// debug
SimpleSchema.debug = true;

// rules
Location.allow({
  insert: function (userId, doc) {
    return !!userId;
  },
  update: function (userId, doc) {
    return !!userId;
  },
  remove: function (userId, doc) {
    return !!userId;
  },
});

// schema
LocationSchema = new SimpleSchema({
  // Name
  name: {
    type: String,
    label: "Name"
  },
  // Street
  street: {
    type: String,
    label: "Street"
  },
  // City
  city: {
    type: String,
    label: "City"
  },
  // State
  state: {
    type: String,
    label: "State"
  },
  // Zipcode
  zipcode: {
    type: String,
    label: "Zipcode"
  },
  // Status
  status: {
    type: String,
    label: "Status",
    autoValue: function () {
      return "Active";
    },
    autoform: {
      type: "hidden",
    }
  },
  // created
  created: {
    type: Date,
    label: "Created",
    autoValue: function () {
      return new Date();
    },
    autoform: {
      type: "hidden",
    }
  },
  createdBy: {
    type: String,
    label: "created By",
    autoValue: function () {
      return this.userId
    },
    autoform: {
      type: "hidden",
    }
  },
});

// methods
Meteor.methods({

});

// attach
Location.attachSchema( LocationSchema );
