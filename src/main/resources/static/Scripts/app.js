/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for
 * license information.
 */

'use strict';
angular.module('todoApp', ['ngRoute', 'AdalAngular'])
    .config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {
        $routeProvider.when('/Home', {
            controller: 'homeCtrl',
            templateUrl: '/Views/Home.html',
        }).when('/TodoList', {
            controller: 'todoListCtrl',
            templateUrl: '/Views/TodoList.html',
            requireADLogin: true,
        }).when("/UserData", {
            controller: "userDataCtrl",
            templateUrl: "/Views/UserData.html",
        }).otherwise({redirectTo: '/Home'});

        adalProvider.init(
            {
                instance: 'https://login.microsoftonline.com/',
                tenant: 'garagedoormanager.onmicrosoft.com',
                clientId: '03505d6e-4ed5-441b-8dab-612cea78b921',
                extraQueryParameter: 'nux=1',
                cacheLocation: 'localStorage',
            },
            $httpProvider
        );
    }]);
