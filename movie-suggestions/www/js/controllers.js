angular.module('starter.controllers', [])

.controller('MyListCtrl', function($scope, Movies) {
  $scope.movies = Movies.all();
})

.controller('MovieDetailCtrl', function($scope, $stateParams, Movies) {
  $scope.movie = Movies.get($stateParams.movieId);
})

.controller('SuggestCtrl', function($scope, $filter, Movies) {
  // var _searchTerm = 'Brian';

  // $scope.search = {
  //   searchTerm: _searchTerm
  // };
  $scope.searchTerm = Movies.searchTerm();
  $scope.filters = Movies.filters();
  $scope.genres = Movies.genres();
  $scope.movies = Movies.all();

  $scope.randomMovieId = {value: 0};
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

  $scope.movieSuggestFilter = function(movie) {
    // check if there are any genre filters applied
    if ($scope.filters.genre[0] != null){

      for (var i =0; i < $scope.filters.genre.length; i++) {
        // check if the current movie has any of the genres used in the filter
        if (movie.genre.indexOf($scope.filters.genre[i].name) > -1) {
          console.log($scope.filters.genre[i].name);
          return true;
        }
      }
    };
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
