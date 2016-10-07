(function(){
    'use strict';

    app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.when('/dashboard', '/dashboard/calendar');
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                template: '<app-view></app-view>'
            })
            .state('dashboard.calendar', {
                url: '/calendar',
                template: '<dashboard-calendar></dashboard-calendar>'
            })
            .state('dashboard.reports', {
                url: '/reports',
                template: '<dashboard-reports></dashboard-reports>'
            })
            .state('dashboard.calendar.activity', {
                url: '/view',
                views: {
                    '@dashboard': {
                        template: '<dashboard-activity></dashboard-activity>'
                    }
                }
            })
            .state('dashboard.map', {
                url: '/map',
                template: '<dashboard-map></dashboard-map>'
            })
            .state('dashboard.log', {
                url: '/log',
                template: '<dashboard-log></dashboard-log>'
            });
    }]);

    app.component('dashboard', {
        templateUrl: 'dashboard/dashboard.html'
    });

    app.component('dashboardCalendar', {
        templateUrl: 'dashboard/calendar.html'
    });

    app.component('dashboardReports', {
        templateUrl: 'dashboard/reports.html',
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

    app.directive('dashboardMap', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'dashboard/map.html',
            link: function () {
                var map, path, paths;
                initMap();
                function initMap(){
                    map = new GMaps({
                        el: '#map',
                        lat: -28.020887,
                        lng: 126.478105,
                        zoom: 7,
                        click: function(e){
                            console.log(e);
                        }
                    });

                    path = [
                        [-28.020887, 126.478105],
                        [-28.633011, 126.492825],
                        [-28.661935, 125.526028],
                        [-27.994667, 125.509549]
                    ];

                    paths = [
                        [-29.026477, 129.031543],
                        [-30.296857, 128.998812],
                        [-30.292146, 127.345880],
                        [-29.597286, 127.356791],
                        [-29.587799, 126.816724],
                        [-29.293252, 126.805814],
                        [-29.278978, 127.345880],
                        [-29.002624, 127.351336],
                        [-29.002624, 128.976991]

                    ];

                    map.addMarker({
                        lat: -28.277457,
                        lng: 126.013165,
                        infoWindow: {
                            content: '<b><a href="#">Corn field</a></b><br>Thinning'
                        }
                    });

                    map.addMarker({
                        lat: -29.613359,
                        lng: 128.192526,
                        infoWindow: {
                            content: '<b><a href="#">Cabbage Field</a></b><br>Weed control'
                        }
                    });


                    map.drawPolygon({
                        paths: path,
                        strokeColor: '#131540',
                        strokeOpacity: 0.6,
                        strokeWeight: 3
                    });

                    map.drawPolygon({
                        paths: paths,
                        strokeColor: '#131540',
                        strokeOpacity: 0.6,
                        strokeWeight: 3
                    });
                }
            }
        };
    });

    app.directive('dashboardLog', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'dashboard/log.html',
            link: function () {
                $('.message .close').on('click', function() {
                    $(this).closest('.message').transition('fade');
                });
            }
        };
    });


    app.directive('calendarWidget', function() {
        return {
            restrict: 'E',
            templateUrl: 'dashboard/calendar-widget.html'
        };
    });

    app.directive('dashboardActivity', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'dashboard/activity-view.html',
            link: function () {
                $('select.dropdown').dropdown();
            }
        };
    });

    app.directive('activityComments', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'dashboard/activity-comments.html'
        };
    });

})();

