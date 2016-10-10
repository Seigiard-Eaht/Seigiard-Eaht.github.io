;
(function () {
    'use strict';

    app.component('sidebarMenu', {
        templateUrl: 'core/components/sidebar/sidebar.html',
        controller: sidebarMenu
    });

    app.component('sidebarItem', {
        bindings: {
            item: '<'
        },
        templateUrl: 'core/components/sidebar/sidebar-item.html'
    });

    function sidebarMenu() {
        var self = this;
        self.menu = [
            {
                name: 'Dashboard', link: 'dashboard',
                menu: [
                    { name: 'Calendar', link: 'dashboard.calendar' },
                    { name: 'Reports', link: 'dashboard.reports', label: '22' },
                    { name: 'Map', link: 'dashboard.map' },
                    { name: 'Log', link: 'dashboard.log' }
                ]
            },
            {
                name: 'Fields & Farms', link: 'fields',
                menu: [
                    { name: 'Fields', link: 'fields.list' },
                    { name: 'Farms', link: 'fields.farms' },
                    { name: 'Areas', link: 'fields.areas' }
                ]
            },
            {
                name: 'Activities & Types', link: 'activities',
                menu: [
                    { name: 'Activities', link: 'activities.list' },
                    { name: 'Types', link: 'activities.types' }
                ]
            },
            {
                name: 'Season Scheduling', link: 'scheduling'
            },
            {
                name: 'Accounts', link: 'accounts',
                menu: [
                    { name: 'Users', link: 'accounts.users' },
                    { name: 'Roles', link: 'accounts.roles' }
                ]
            }
        ];
    }

})();
