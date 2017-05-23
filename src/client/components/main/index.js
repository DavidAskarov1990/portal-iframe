/**
 * Created by david on 20.05.17.
 */

import './main.less';
class mainCtrl{
    constructor(userService, $state, $cookies, $scope){
        'ngInject';
        this.userService = userService;
        this.$state = $state;
        this.$cookies = $cookies;
        this.user = {};
        this.is_admin = false;
        this.workMongoDB = false;
        $scope.$on('actionAuth', (event, data) => {
            this.action = this.$cookies.get('token') ? 'Logout' : 'Log in';
            this.isAdmin();
        })
    }

    $onInit(){
        this.action = this.$cookies.get('token') ? 'Logout' : 'Log in';
        this.isAdmin();
    }

    handler(){
        if(this.action == 'Log in'){
            this.$state.go('user');
        } else {
            this.userService.logout();
            this.action = 'Log in';
        }
    }

    isAdmin(){
        this.userService.isAdmin()
            .then(res => {
                this.is_admin = res;
            }, err => {
            })
    }
}

mainCtrl.$$ngIsClass = true;

export default (app) => {
    app.controller('mainCtrl', mainCtrl)
}