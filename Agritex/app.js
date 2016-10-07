var app = (function(){
    'use strict';
    var app = angular.module('myApp', ['ui.router', 'formly', 'formlyVanilla']);

    app.config(['$urlRouterProvider', function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    }]);

    return app;
})();

