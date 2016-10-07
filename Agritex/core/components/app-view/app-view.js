;
(function () {
    'use strict';

    app.component('appView', {
        transclude: true,
        replace: true,
        template: '<sidebar-menu></sidebar-menu><div class="ui grid custom"><div class="column wide app-view" ui-view></div></div>'
    });

})();
