;(function () {
    'use strict';
    AreaProvider.$inject = ['CrudFactory'];
    areaList.$inject = ['AreaProvider'];
    areaAdd.$inject = ['AreaProvider'];
    areaEdit.$inject = ['$stateParams', 'AreaProvider'];
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('fields.areas', {
                url: '/areas',
                template: '<area-list></area-list>'
            })
            .state('fields.areas.add', {
                url: '/add',
                views: {
                    '@fields': {
                        template: '<h2 class="ui header">Add area</h2><area-add></area-add>'
                    }
                }
            })
            .state('fields.areas.edit', {
                url: '/edit/:id',
                views: {
                    '@fields': {
                        template: '<h2 class="ui header">Edit area</h2><area-edit></area-edit>'
                    }
                }
            })
            .state('fields.areas.delete', {
                url: '/delete/:id',
                views: {
                    'aside@fields': {
                        template: '<delete-confirmation delete-item="Abu Dhabi area"></delete-confirmation>'
                    }
                }
            });
    }]);

    function AreaProvider(CrudFactory) {
        'ngInject';

        var areas = [
            {
                id: 1,
                name: 'Colombo',
                area: 3.593,
                farms: 91,
                fields: 460,
                typography: 'terrain and vegetation description',
                infrastructure: 'road access, power grids, buildings, constructions',
                irrigation_source: 'well, creek, river, basin, lake,  other',
                soil_analysis: true,
                manager: false,
                location: {
                    lat: 1,
                    lng: 1
                }
            },
            {
                id: 2,
                name: 'Badulla',
                area: 8.335,
                farms: 165,
                fields: 452,
                typography: 'terrain and vegetation description',
                infrastructure: 'road access, power grids, buildings, constructions',
                irrigation_source: 'well, creek, river, basin, lake,  other',
                soil_analysis: true,
                manager: false,
                location: {
                    lat: 1,
                    lng: 1
                }
            },
            {
                id: 2,
                name: 'Galle',
                area: 5.383,
                farms: 161,
                fields: 1628,
                typography: 'terrain and vegetation description',
                infrastructure: 'road access, power grids, buildings, constructions',
                irrigation_source: 'well, creek, river, basin, lake,  other',
                soil_analysis: true,
                manager: false,
                location: {
                    lat: 1,
                    lng: 1
                }
            }
        ];

        var provider = new CrudFactory(areas);

        return provider;
    }

    app.factory('AreaProvider', AreaProvider);

    app.component('areaList', {
        templateUrl: 'fields/areas/area-list.html',
        controller: areaList
    });

    function areaList(AreaProvider) {
        'ngInject';
        var self = this;

        AreaProvider.getAll().then(function (data) {
            self.areas = data;
        });
    }

    app.component('areaAdd', {
        template: '<area-form data="$ctrl.data" on-save="$ctrl.formSubmit(data)" on-cancel="$ctrl.formCancel()"></area-form>',
        controller: areaAdd
    });

    function areaAdd(AreaProvider) {
        'ngInject';
        var self = this;
        self.data = {};

        self.formSubmit = function (data) {
            AreaProvider.add(data).then(function () {
                console.log('okky');
            });
        };
        self.formCancel = function () {
            console.log('okky');
        };
    }

    app.component('areaEdit', {
        template: '<area-form data="$ctrl.data" on-save="$ctrl.formSubmit(data)" on-cancel="$ctrl.formCancel()"></area-form>',
        controller: areaEdit
    });

    function areaEdit($stateParams, AreaProvider) {
        'ngInject';
        var self = this;

        self.formSubmit = function formSubmit(data) {
            AreaProvider.updateById($stateParams.id, data).then(function () {
                console.log('okky update');
            });
        };

        self.formCancel = function formCancel() {
            console.log('okky');
        };

        AreaProvider.getById($stateParams.id).then(function (data) {
            self.data = data;
        });
    }

    app.component('areaForm', {
        bindings: {
            data: '<',
            formSubmit: '&onSave',
            formCancel: '&onCancel'
        },
        templateUrl: 'fields/areas/area-form.html',
        controller: function(){
            // this.dataFields = [
            //     {
            //         "className": "two fields",
            //         "fieldGroup": [
            //             {
            //                 "className": "field",
            //                 "fieldGroup": [
            //                     {
            //                         key: 'name',
            //                         type: 'input',
            //                         templateOptions: {
            //                             type: 'text',
            //                             label: 'Name',
            //                             required: true
            //                         }
            //                     },
            //                     {
            //                         key: 'typography',
            //                         type: 'input',
            //                         templateOptions: {
            //                             type: 'text',
            //                             label: 'Typography',
            //                             // placeholder: 'Enter your last name',
            //                             required: true
            //                         }
            //                     },
            //                     {
            //                         key: 'infrastructure',
            //                         type: 'input',
            //                         templateOptions: {
            //                             type: 'text',
            //                             label: 'Infrastructure',
            //                             required: true
            //                         }
            //                     },
            //                     {
            //                         key: 'irrigation_source',
            //                         type: 'input',
            //                         templateOptions: {
            //                             type: 'text',
            //                             label: 'Irrigation Source',
            //                             required: true
            //                         }
            //                     },
            //                     {
            //                         key: 'soil_analysis',
            //                         type: 'checkbox',
            //                         templateOptions: {
            //                             label: 'Soil Analysis'
            //                         }
            //                     }
            //                 ]
            //             },
            //             {
            //                 "className": "field",
            //                 "template": "<location />"
            //             }
            //         ]
            //     }
            // ];
        }
    });

})();
