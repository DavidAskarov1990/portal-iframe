/**
 * Created by david on 20.05.17.
 */

import * as controllers from './controllers';
import * as services from './services';

export default (app) => {
    app
        .service(services)
        .controller(controllers)
        .config(($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'components/home/views/home.html',
                    controller: controllers.homeController,
                    controllerAs: '$ctrl'
                })
        })
}