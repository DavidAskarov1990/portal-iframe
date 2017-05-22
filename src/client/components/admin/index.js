/**
 * Created by david on 21.05.17.
 */

import * as controllers from './controllers';
import * as services from './services';

export default (app) => {
    app
        .service(services)
        .controller(controllers)
        .config(($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/admin');

            $stateProvider
                .state('admin', {
                    url: '/admin',
                    templateUrl: 'components/admin/views/admin.html',
                    controller: controllers.adminController,
                    controllerAs: '$admin'
                })
        })
}