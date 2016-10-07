(function(){
    'use strict';

    app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.when('/scheduling', '/scheduling/list');
        $stateProvider
            .state('scheduling', {
                url: '/scheduling',
                template: '<app-view></app-view>'
            })
            .state('scheduling.list', {
                url: '/list',
                template: '<scheduling></scheduling>'
            })
            .state('scheduling.add', {
                url: '/add',
                views: {
                    '@scheduling': {
                        template: '<schedule-add-form></schedule-add-form>'
                    }
                }
            })
            .state('scheduling.edit', {
                url: '/edit',
                views: {
                    '@scheduling': {
                        template: '<schedule-edit-form></schedule-edit-form>'
                    }
                }
            })
            .state('scheduling.delete', {
                url: '/delete',
                views: {
                    '@scheduling': {
                        template: '<delete-confirmation delete-item="schedule for Season #1 for Rice"></delete-confirmation>'
                    }
                }
            });
    }]);

    app.component('scheduling', {
        templateUrl: 'scheduling/scheduling.html'
    });

    app.component('scheduleEditForm', {
        template: '<h2 class="ui header">Edit Schedule</h2><schedule-form activities="$ctrl.activities"></schedule-form>',
        controller: function(){
            this.activities = [0, 1];
        }
    });

    app.component('scheduleAddForm', {
        template: '<h2 class="ui header">Add Schedule</h2><schedule-form activities="$ctrl.activities"></schedule-form>',
        controller: function(){
            this.activities = [0];
        }
    });

    app.component('scheduleForm', {
        bindings: {
            activities: "<"
        },
        templateUrl: 'scheduling/schedule-form.html',
        controller: function(){
            var self = this;
            self.addActivity = function(){
                self.activities.push(self.activities.length);
            };
        }
    });

    app.component('scheduleActivity', {
        bindings: {
            activity: "<"
        },
        templateUrl: 'scheduling/schedule-activity.html'
    });



})();

