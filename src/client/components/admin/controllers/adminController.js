/**
 * Created by david on 21.05.17.
 */

import '../styles/admin.less';

class adminController{
    constructor(userService, CONFIG, adminService, $sce){
        'ngInject';

        this.userService = userService;
        this.CONFIG = CONFIG;
        this.adminService = adminService;
        this.$sce = $sce;
        this.selectUser = {};
        this.currentVideo = this.$sce.trustAsResourceUrl(CONFIG.DEFAULT_LINK);
        this.users = [];
    }

    $onInit(){
        this.getAllUsers();
        this.getUser();
    }

    getUser(){
        this.userService.getUser()
            .then(res => {
                this.profile = res;
            }, err => {
                this.userService.logout();
            })
    }

    getAllUsers(){
        this.adminService.getAllUsers()
            .then(res => {
                this.users = res;
                this.selectUser = this.users.length > 0 ? this.users[0] : {};
                this.currentVideo = this.$sce.trustAsResourceUrl(this.CONFIG.URL_YOUTUBE + this.selectUser.youtubeLinks[0].id);
            }, err => {
                this.callAlert('Error ', 'error');
            })
    }

    handlerBan(id){
        this.adminService.handlerBan(id, !this.selectUser.ban)
            .then(res => {
                this.selectUser.ban = !this.selectUser.ban;
                this.callAlert('Ban', 'successfully');
            }, err => {
                this.callAlert('Error ', 'error');
            })
    }

    selectVideo(video){
        this.currentVideo = this.$sce.trustAsResourceUrl(this.CONFIG.URL_YOUTUBE + video.id);
    }

    selectUserHandler(user){
        this.selectUser = user;
        this.currentVideo = this.$sce.trustAsResourceUrl(this.CONFIG.URL_YOUTUBE + this.selectUser.youtubeLinks[0].id);
    }

    callAlert(message, status){
        this.alerts = [];
        let alert = {
            message:message,
            status:status
        };
        this.alerts.push(alert);
    }
}

export default adminController;