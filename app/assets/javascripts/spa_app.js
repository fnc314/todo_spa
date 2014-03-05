window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // Holds all that needs initializing
    SpaApp.router = new SpaApp.Routers.TodosRouter();
    Backbone.history.start({pushState: true});
    // this code obviously belongs in a model or collection
    // but, we're not talking about models or collections just yet :)
    $.get("/todos.json").done(function (data) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosIndex({ collection: data });
      $('#container').html(view.render().el);
    });
  }
};

$(document).ready(function(){
  SpaApp.initialize();
});
