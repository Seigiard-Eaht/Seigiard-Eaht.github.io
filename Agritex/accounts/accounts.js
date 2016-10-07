;
(function() {
    'use strict';

    app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.when('/accounts', '/accounts/users');
        $stateProvider
            .state('accounts', {
                url: '/accounts',
                template: '<app-view></app-view>'
            })
            .state('accounts.users', {
                url: '/users',
                template: '<accounts-users></accounts-users>'
            })
            .state('accounts.users.add', {
                url: '/add',
                views: {
                    '@accounts': {
                        template: '<user-add-form mode="new"></user-add-form>'
                    }
                }
            })
            .state('accounts.users.edit', {
                url: '/edit',
                views: {
                    '@accounts': {
                        template: '<user-add-form></user-add-form>'
                    }
                }
            })
            .state('accounts.users.delete', {
                url: '/delete',
                views: {
                    '@accounts': {
                        template: '<delete-confirmation delete-item="user Brooklyn Jenkins"></delete-confirmation>'
                    }
                }
            })
            .state('accounts.roles', {
                url: '/roles',
                template: '<accounts-roles></accounts-roles>'
            })
            .state('accounts.roles.add', {
                url: '/add',
                views: {
                    '@accounts': {
                        template: '<role-add-form mode="new"></role-add-form>'
                    }
                }
            })
            .state('accounts.roles.edit', {
                url: '/edit',
                views: {
                    '@accounts': {
                        template: '<role-add-form></role-add-form>'
                    }
                }
            })
            .state('accounts.roles.delete', {
                url: '/delete',
                views: {
                    '@accounts': {
                        template: '<delete-confirmation delete-item="role Cultivation Manager"></delete-confirmation>'
                    }
                }
            });
    }]);

    app.directive('accounts', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'accounts/accounts.html'
        };
    });

    app.directive('accountsUsers', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'accounts/users.html',
            scope: {},
            link: function($scope, element) {
                $('select.dropdown', element).dropdown();
                $scope.users = [
                    { "name": "Brooklyn Jenkins", "title": "Field Officer", "status": "Active", "email": "Brooklyn.Jenkins@gmail.com", "date_joined": "2016-09-02T19:06:54.705Z", "avatar": "img/elliot.jpg" },
                    { "name": "Quincy Glover", "title": "Top Manager", "status": "Active", "email": "Quincy.Glover@gmail.com", "date_joined": "2016-09-03T01:10:47.888Z", "avatar": "img/jenny.jpg" },
                    { "name": "Savion Bartoletti", "title": "Top Manager", "status": "Active", "email": "Savion.Bartoletti@gmail.com", "date_joined": "2016-09-03T07:52:08.917Z", "avatar": "img/joe.jpg" },
                    { "name": "Fae O'Hara", "title": "Cultivation Manager", "status": "Active", "email": "Fae.O'Hara@gmail.com", "date_joined": "2016-09-02T17:44:59.052Z", "avatar": "img/lena.png" },
                    { "name": "Kara Kautzer", "title": "Top Manager", "status": "Active", "email": "Kara.Kautzer@gmail.com", "date_joined": "2016-09-03T01:12:54.129Z", "avatar": "img/lindsay.png" },
                    { "name": "Patsy Steuber", "title": "Area Manager", "status": "Active", "email": "Patsy.Steuber@gmail.com", "date_joined": "2016-09-03T08:07:31.355Z", "avatar": "img/mark.png" },
                    { "name": "Leann Beahan", "title": "Top Manager", "status": "Blocked", "email": "Leann.Beahan@gmail.com", "date_joined": "2016-09-03T03:15:16.979Z", "avatar": "img/matt.jpg" },
                    { "name": "Ola Runolfsdottir", "title": "Field Officer", "status": "Active", "email": "Ola.Runolfsdottir@gmail.com", "date_joined": "2016-09-03T04:38:19.368Z", "avatar": "img/matthew.png" },
                    { "name": "Maximillia Casper", "title": "Field Officer", "status": "Active", "email": "Maximillia.Casper@gmail.com", "date_joined": "2016-09-02T23:56:09.780Z", "avatar": "img/lena.png" },
                    { "name": "Carol West", "title": "Area Manager", "status": "Blocked", "email": "Carol.West@gmail.com", "date_joined": "2016-09-02T22:16:55.233Z", "avatar": "img/lindsay.png" }
                ];
            }
        };
    });

    app.directive('accountsRoles', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'accounts/roles.html',
            scope: {},
            link: function($scope, element) {
                $('select.dropdown', element).dropdown();
                $scope.roles = [
                    { "name": "Top Manger", "code": "TM" },
                    { "name": "Cultivation Manger", "code": "CM" },
                    { "name": "Area Manger", "code": "AM" },
                    { "name": "Field Officer", "code": "FO" }
                ];
            }
        };
    });

    app.directive('userAddForm', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'accounts/user-add-form.html',
            scope: {
                mode: '@'
            },
            link: function($scope, element) {
                if($scope.mode !== 'new') {
                    $scope.user = {
                        "name": "Brooklyn Jenkins",
                        "title": "Field Officer",
                        "comments": "Good job!",
                        "status": true,
                        "email": "Brooklyn.Jenkins@gmail.com"
                    };
                }
                $('.ui.checkbox', element).checkbox();
            }
        };
    });

    app.directive('roleAddForm', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'accounts/role-add-form.html',
            scope: {
                mode: '@'
            },
            link: function($scope, element) {
                if($scope.mode !== 'new') {
                    $scope.role = {
                        name: 'Cultivation Manager',
                        code: 'CM'
                    }
                }
                $('.ui.checkbox', element).checkbox();
            }
        };
    });

})();
