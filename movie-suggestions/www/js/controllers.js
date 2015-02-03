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
  $scope.randomMovieId = 0;

  $scope.selectedGenres = function () {
    var selectedGenres = $filter('filter')($scope.genres, {checked: true});
    $scope.filters.genre = selectedGenres;
  }

  $scope.randomMovie = function () {
    $scope.randomMovieId = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  }
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
