/**
 * Created by david on 21.05.17.
 */
import _ from 'lodash';
import '../styles/profile.less';

class profileCtrl{
    constructor(userService, CONFIG, $sce){
        'ngInject';
        this.userService = userService;
        this.CONFIG = CONFIG;
        this.$sce = $sce;
        this.profile = {};
        this.currentVideo = '';
    }

    $onInit(){
        this.userService.getUser()
            .then(res => {
                this.profile = res;
                _.forEach(res.youtubeLinks, video => {
                    let param = video;
                    param.link = this.$sce.trustAsResourceUrl(this.CONFIG.URL_YOUTUBE + video.id);
                });
                this.currentVideo = this.profile.youtubeLinks.length>0 ? this.profile.youtubeLinks[0].link : this.CONFIG.DEFAULT_LINK;
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

}
profileCtrl.$$ngIsClass = true;

export default  profileCtrl;