/**
 * Created by david on 19.05.17.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';
import config from './config';
import * as directives from './directives'

import user from './components/userAuth';
import main from './components/main';
import home from './components/home';
import unAuth from './components/unAuth';
import profile from './components/profile';
import admin from './components/admin';

let app = angular.module('taskApp', [
    ngCookies,
    uiRouter
])
    .config(
        ($urlRouterProvider, $locationProvider, $httpProvider) => {
            $urlRouterProvider.otherwise('/home');
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

            $httpProvider.interceptors.push('authInterceptor');
            $httpProvider.defaults.withCredentials = true;
        }
    )
    .run(($location, $cookies) => {
        if($cookies.get('token')){
            $location.path('/home');
        } else{
            $location.path('/unAuth');
        }
    })
    .factory('authInterceptor', function($rootScope, $q, $cookies, $location) {
        return {
            responseError: function(response) {
                if (response.status === 401) {
                    $location.path('/unAuth');
                    $cookies.remove('token');
                    return $q.reject(response);
                } else {
                    return $q.reject(response);
                }
            }
        };
    })
    .directive(directives);

    config(app);
    main(app);
    user(app);
    home(app);
    unAuth(app);
    profile(app);
    admin(app);
