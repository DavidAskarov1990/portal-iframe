/**
 * Created by david on 21.05.17.
 */

class adminService{
    constructor($http, CONFIG, $q){
        'ngInject';

        this.$http = $http;
        this.CONFIG = CONFIG;
        this.$q = $q;
    }

    getAllUsers(){
        let deferred = this.$q.defer();
        this.$http.get(this.CONFIG.PATH + 'users')
            .then(res => {
                deferred.resolve(res.data);
            }, err => {
                deferred.reject(err);
            });
        return deferred.promise;
    }

    handlerBan(id_user, ban){
        let deferred = this.$q.defer();
        this.$http.post(this.CONFIG.PATH + 'ban', {id_user:id_user, ban: ban})
            .then(res => {
                deferred.resolve(res.data);
            }, err => {
                deferred.reject(err);
            });
        return deferred.promise;
    }
}

export default adminService;