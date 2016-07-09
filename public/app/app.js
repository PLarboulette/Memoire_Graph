/**
 * Created by Pierre on 17/06/16.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularResource from 'angular-resource';
import angularMaterial from 'angular-material';

import Requests from './requests/requests';

import RequestsService from './services/requests.service'

angular.module('Graph',
    [uiRouter, angularResource, angularMaterial]
)

    .config (($stateProvider, $urlRouterProvider) => {
        "ngInject";

        $urlRouterProvider.otherwise('/requests');
        
        $stateProvider
            .state('requests', {
                url: '/requests',
                template: Requests.template,
                controller : Requests.controller,
                controllerAs : Requests.controllerAs,
                resolve : Requests.resolve
            });
    })
    .service('RequestsService', RequestsService);

