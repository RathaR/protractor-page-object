angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/demo', {
                templateUrl: 'views/demo.html'
            })
            .when('/demo/base-element', {
                templateUrl: 'views/base-element.html'
            })
            .when('/demo/base-elements-list', {
                templateUrl: 'views/base-elements-list.html'
            })
            .otherwise({
                redirectTo: '/home'
            })
    })
    .controller('HomeController', function () {
        console.log('init');
    })
    .controller('DemoController', function($scope) {
        var features = [{
            text: 'Core.BaseElement',
            link: 'demo/base-element'
        }, {
            text: 'Core.BaseElementsList',
            link: 'demo/base-elements-list'
        }];
        $scope.features = features;
    });
