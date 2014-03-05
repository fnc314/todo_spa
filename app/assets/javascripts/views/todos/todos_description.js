SpaApp.Views.TodosDescription = Backbone.View.extend({

  id: 'description',

  className: 'css-attr',

  template: HandlebarsTemplates['todos/description'],

  render: function() {
    $(this.el).append(this.template(this.model));

    return this;
  },

  // infoDiv: function() {
  //   var _this = this;
  //   $.ajax({
  //     context: this, 
  //     type: 'get',
  //     url: '/todos/' + this.model.id + '.json'
  //   }).done(function (event) {
  //     console.log(this);
  //   });
  // }

});