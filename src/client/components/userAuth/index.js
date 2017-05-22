/**
 * Created by david on 20.05.17.
 */

'use strict';
import * as controllers from './controllers';
import * as services from './services';

export default (app) => {
    app
        .controller(controllers)
        .service(services)
        .config(($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('user', {
                    url: '/user',
                    templateUrl: 'components/userAuth/views/authorization.html',
                    controller: controllers.userController,
                    controllerAs: '$ctrl'
                })
        })
}

