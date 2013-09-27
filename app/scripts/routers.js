AppRouter = Backbone.Router.extend({

  initialize: function(){
    this.items = new StudentsCollection()
    this.items.add(  data  )
  },

  routes: {
    "about"     : "about",
    "students"  : "showItems"
  },

  about: function(){
    console.log('a cool about page should show!')
    $('.container').html('')
  },

  showItems: function(){
    console.log('gonna show ALLLL the items.')
    $('.container').html('')
    this.items = new StudentsCollection()
    this.items.add(  data  )
  },

  showItem: function(id) {
    $('.container').html('')
    var itemToShow = this.items.get(id)
    new FullItemView({model: itemToShow})
    console.log('we should show an item with the id ', id)
  }

})

var router = new AppRouter()
Backbone.history.start()



