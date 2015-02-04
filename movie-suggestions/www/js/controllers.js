angular.module('starter.controllers', [])

.controller('MyListCtrl', function($scope, Movies) {
  $scope.movies = Movies.all();
})

.controller('MovieDetailCtrl', function($scope, $stateParams, Movies) {
  $scope.movie = Movies.get($stateParams.movieId);
})

.controller('SuggestCtrl', function($scope, $filter, $location, Movies) {
  // var _searchTerm = 'Brian';

  // $scope.search = {
  //   searchTerm: _searchTerm
  // };
  $scope.searchTerm = Movies.searchTerm();
  $scope.filters = Movies.filters();
  $scope.genres = Movies.genres();
  $scope.movies = Movies.all();
  $scope.potentialSuggestions = Movies.potentialSuggestions();

  $scope.selectedMovieLength = [0,999];
  $scope.selectedYear = {value: ""};


  $scope.changeSelectedGenres = function () {
    var selectedGenres = $filter('filter')($scope.genres, {checked: true});
    $scope.filters.genre = selectedGenres;
  }

  $scope.changeYearRange = function () {
    $scope.filters.yearRange = [$scope.selectedYear.value, $scope.selectedYear.value];
  }

  $scope.changeSuggestedMovie = function () {
    $scope.randomMovieId = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  }

  // function to generate random suggestion
  $scope.movieSuggestFilter = function() {

    $scope.potentialSuggestions = [];

    // loop through all the movies
    for (i = 0; i < $scope.movies.length; i++) {
      // only add this movie to the possibilities if it matches all input criteria
      var movieMatchesGenre = false;
      var movieMatchesRuntime = false;
      var movieMatchesYear = false;

      // check if there are any genre filters applied
      if ($scope.filters.genre[0] != null){
        for (var j =0; j < $scope.filters.genre.length; j++) {
          // check if the current movie has any of the genres used in the filter
          if ($scope.movies[i].genre.indexOf($scope.filters.genre[j].name) > -1) {
            // console.log($scope.filters.genre[i].name);
            movieMatchesGenre = true;
          }
        }
      }
      else {
        movieMatchesGenre = true;
      }

      // parse the runtime range since it's actually a string in format "min,max"
      var parsedRuntimeRange = JSON.parse("[" + $scope.filters.runtimeRange + "]");
      if (($scope.movies[i].runtime >= parsedRuntimeRange[0]) && ($scope.movies[i].runtime <= parsedRuntimeRange[1])) {
        movieMatchesRuntime = true;
      }
      else {
        movieMatchesRuntime = false;
      }

      // parse min and max year since theyre stored as an array of strings
      var parsedMinYear = parseInt($scope.filters.yearRange[0]);
      var parsedMaxYear = parseInt($scope.filters.yearRange[1]);
      
      // console.log("parsedMinYear: "+parsedMinYear);
      // check if the user entered a number
      if (parsedMinYear && parsedMaxYear) {
        if (($scope.movies[i].year >= parsedMinYear) && ($scope.movies[i].year <= parsedMaxYear)) {
          movieMatchesYear = true;
        }
        else {
          movieMatchesYear = false;
        }
      }
      else {
        movieMatchesYear = true;
      }
      // console.log("movieMatchesYear: "+movieMatchesYear);

      // if it fits all the filter criteria, add it to the potential choices
      if (movieMatchesGenre && movieMatchesRuntime && movieMatchesYear) {
        $scope.potentialSuggestions.push($scope.movies[i]);
      }
    }
    console.log($scope.potentialSuggestions);
    // THE KEY TO MY MISERY setting the variable IN THE SERVICE AS WELL
    Movies.setPotentialSuggestions($scope.potentialSuggestions);
  };

  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
