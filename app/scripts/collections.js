StudentsCollection = Backbone.Collection.extend({
  initialize: function(){
    console.log('new collection created!')

    this.on('add', function(item){
      new GridItemView( {model: item} )
    })
  },

  model: Student,

  url: 'http://0.0.0.0:3000/collections/students'
})
