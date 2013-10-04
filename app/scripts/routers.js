AppRouter = Backbone.Router.extend({

  initialize: function(){
    this.items = new StudentsCollection()
  },

  routes: {
    ""              : "showStudents", 
    "about"         : "about",
    "students"      : "showStudents",
    "students/:id"  : "showStudent",
    "add"           : "addStudent",
    ":id/edit" : "editStudent"
  },

  about: function(){
    console.log('a cool about page should show!')
    $('.container').html('')
  },

  showStudents: function(){
    console.log('gonna show ALLLL the items.')
    $('.container').html('')
    // hooking up data yo
    this.items.fetch({
      success: function(items){
        items.each(function(item){
          new GridItemView( {model: item} )
        })
      }
    })

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
    new AddStudentView()
  },
  

})



var router = new AppRouter()
Backbone.history.start()



