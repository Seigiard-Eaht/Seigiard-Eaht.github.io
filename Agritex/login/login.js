;(function(){
    'use strict';

    app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login-form></login-form>'
            });
    }]);

    app.directive('loginForm', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'login/login.html',
            link: function ($scope, element) {
                element.parent().addClass('login');
                $scope.$on('$destroy', function () {
                    element.parent().removeClass('login');
                });
            }
        };
    });

})();

