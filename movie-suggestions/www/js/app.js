// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngSlider'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // force tab bar to be on the bottom on android
  $ionicConfigProvider.tabs.style("standard").position("bottom");
  // force back chevron instead of arrow on android
  $ionicConfigProvider.backButton.icon('ion-chevron-left');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.my-list', {
    url: '/my-list',
    views: {
      'tab-my-list': {
        templateUrl: 'templates/tab-my-list.html',
        controller: 'MyListCtrl'
      }
    }
  })
  .state('tab.my-list-detail', {
    url: '/my-list/movie/:movieId',
    views: {
      'tab-my-list': {
        templateUrl: 'templates/tab-movie-detail.html',
        controller: 'MovieDetailCtrl'
      }
    }
  })

  .state('tab.suggest', {
      url: '/suggest',
      views: {
        'tab-suggest': {
          templateUrl: 'templates/tab-suggest.html',
          controller: 'SuggestCtrl'
        }
      }
    })
  .state('tab.suggest-search', {
      url: '/suggest/search',
      views: {
        'tab-suggest': {
          templateUrl: 'templates/tab-search.html',
          controller: 'SuggestCtrl'
        }
      }
    })
    .state('tab.suggest-result', {
      url: '/suggest/suggest-result',
      views: {
        'tab-suggest': {
          templateUrl: 'templates/tab-suggest-result.html',
          controller: 'SuggestCtrl'
        }
      }
    })
  .state('tab.suggest-search-detail', {
    url: '/suggest/movie/:movieId',
    views: {
      'tab-suggest': {
        templateUrl: 'templates/tab-movie-detail.html',
        controller: 'MovieDetailCtrl'
      }
    }
  })

    // .state('tab.chat-detail', {
    //   url: '/chats/:chatId',
    //   views: {
    //     'tab-chats': {
    //       templateUrl: 'templates/chat-detail.html',
    //       controller: 'ChatDetailCtrl'
    //     }
    //   }
    // })

  .state('tab.seen', {
      url: '/seen',
      views: {
        'tab-seen': {
          templateUrl: 'templates/tab-seen.html',
          controller: 'SeenCtrl'
        }
      }
    })
    .state('tab.seen-detail', {
      url: '/seen/movie/:movieId',
      views: {
        'tab-seen': {
          templateUrl: 'templates/tab-movie-detail.html',
          controller: 'MovieDetailCtrl'
        }
      }
    })

  // .state('tab.account', {
  //   url: '/account',
  //   views: {
  //     'tab-account': {
  //       templateUrl: 'templates/tab-account.html',
  //       controller: 'AccountCtrl'
  //     }
  //   }
  // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/suggest');

});
