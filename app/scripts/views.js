GridItemView = Backbone.View.extend({
  
  template: _.template( $('#grid-template').text() ),


  className: 'item-grid-unit',

  events: {
    "click .delete" : "destroy",
    
  },

  initialize: function(){
    $('.container').append(this.el)
    this.render()
  },

  render: function(){
    this.$el.attr('href', "#/students/"+ this.model.get('_id') )
    this.$el.append( this.template({item: this.model }) )
  },

  destroy: function(){
    console.log('deleting a student!');
    // this.model.destroy()
    this.remove()
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

  initialize: function(){
    $('.container').append(this.el)
    this.render()
  },

  render: function() {
    this.$el.append( this.template() )
  },



})

