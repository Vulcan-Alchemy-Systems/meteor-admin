import {FlowRouter} from 'meteor/kadira:flow-router';

Template.SignIn.events({
    'submit form': function(event){
        event.preventDefault();

        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        Meteor.loginWithPassword(email, password, function(error){
          if(error){
            console.log(error.reason);
            $('#alert').html('<div class="alert alert-danger"><p>' + error.reason + '</p></div>');
          } else {
            FlowRouter.go("dashboard");
          }
        });
    }
});
