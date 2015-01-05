angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

        $routeProvider
            // home page
            .when('/', {
                templateUrl: 'views/map.html',
                controller: 'MapController'
            })
            // nerds page that will use the NerdController
            .when('/nerds', {
                templateUrl: 'views/nerd.html',
                controller: 'NerdController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    }]);