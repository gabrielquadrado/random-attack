(function(window, document, angular, $) {
    'use strict';

    angular
        .module('game', [
            'ngRoute'
        ])

    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/game'
            })
            .when('/game', {
                templateUrl: 'app/game/game.html',
                controller: 'gameCtrl'
            })
            .otherwise({
                templateUrl: 'app/static/html/error.html'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    })

    .config(function($logProvider) {
        $logProvider.debugEnabled(true);
    })

    .run(function($rootScope, $location, $http, $log) {
        $log.info('Running game', $rootScope);
    })

})(window, document, window.angular, window.jQuery);
