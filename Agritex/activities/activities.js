;(function(){
    'use strict';

    app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.when('/activities', '/activities/list');
        $stateProvider
            .state('activities', {
                url: '/activities',
                template: '<app-view></app-view>'
            })
            .state('activities.list', {
                url: '/list',
                template: '<activities-list></activities-list>'
            })
            .state('activities.list.add', {
                url: '/add',
                views: {
                    '@activities': {
                        template: '<activity-add-form></activity-add-form>'
                    }
                }
            })
            .state('activities.list.edit', {
                url: '/edit',
                views: {
                    '@activities': {
                        template: '<activity-edit-form></activity-edit-form>'
                    }
                }
            })
            .state('activities.list.delete', {
                url: '/delete',
                views: {
                    '@activities': {
                        template: '<delete-confirmation delete-item="activity #1"></delete-confirmation>'
                    }
                }
            })
            .state('activities.types', {
                url: '/types',
                template: '<activities-types></activities-types>'
            })
            .state('activities.types.add', {
                url: '/add',
                views: {
                    '@activities': {
                        template: '<type-add-form mode="new"></type-add-form>'
                    }
                }
            })
            .state('activities.types.edit', {
                url: '/edit',
                views: {
                    '@activities': {
                        template: '<type-add-form></type-add-form>'
                    }
                }
            })
            .state('activities.types.delete', {
                url: '/delete',
                views: {
                    '@activities': {
                        template: '<delete-confirmation delete-item="type Crop management"></delete-confirmation>'
                    }
                }
            });
    }]);

    app.component('activitiesList', {
        templateUrl: 'activities/activities.html',
        controller: function () {
            var types = ['Planting', 'Inspection', 'Crop management', 'Harvesting'];
            this.activities = [];
            for (var i = 1; i <= 10; i++) {
                this.activities.push({
                    name: "Activity #" + i,
                    type: types[i%4]
                });
            }
        }
    });

    app.component('activitiesTypes', {
        templateUrl: 'activities/types.html',
        controller: function () {
            this.types = [
                { "name": "Planting", "code": "PL" },
                { "name": "Inspection", "code": "IN" },
                { "name": "Crop management", "code": "CM" },
                { "name": "Harvesting", "code": "HR" }
            ];
        }
    });

    app.component('activityAddForm', {
        template: '<h2 class="ui header">Add Activity</h2><activity-form activity="$ctrl.activity"></activity-form>',
        controller: function () {
            this.activity = {
                name: '',
                description: '',
                type: '',
                report: ['']
            }
        }
    });

    app.component('activityEditForm', {
        template: '<h2 class="ui header">Edit Activity</h2><activity-form activity="$ctrl.activity"></activity-form>',
        controller: function () {
            this.activity = {
                name: 'SEASONAL CROP ANALYSIS REPORT',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. deleniti omnis nobis odio, natus!',
                type: 'cropmanagement',
                report: ['Germination percentage', 'Plant height', 'Number of Beans']
            }
        }
    });

    app.component('activityForm', {
        bindings: {
            activity: '<'
        },
        templateUrl: 'activities/activity-form.html',
        controller: function () {
            var self = this;
            self.addReportField = function(){
                self.activity.report.push(self.activity.report.length);
            };
        }
    });

    app.component('activityReportField', {
        bindings: {
            reportField: '<'
        },
        templateUrl: 'activities/activity-report-field.html'
    });

    app.directive('typeAddForm', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'activities/type-add-form.html',
            scope: {
                mode: '@'
            },
            link: function ($scope, element) {
                if($scope.mode !== 'new') {
                    $scope.type = {
                        name: 'Inspection',
                        code: 'IN'
                    }
                }
            }
        };
    });



})();

