/**
 * Created by david on 21.05.17.
 */
import * as controllers from './controllers';

export default (app) => {
    app
        .controller(controllers)
        .config(($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/profile');
            $stateProvider
                .state('profile', {
                    url: '/profile',
                    templateUrl: 'components/profile/views/profile.html',
                    controller: controllers.profileCtrl,
                    controllerAs: '$ctrl'
                })
        })
}
