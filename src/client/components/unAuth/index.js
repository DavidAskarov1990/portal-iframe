/**
 * Created by david on 20.05.17.
 */
import './style.less';

export default (app) => {
    app
        .config(($stateProvider, $urlRouterProvider) => {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('unAuth', {
                    url: '/unAuth',
                    templateUrl: 'components/unAuth/unAuth.html'
                })
        })
}