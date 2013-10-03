GridItemView = Backbone.View.extend({
  
  template: _.template( $('#grid-template').text() ),

  tagName: 'a',

  className: 'item-grid-unit',

  initialize: function(){
    $('.container').append(this.el)
    this.render()
  },

  render: function(){
    this.$el.attr('href', "#/students/"+ this.model.get('_id') )
    this.$el.append( this.template({item: this.model }) )
  }
}),

FullItemView = Backbone.View.extend({
  
  template: _.template( $('#full-template').text() ),

  className: 'item-full',


  initialize: function(){
    $('.container').append(this.el)
    this.render()
  },

  render: function(){
    console.log(this.model)
    this.$el.append( this.template({item: this.model }) )

  }, 


}),

AddStudentView = Backbone.View.extend({

  template: _.template( $('#add-student-template').html() ),

  className: 'add-student',

  tagName: 'div',

  initialize: function(){
    $('.container').append(this.el)
    this.render()
  },

  render: function() {
    this.$el.append( this.template() )
  },



})

