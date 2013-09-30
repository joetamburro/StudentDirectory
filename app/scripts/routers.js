AppRouter = Backbone.Router.extend({

  initialize: function(){
    this.items = new StudentsCollection()
    this.items.add(  data  )
  },

  routes: {
    "about"     : "about",
    "students"  : "showStudents",
    "students/:id"   : "addStudent"
  },

  about: function(){
    console.log('a cool about page should show!')
    $('.container').html('')
  },

  showStudents: function(){
    console.log('gonna show ALLLL the items.')
    $('.container').html('')
    this.items = new StudentsCollection()
    this.items.add(  data  )
  },

  showStudent: function(id) {
    $('.container').html('')
    var itemToShow = this.items.get(id)
    new FullItemView({model: itemToShow})
    console.log('we should show an item with the id ', id)
  },

  addStudent: function(){
    console.log('whats going on')
    $('.container').html('')


  }

})

var router = new AppRouter()
Backbone.history.start()



