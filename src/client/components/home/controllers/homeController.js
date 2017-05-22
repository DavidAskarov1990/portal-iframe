/**
 * Created by david on 20.05.17.
 */

import _  from 'lodash';
import '../style/home.less';
class homeController{
    constructor(userService, $sce, homeService, CONFIG){
        'ngInject';

        this.userService = userService;
        this.$sce = $sce;
        this.homeService = homeService;
        this.CONFIG = CONFIG;
        this.profile = {};
        this.allVideos = [];
        this.currentVideo = this.$sce.trustAsResourceUrl(CONFIG.DEFAULT_LINK);
    }

    $onInit(){
        this.getVideos();
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

    getVideos(){
        this.homeService.getVideos()
            .then(res => {
                _.forEach(res, video => {
                    let param = video;
                    param.link = this.$sce.trustAsResourceUrl(this.CONFIG.URL_YOUTUBE + video.id);
                    this.allVideos.push(param)
                });
            }, err => {
                this.userService.logout();
        })
    }

    setSelectVideo(video){
        if(this.profile.ban){
            return;
        }
        this.currentVideo = video;
    }

    addMyList(video){
        this.homeService.addVideo({id:video.id, title:video.title})
            .then(res => {
                this.callAlert('Added successfully', 'successfully')
            }, err => {
                this.callAlert('This video is already added', 'attention')
            });
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

export default homeController;