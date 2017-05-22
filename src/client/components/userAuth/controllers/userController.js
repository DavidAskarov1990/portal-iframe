/**
 * Created by david on 20.05.17.
 */
import '../styles/authorization.less';
class userController{
    constructor(userService, $state, $scope){
        'ngInject';
        this.userService = userService;
        this.$state = $state;
        this.$scope = $scope;

        this.alerts =[];
        this.user = {};
        this.isAuth = true;
        this.data = {
            title:'Authorization'
        };
    }

    login(){
        this.userService.login(this.user.name, this.user.password)
            .then(res => {
                this.$scope.$emit('actionAuth',{});
                this.$state.go('profile');
            }, err => {
                this.user = {}
                this.callAlert('Verify password', 'attention');
            })
    }

    registration(){
        if(!this.user.name || this.user.name == ''){
            this.callAlert('Enter your login', 'attention');
            return;}
        else if(this.user.password != this.user.confirmPassword){
            this.user.confirmPassword = undefined;
            this.callAlert('Confirm password', 'attention');
            return;
        }
        this.userService.registration(this.user.name, this.user.password)
            .then(res => {
                this.login()
            }, err => { this.user = {} })
    }

    cancel(){
        this.$state.go('home');
    }

    handlerRegistration(){
        this.isAuth = false;
        this.data.title = 'Registration';
    }

    callAlert(message, status){
        let alert = {
            message:message,
            status:status
        };
        this.alerts.push(alert);
    }
}

export default userController;