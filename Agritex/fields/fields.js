(function(){
    'use strict';

    app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.when('/fields', '/fields/list');
        $stateProvider
            .state('fields', {
                url: '/fields',
                template: '<app-view></app-view>'
            })
            .state('fields.list', {
                url: '/list',
                template: '<fields-list></fields-list>'
            })
            .state('fields.list.add', {
                url: '/add',
                views: {
                    '@fields': {
                        template: '<field-add-form mode="new"></field-add-form>'
                    }
                }
            })
            .state('fields.list.edit', {
                url: '/edit',
                views: {
                    '@fields': {
                        template: '<field-add-form></field-add-form>'
                    }
                }
            })
            .state('fields.list.history', {
                url: '/history',
                views: {
                    '@fields': {
                        template: '<field-history></field-history>'
                    }
                }
            })
            .state('fields.list.delete', {
                url: '/delete',
                views: {
                    '@fields': {
                        template: '<delete-confirmation delete-item="Rye Field"></delete-confirmation>'
                    }
                }
            })
            .state('fields.farms', {
                url: '/farms',
                template: '<fields-farms></fields-farms>'
            })
            .state('fields.farms.add', {
                url: '/add',
                views: {
                    '@fields': {
                        template: '<farm-add-form mode="new"></farm-add-form>'
                    }
                }
            })
            .state('fields.farms.edit', {
                url: '/edit',
                views: {
                    '@fields': {
                        template: '<farm-add-form></farm-add-form>'
                    }
                }
            })
            .state('fields.farms.delete', {
                url: '/delete',
                views: {
                    '@fields': {
                        template: '<delete-confirmation delete-item="Rice farm"></delete-confirmation>'
                    }
                }
            });
    }]);

    app.component('fields', {
        templateUrl: 'fields/fields.html'
    });

    app.component('fieldsList', {
        templateUrl: 'fields/fields.html',
        controller: function () {
            this.types = [
                'Wheat', 'Rye', 'Rice', 'Oats', 'Barley', 'Corn', 'Sorghum', 'Millet'
            ];
        }
    });

    app.component('fieldsFarms', {
        templateUrl: 'fields/farms.html',
        controller: function () {
            this.types = [
                'Wheat', 'Rye', 'Rice', 'Oats', 'Barley', 'Corn', 'Sorghum', 'Millet'
            ];
        }
    });

    app.component('fieldHistory', {
        templateUrl: 'fields/field-history.html',
        controller: function () {
            var seasons = [
                '2016', '2015'
            ];
            var activities = [
                'Crop analysis report cotton',
                'Crop harvest test report cotton',
                'SAC cotton cultivation reports',
                'Seasonal production report',
                'Weekly activity report',
                'Weekly status report cotton'
            ];
            this.reports = [];
            for(var season in seasons){
                for(var activity in activities){
                    this.reports.push({
                        season: seasons[season],
                        activity: activities[activity]
                    })
                }
            }
        }
    });

    app.directive('fieldAddForm', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'fields/field-add-form.html',
            scope: {
                mode: '@'
            },
            link: function ($scope, element) {
                $('.ui.checkbox', element).checkbox();
                $('select.dropdown', element).dropdown();
            }
        };
    });

    app.directive('farmAddForm', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'fields/farm-add-form.html',
            scope: {
                mode: '@'
            }
        };
    });

    app.directive('location', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'fields/location.html',
            link: function ($scope, element) {
                var $map = $(element);
                var map, path, paths;
                initMap();
                function initMap(){
                    map = new GMaps({
                        el: "#map",
                        lat: -28.277457,
                        lng: 126.013165,
                        zoom: 7,
                        click: function(e){
                            console.log(e);
                        }
                    });

                    map.addMarker({
                        lat: -28.277457,
                        lng: 126.013165,
                        infoWindow: {
                            content: '<b><a href="#">Corn field</a></b><br>Thinning'
                        }
                    });

                    map.drawPolygon({
                        paths: [
                            [-28.020887, 126.478105],
                            [-28.633011, 126.492825],
                            [-28.661935, 125.526028],
                            [-27.994667, 125.509549]
                        ],
                        strokeColor: '#131540',
                        strokeOpacity: 0.6,
                        strokeWeight: 3
                    });
                }
            }
        };
    });

})();

