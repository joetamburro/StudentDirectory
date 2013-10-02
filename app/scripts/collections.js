StudentsCollection = Backbone.Collection.extend({
  initialize: function(){
    console.log('new collection created!')
  },

  model: Student,

  url: 'http://0.0.0.0:3000/collections/students'
})
