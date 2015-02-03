angular.module('starter.controllers', ['ionic'])

.controller('MyListCtrl', function($scope, Movies) {
  $scope.movies = Movies.all();
})

.controller('MyListDetailCtrl', function($scope, $stateParams, Movies) {
  $scope.movie = Movies.get($stateParams.movieId);

  $scope.movieId = [];

  $scope.addMovie = function () {
    $scope.movie.push($scope.movies);
    $scope.movie = '';
  }
})

.controller('AddCtrl', function($scope, Movies) {
  $scope.addMovie = Movies.addMovie;

  $scope.movies = Movies.all();
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Movies) {
  $scope.friends = Movies.get($stateParams.movieId);
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
