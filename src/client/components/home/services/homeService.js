/**
 * Created by david on 21.05.17.
 */

class homeService{
    constructor($http, CONFIG, $q){
        'ngInject';

        this.$http = $http;
        this.CONFIG = CONFIG;
        this.$q = $q;
    }

    getVideos(){
        let deferred = this.$q.defer();

        this.$http.get(this.CONFIG.PATH + 'videos')
            .then(res => {
                deferred.resolve(res.data);
            }, err => {
                deferred.reject(err);
            });
        return deferred.promise;
    }

    addVideo(video){
        let deferred = this.$q.defer();
        this.$http.post(this.CONFIG.PATH + 'video', video)
            .then(res => {
                deferred.resolve(res.data);
            }, err => {
                deferred.reject(err);
            });
        return deferred.promise;
    }
}

export default homeService;