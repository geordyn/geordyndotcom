angular.module("app", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
  ///////USER VIEWS///////
    .state('home', {
      url: '/home',
      templateUrl: './../views/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: './../views/blogTmpl.html',
      controller: 'blogCtrl'
    })
    .state('resume', {
      url: '/resume',
      templateUrl: './../views/resumeTmpl.html'
    });

    $urlRouterProvider.otherwise('/home');

// END CONFIG
});
