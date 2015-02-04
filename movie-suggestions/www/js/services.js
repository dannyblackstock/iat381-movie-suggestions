angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})

/**
 * A simple movie database
 */
.factory('Movies', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var movies = [{
    id: 0,
    title: 'Napoleon Dynamite',
    year: 2004,
    genre: 'Comedy',
    runtime: 96,
    poster: 'http://upload.wikimedia.org/wikipedia/en/8/87/Napoleon_dynamite_post.jpg'
  }, {
    id: 1,
    title: '300',
    year: 2006,
    genre: 'Action',
    runtime: 117,
    poster: 'http://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg'
  }, {
    id: 2,
    title: 'Forrest Gump',
    year: 1994,
    genre: 'Comedy, Action, Drama',
    runtime: 145,
    poster: 'http://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg'
  }, {
    id: 3,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    genre: 'Action, Drama',
    runtime: 178,
    poster: 'http://upload.wikimedia.org/wikipedia/en/0/0c/The_Fellowship_Of_The_Ring.jpg'
  }];

  var genres = [{
    name: 'Action'
  }, {
    name: 'Adventure'
  }, {
    name: 'Comedy'
  }, {
    name: 'Drama'
  }, {
    name: 'Horror'
  }, {
    name: 'Sci-fi'
  }];

  var searchTerm = "";

  var filters = {
      genre: "",
      runtimeRange: [0,999],
      yearRange: [0,2016]
  };

  return {
    all: function() {
      return movies;
    },
    get: function(moviesId) {
      // Simple index lookup
      return movies[moviesId];
    },
    genres: function() {
      return genres;
    },
    searchTerm: function() {
      return searchTerm;
    },
    filters: function() {
      return filters;
    }
  }
});