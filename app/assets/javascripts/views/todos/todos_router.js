SpaApp.Routers.TodosRouter = Backbone.Router.extend({

  routes: {
    "todos/:id/descr" : "description"
  },

  description: function(event) {
    // Linked to TodosDescription (specific view) below
    var x = $.ajax({
      type: 'get',
      url: '/todos/' + event + '.json'
    }).done(function (data) {
      var view = new SpaApp.Views.TodosDescription({model: data});
      $('#description').remove();
      $('#container').append(view.render().el);
    });
    // this.view = new SpaApp.Views.TodosDescription(event);
    // $('#container').html(this.view.render().el);
    // this.navigate('#todos/' + id + '/descr');
    // new SpaApp.Views.TodosDescription({model:this})
  }
});