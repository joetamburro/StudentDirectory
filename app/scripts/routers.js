AppRouter = Backbone.Router.extend({

  initialize: function(){
    this.items = new StudentsCollection()
    // this.items.add(data) 

  },

  routes: {
    "about"     : "about",
    "students"  : "showStudents",
    "students/:id" : "showStudent",
    "add"       : "addStudent"
  },

  about: function(){
    console.log('a cool about page should show!')
    $('.container').html('')
  },

  showStudents: function(){
    console.log('gonna show ALLLL the items.')
    $('.container').html('')
    this.items = new StudentsCollection()
    // hooking up data yo
    this.items.fetch()

  },

  showStudent: function(id) {
    $('.container').html('')
    this.items.fetch({
      success: function(items){
        var itemToShow = items.get(id)
        new FullItemView({model: itemToShow})
        console.log('we should show an item with the id ', id)
      }
    })
  },
    // console.log('we should show an item with the id ', id)
  

  addStudent: function(){
    console.log('whats going on')
    $('.container').html('')

  }

})



var router = new AppRouter()
Backbone.history.start()



