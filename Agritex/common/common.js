;
(function() {
    'use strict';

    app.directive('searchForm', function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'common/search-form.html'
        };
    });

    app.directive('deleteConfirmation', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
              item: '@deleteItem'
            },
            templateUrl: 'common/delete-confirmation.html'
        };
    });

    app.directive('uiSelect', function() {
        return {
            restrict: 'A',
            scope: {},
            link: function ($scope, element) {
                $(element).dropdown();
            }
        };
    });
})();