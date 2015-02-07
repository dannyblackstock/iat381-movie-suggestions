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
    title: 'Blind Company',
    year: 2009,
    genre: 'Drama',
    runtime: 98,
    director: 'Alkinos Tsilimidos',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Blind_Company.jpg/420px-Blind_Company.jpg',
    plot: 'Geoff Brewster is seeing out his final days at the family isolated coastal shack - walking the beach and leaving tape-recorded confessions for his estranged wife, Sally. But when his Porsche driving nephew, Josh, arrives unannounced, a deadly game ensues that threatens to destroy both men. (Source IMDb)',
    youtube: 'https://www.youtube.com/watch?v=i4szksRTPDs',
    vimeo: ' ',
    myList: false,
    seen: false
  }, {
    id: 1,
    title: 'Drive',
    year: 2011,
    genre: 'Crime',
    runtime: 100,
    director: 'Nicolas Winding Refn',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Drive_%282011%29_poster.jpg/428px-Drive_%282011%29_poster.jpg',
    plot: 'A mysterious Hollywood stuntman, mechanic and getaway driver lands himself in trouble when he helps out his neighbor. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=3UFCzUfYGyM',
    vimeo: 'http://vimeo.com/51833852',
    myList: false,
    seen: false
  }, {
    id: 2,
    title: '999',
    year: 2010,
    genre: 'Drama',
    runtime: 91,
    director: 'Marina Kunarova',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Film_999%2C_2010.jpg/418px-Film_999%2C_2010.jpg',
    plot: 'The picture reveals the problem of drug addiction in contemporary life. Drug addiction can be resisted by strong character young people while others lose everything: friends, love and life. Metiss is a talented rapper, who managed to overcome drug addiction, but paid high price for it losing the girl he loved. One day, he comes across Linda, a young woman whom he tries to save. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=ErkcO1W3xbA',
    vimeo: ' ',
    myList: false,
    seen: false
  }, {
    id: 3,
    title: 'Crawl',
    year: 2011,
    genre: 'Crime',
    runtime: 100,
    director: 'Paul China',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/CRAWL_A_2011_Australian_horror_film.jpg/405px-CRAWL_A_2011_Australian_horror_film.jpg',
    plot: 'A seedy bar owner hires a mysterious Croatian to commit murder, but a planned double-crossing backfires when a young waitress is taken hostage. A suspenseful, yet darkly humorous chain of events builds to a bloodcurdling climax. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=5sAMJKMJjHA',
    vimeo: 'http://vimeo.com/26942328',
    myList: false,
    seen: true
  }, {
    id: 4,
    title: 'Bathory',
    year: 2008,
    genre: 'Drama',
    runtime: 140,
    director: 'Juraj Jakubisko',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bathory_poster.JPG/425px-Bathory_poster.JPG',
    plot: 'Bathory is based on the legends surrounding the life and deeds of Countess Elizabeth Bathory known as the greatest murderess in the history of mankind. Contrary to popular belief, Elizabeth Bathory was a modern Renaissance woman who ultimately fell victim to mens aspirations for power and wealth. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=xapNQuP8J3M',
    vimeo: 'http://vimeo.com/26019139',
    myList: false,
    seen: false
  }, {
    id: 5,
    title: 'Amsterdam Express',
    year: 2014,
    genre: 'Drama',
    runtime: 107,
    director: 'Fatmir Koç',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Amsterdam_Express.jpg/423px-Amsterdam_Express.jpg',
    plot: 'Albanian emigrant is precariously caught in Amsterdam among the promise and allure of the rich city, threats of ruthless drug dealers & sex traffickers. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=T5stRNgHiCI',
    vimeo: 'http://vimeo.com/88469974',
    myList: false,
    seen: false
  }, {
    id: 6,
    title: 'Akela the Alone',
    year: 2014,
    genre: 'Horror',
    runtime: 58,
    director: 'Qazi Abrar',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Akela_The_Alone.jpg/441px-Akela_The_Alone.jpg',
    plot: 'A loner, whose parents died years ago, lives all alone doing petty jobs for survival. He meets Nadeem and Dawood and his whole life takes a turn to insanity. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=tHmnGerFVxM',
    vimeo: ' ',
    myList: false,
    seen: false
  }, {
    id: 7,
    title: 'Journey to Everest',
    year: 2009,
    genre: 'Adventure, Documentary',
    runtime: 70,
    director: 'David Kiern',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Everest_Theatrical_Poster_m.jpg/404px-Everest_Theatrical_Poster_m.jpg',
    plot: 'An expedition to Everest Base Camp became a discovery of their greater purpose. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=tQgOSJfHg4A',
    vimeo: 'http://vimeo.com/25041130',
    myList: true,
    seen: false
  }, {
    id: 8,
    title: 'Flying Fish',
    year: 2011,
    genre: 'Drama',
    runtime: 125,
    director: 'Sanjeewa Pushpakumara',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/71/FLYING_FISH_-Teaser_Poster-5.jpg/424px-FLYING_FISH_-Teaser_Poster-5.jpg',
    plot: 'The film weaves together three narratives set against the backdrop of the Sri Lankan Civil War. (Source: Wikipedia)',
    youtube: 'https://www.youtube.com/watch?v=tT76t0MuWGI',
    vimeo: ' ',
    myList: false,
    seen: false
  }, {
    id: 9,
    title: 'Hidden Universe 3D',
    year: 2013,
    genre: 'Documentary',
    runtime: 128,
    director: 'Russell Scott',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Poster_for_the_IMAX_3D_movie_Hidden_Universe.jpg/414px-Poster_for_the_IMAX_3D_movie_Hidden_Universe.jpg',
    plot: 'An extraordinary journey deep into space offering fresh insight into the origins and evolution of the universe. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=wivi6-Sgl1E',
    vimeo: 'http://vimeo.com/94480167',
    myList: false,
    seen: false
  }, {
    id: 10,
    title: 'Condition',
    year: 2011,
    genre: 'Drama, Sci-fi',
    runtime: 70,
    director: 'Andrei Severny',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/CONDITION-FilmPoster.jpg/405px-CONDITION-FilmPoster.jpg',
    plot: 'Two women escaping a catastrophe look for salvation in sound and nature. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=sC2pyxJLTgE',
    vimeo: 'https://vimeo.com/ondemand/condition/31320414',
    myList: false,
    seen: false
  }, {
    id: 11,
    title: 'Helvetica',
    year: 2007,
    genre: 'Documentary',
    runtime: 80,
    director: 'Gary Hustwit',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Helvetica_film_poster.png/388px-Helvetica_film_poster.png',
    plot: 'A documentary about typography, graphic design, and global visual culture. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=t__AN6d8FWQ',
    vimeo: 'http://vimeo.com/73809723',
    myList: false,
    seen: false
  }, {
    id: 12,
    title: 'LFO',
    year: 2013,
    genre: 'Documentary',
    runtime: 94,
    director: 'Antonio Tublen',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/83/LFO_official_poster.jpg/419px-LFO_official_poster.jpg',
    plot: 'LFO is a dark comedy/drama/Sci-Fi about a man who realizes that he can hypnotize with sound. He starts experimenting on his neighbors, where the abuse of power takes over and, eventually, severe consequences for mankind are at stake. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=9GG92c3TVyw',
    vimeo: ' ',
    myList: false,
    seen: false
  }, {
    id: 13,
    title: 'Plot for Peace',
    year: 2013,
    genre: 'Documentary',
    runtime: 84,
    director: 'Carlos Agulló',
    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/8/86/P4P_int_low.jpg/420px-P4P_int_low.jpg',
    plot: 'A documentary that reveals the untold story of apartheids fall, and the mysterious French businessman who was instrumental in Nelson Mandelas release from jail. (Source: IMDb)',
    youtube: 'https://www.youtube.com/watch?v=trEB574W8Kc',
    vimeo: ' ',
    myList: false,
    seen: false
  }];

  var genres = [{
    name: 'Adventure'
  }, {
    name: 'Comedy'
  }, {
    name: 'Crime'
  }, {
    name: 'Drama'
  }, {
    name: 'Documentary'
  }, {
    name: 'Horror'
  }, {
    name: 'Sci-fi'
  }];

  var searchTerm = "";

  var filters = {
      genre: [],
      runtimeRange: "0,999",
      yearRange: ["",""]
  };

  var suggestedMovie = {};

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
    suggestedMovie: function() {
      return suggestedMovie;
    },
    setSuggestedMovie: function(newSuggestedMovie) {
      suggestedMovie = newSuggestedMovie;
    },
    filters: function() {
      return filters;
    }
  }
});