

FlowRouter.route('/', {
  name: 'dashboard',
  title: 'Dashboard',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Home'});
  },
});

FlowRouter.route('/about', {
  name: 'about',
  parent: 'dashboard',
  title: 'About Us',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'About'});
  },
});

// layouts
FlowRouter.route('/pages/layout/top-nav', {
  name: 'topNav',
  parent: 'dashboard',
  title: 'Top Nav',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'TopNav'});
  },
});

FlowRouter.route('/pages/layout/boxed', {
  name: 'boxed',
  parent: 'dashboard',
  title: 'Boxed',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Boxed'});
  },
});

FlowRouter.route('/pages/layout/fixed', {
  name: 'fixed',
  parent: 'dashboard',
  title: 'Fixed',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Fixed'});
  },
});

FlowRouter.route('/pages/layout/collapsed-sidebar', {
  name: 'sidebarCollapsed',
  parent: 'dashboard',
  title: 'Sidebar Collapsed',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'SidebarCollapsed'});
  },
});

// widgets
FlowRouter.route('/pages/widgets', {
  name: 'widgets',
  parent: 'dashboard',
  title: 'Widgets',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Widgets'});
  },
});

// charts
FlowRouter.route('/pages/charts/chartjs', {
  name: 'chartjs',
  parent: 'dashboard',
  title: 'Chartjs',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Chartjs'});
  },
});

FlowRouter.route('/pages/charts/morris', {
  name: 'morris',
  parent: 'dashboard',
  title: 'Morris',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Morris'});
  },
});

FlowRouter.route('/pages/charts/flot', {
  name: 'flot',
  parent: 'dashboard',
  title: 'Flot',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Flot'});
  },
});

FlowRouter.route('/pages/charts/inline', {
  name: 'inline',
  parent: 'dashboard',
  title: 'Inline',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Inline'});
  },
});

// ui
FlowRouter.route('/pages/UI/general', {
  name: 'general',
  parent: 'dashboard',
  title: 'General',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'General'});
  },
});

FlowRouter.route('/pages/UI/icons', {
  name: 'icons',
  parent: 'dashboard',
  title: 'Icons',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Icons'});
  },
});

FlowRouter.route('/pages/UI/buttons', {
  name: 'buttons',
  parent: 'dashboard',
  title: 'Buttons',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Buttons'});
  },
});

FlowRouter.route('/pages/UI/sliders', {
  name: 'sliders',
  parent: 'dashboard',
  title: 'Sliders',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Sliders'});
  },
});

FlowRouter.route('/pages/UI/timeline', {
  name: 'timeline',
  parent: 'dashboard',
  title: 'Timeline',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Timeline'});
  },
});

FlowRouter.route('/pages/UI/modals', {
  name: 'modals',
  parent: 'dashboard',
  title: 'Modals',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Modals'});
  },
});

// forms
FlowRouter.route('/pages/forms/general', {
  name: 'formsGeneral',
  parent: 'dashboard',
  title: 'General',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'FormsGeneral'});
  },
});

FlowRouter.route('/pages/forms/advanced', {
  name: 'advancedGeneral',
  parent: 'dashboard',
  title: 'Advanced',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'AdvancedGeneral'});
  },
});

FlowRouter.route('/pages/forms/editors', {
  name: 'editors',
  parent: 'dashboard',
  title: 'Editors',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Editors'});
  },
});

// tables
FlowRouter.route('/pages/tables/simple', {
  name: 'simpleTable',
  parent: 'dashboard',
  title: 'Simple Table',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'SimpleTable'});
  },
});

FlowRouter.route('/pages/tables/data', {
  name: 'dataTable',
  parent: 'dashboard',
  title: 'Data Table',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'DataTable'});
  },
});

// calendar
FlowRouter.route('/pages/calendar', {
  name: 'calendar',
  parent: 'dashboard',
  title: 'Calendar',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Calendar'});
  },
});

// mailbox
FlowRouter.route('/pages/mailbox/mailbox', {
  name: 'mailbox',
  parent: 'dashboard',
  title: 'Mailbox',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Mailbox'});
  },
});

// user
FlowRouter.route('/sign-in', {
  name: 'signIn',
  parent: 'dashboard',
  title: 'Sign In',
  action: function() {
    BlazeLayout.render('SignInLayout', {main: 'SignIn'});
  },
});

FlowRouter.route('/sign-up', {
  name: 'signUp',
  parent: 'dashboard',
  title: 'Sign Up',
  action: function() {
    BlazeLayout.render('SignInLayout', {main: 'SignUp'});
  },
});

FlowRouter.route('/sign-out', {
  name: 'signOut',
  parent: 'dashboard',
  title: 'Sign Out',
  action: function() {
    BlazeLayout.render('SignInLayout', {main: 'SignOut'});
  },
});

FlowRouter.route('/profile', {
  name: 'profile',
  parent: 'dashboard',
  title: 'My Profile',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: 'Profile'});
  },
});


// errors
FlowRouter.notFound = {
  name: 'notFound',
  parent: 'dashboard',
  title: 'Page Not Found',
  action: function() {
    BlazeLayout.render('HomeLayout', {main: "PageNotFound"});
  }
};
