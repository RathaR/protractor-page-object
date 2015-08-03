angular.module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
            })
            .when('/docs', {
                templateUrl: 'views/docs.html'
            })
            .when('/docs/:moduleId/:componentId', {
                templateUrl: 'views/docs/component-layout.html',
                controller: function ($scope, $routeParams) {
                    var module = $routeParams.moduleId;
                    var component = $routeParams.componentId + '.html';
                    $scope.componentTplUrl = ['views', 'docs', module, component].join('/');
                }
            })
            .otherwise({
                redirectTo: '/home'
            })
    });