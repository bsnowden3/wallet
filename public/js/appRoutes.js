angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            css: '../css/style.css',
        })

        .when('/users/:user_id', {
            templateUrl: 'views/user.html',
            controller: 'UserController',
            css: '../css/style.css',
        })
        
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController',
            css: '../css/style.css',
        });

    $locationProvider.html5Mode(true);

}]);
