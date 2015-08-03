angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
            })
            .when('/docs', {
                templateUrl: 'views/docs.html'
            })
            .when('/docs/:id', {
                templateUrl: function(params) {
                    return 'views/docs/' + params.id + '.html';
                }
            })
            .otherwise({
                redirectTo: '/home'
            })
    })
    .controller('HomeController', function () {
        console.log('init');
    })
    .controller('DocsController', function($scope) {
        var features = [{
            text: 'Core.BaseElement',
            link: 'base-element'
        }, {
            text: 'Core.BaseElementsList',
            link: 'base-elements-list'
        }, {
            text: 'Core.BaseApp',
            link: 'base-app'
        }];
        $scope.features = features;
    });
