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
    director: 'Jared Hess',
    genre: 'Comedy',
    runtime: '96 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/en/8/87/Napoleon_dynamite_post.jpg'
  }, {
    id: 1,
    title: '300',
    year: 2006,
    director: 'Zach Snyder',
    genre: 'Action',
    runtime: '117 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg'
  }, {
    id: 2,
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    director: 'Peter Jackson',
    genre: 'Action, Drama',
    runtime: '178 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/en/0/0c/The_Fellowship_Of_The_Ring.jpg'
  }, {
    id: 3,
    title: 'Drive',
    year: 2011,
    director: 'Nicolas Winding Refn',
    genre: 'Crime, Thriller',
    runtime: '100 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Drive_%282011%29_poster.jpg/428px-Drive_%282011%29_poster.jpg'
  }, {
    id: 4,
    title: 'Crawl',
    year: 2011,
    director: 'Paul China',
    genre: 'Crime, Thriller',
    runtime: '100 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/CRAWL_A_2011_Australian_horror_film.jpg/324px-CRAWL_A_2011_Australian_horror_film.jpg'
  }, {
    id: 5,
    title: 'Amsterdam Express',
    year: 2014,
    director: 'Fatmir Koci',
    genre: 'Drama',
    runtime: '107 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Amsterdam_Express.jpg/423px-Amsterdam_Express.jpg'
  }, {
    id: 6,
    title: 'Akela the Alone',
    year: 2014,
    director: 'Abrar Qzai',
    genre: 'Horror, Thriller',
    runtime: '58 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Akela_The_Alone.jpg/441px-Akela_The_Alone.jpg'
  }, {
    id: 7,
    title: 'Journey to Everest',
    year: 2009,
    director: 'David Kiern',
    genre: 'Adventure, Documentary',
    runtime: '70 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Everest_Theatrical_Poster_m.jpg/404px-Everest_Theatrical_Poster_m.jpg'
  }, {
    id: 8,
    title: 'Flying Fish',
    year: 2011,
    director: 'Sanjeewa Pushpakumara',
    genre: 'Drama',
    runtime: '125 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/71/FLYING_FISH_-Teaser_Poster-5.jpg/424px-FLYING_FISH_-Teaser_Poster-5.jpg'
  }, {
    id: 9,
    title: 'Hidden Universe 3D',
    year: 2013,
    director: 'Russell Scott',
    genre: 'Documentary',
    runtime: '128 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Poster_for_the_IMAX_3D_movie_Hidden_Universe.jpg/414px-Poster_for_the_IMAX_3D_movie_Hidden_Universe.jpg'
  }, {
    id: 10,
    title: 'Condition',
    year: 2011,
    director: 'Andrei Severny',
    genre: 'Drama, Mystery, Sci-fi',
    runtime: '70 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/CONDITION-FilmPoster.jpg/405px-CONDITION-FilmPoster.jpg'
  }, {
    id: 11,
    title: 'Helvetica',
    year: 2007,
    director: 'Gary Justwit',
    genre: 'Documentary',
    runtime: '80 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Helvetica_film_poster.png/388px-Helvetica_film_poster.png'
  }, {
    id: 12,
    title: 'LFO',
    year: 2013,
    director: 'Antonio Tublen',
    genre: 'Documentary',
    runtime: '94 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/83/LFO_official_poster.jpg/419px-LFO_official_poster.jpg'
  }, {
    id: 13,
    title: 'Plot for Peace',
    year: 2013,
    director: 'Carlos Agullo',
    genre: 'Documentary, Thriller',
    runtime: '84 minutes',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/86/P4P_int_low.jpg/420px-P4P_int_low.jpg'
  }];

  return {
    all: function() {
      return movies;
    },
    get: function(moviesId) {
      // Simple index lookup
      return movies[moviesId];
    }
  }
});