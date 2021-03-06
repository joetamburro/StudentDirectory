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
  },



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

EditStudentView = Backbone.View.extend({

  template: _.template( $('#edit-student-template').text() ),

  className: 'edit-student',

  events: {
    "click .save-edit-button" : "saveStudent", 
  },


  initialize: function(){
    $('.container').append(this.el)
    this.render()
  },

  render: function(){
    console.log('hey man where you at')
    this.$el.append(this.template({item: this.model}))
  },

  saveStudent: function(){
    this.model.set({
      "firstName": this.$el.find('#firstName-input').val(),
      "lastName": this.$el.find('#lastName-input').val(),
      "phone": this.$el.find('#phone-input').val(),
      "email": this.$el.find('#email-input').val(),
      "github": this.$el.find('#github-input').val()
    })
    
    if(confirm('Are you sure you wanna save?')) {
      this.model.save()
    } else {
      console.log('didnt save')
    }
    
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
