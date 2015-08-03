angular.module('app')
    .controller('DocsController', function ($scope) {
        var modules = [{
            name: 'Core',
            link: 'core',
            components: [{
                name: 'BaseElement',
                link: 'base-element'
            }, {
                name: 'BaseElementsList',
                link: 'base-elements-list'
            }, {
                name: 'BaseApp',
                link: 'base-app'
            }]
        }, {
            name: 'Kendo',
            link: 'kendo',
            components: [{
                name: 'Grid',
                link: 'grid'
            }, {
                name: 'Pager',
                link: 'pager'
            }, {
                name: 'DropDownList',
                link: 'drop-down-list'
            }]
        }, {
            name: 'AngularStrap',
            link: 'ng-strap',
            components: [{
                name: 'Modal',
                link: 'modal'
            }]
        }, {
            name: 'UIBootstrap',
            link: 'ui-bootstrap',
            components: [{
                name: 'TabSet',
                link: 'tab-set'
            }]
        }];
        $scope.modules = modules;
    });