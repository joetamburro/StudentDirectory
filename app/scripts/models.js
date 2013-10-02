Student = Backbone.Model.extend({
  initialize: function(){
    console.log('new item created!')
  },
    idAttribute: "_id"
})

//  var data = [

//   { 

//     firstName: 'Dan',
//     lastName: 'Jeffords',
//     email: 'daniel.jeffords@gmail.com',
//     phone:'864-640-5321',
//     image:'https://0.gravatar.com/avatar/da8a5a98804afce7c9598230ac702868?d=https%3A%2F%2Fidenticons.github.com%2Fa55edf1f0ff4b0ce8ff22eba31ddb99f.png&s=400'
//   },

//   { 

//     firstName: 'Keeron',
//     lastName: 'Thandroyen',
//     phone: '864-608-6515',
//     email: 'keeronmarc@gmail.com',
//     github: 'https://github.com/keeronmarc',
//     image: 'https://0.gravatar.com/avatar/df54465365bd3da38d5bf73dd066ee67?d=https%3A%2F%2Fidenticons.github.com%2Fd6b54b90ab365523f9fe803ff79220a9.png&s=400'

//   },

//   { 
 
//     firstName: 'Andy',
//     lastName: 'Flack',
//     phone: '666-420-5555',
//     email: 'flack.ap@gmail.com',
//     github: 'https://github.com/FlackAP',
//     image: 'https://0.gravatar.com/avatar/b05691109d08ca754b4d92984b53b23a?d=https%3A%2F%2Fidenticons.github.com%2F1f05bde9094f992be5264d254dc63842.png&s=400'

//   },

//   { 

//     firstName: 'Jake',
//     lastName: 'Hendley',
//     phone: '864-640-9515',
//     email: 'jhendley25@gmail.com',
//     github: 'https://github.com/jhendley25',
//     image: 'https://identicons.github.com/9745e271f4fb0ac83b37286d6ac03942.png'

//   },

//   { 
 
//     firstName: 'Joe',
//     lastName: 'Vanleeuwen',
//     phone: '864-567-6215',
//     email: 'jvnlwn@gmail.com',
//     github: 'https://github.com/joe-vanleeuwen',
//     image: 'https://2.gravatar.com/avatar/9630334f86049b7af41ae84c5c52a166?d=https%3A%2F%2Fidenticons.github.com%2Fd8ffb2214e1db5dd70ebac58b9c6bdde.png&s=400'

//   },

//   { 
 
//     firstName: 'Ryan',
//     lastName: 'Poplin',
//     phone: '864-360-1231',
//     email: 'fender14@charter.net',
//     github: 'https://github.com/ryanpoplin',
//     image: 'https://1.gravatar.com/avatar/5f82bfa696bada6b49afcac4569017cb?d=https%3A%2F%2Fidenticons.github.com%2Fce1b18b1d3e7b2cb1527db14040458e9.png&s=400'

//   },

//   { 

//     firstName: 'Caleb',
//     lastName: 'Bradley',
//     phone: '864-901-2362',
//     email: 'calebbradley30@yahoo.com',
//     github: 'https://github.com/calebbradley',
//     image: 'https://0.gravatar.com/avatar/6e1409c2af985ad17320157ffd13b67c?d=https%3A%2F%2Fidenticons.github.com%2F5b515ef064cf164fa1bd61f03eb6d9fa.png&s=400'

//   }

// ]