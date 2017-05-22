/**
 * Created by david on 20.05.17.
 */

class userService {

    constructor($q, $http, $cookieStore, $state, CONFIG){
        'ngInject';

        this.$q = $q;
        this.$http = $http;
        this.$cookieStore = $cookieStore;
        this.$state = $state;
        this.CONFIG = CONFIG;
    }

    registration(username, password){
        let deferred = this.$q.defer();
        this.$http.post(this.CONFIG.PATH + 'user', {username: username, password: password})
            .then(res => {
                deferred.resolve(res.data)
            }, err => {
                deferred.reject(err)
            });

        return deferred.promise;
    }

    login(username, password){
        let deferred = this.$q.defer();
        this.$http.post(this.CONFIG.PATH + 'login', {username: username, password: password})
            .then((res) => {
                deferred.resolve(res.data);
            }, (err) => {
                deferred.reject(err)
            });
        return deferred.promise;
    }

    getUser(){
        let deferred = this.$q.defer();
        this.$http.get(this.CONFIG.PATH + 'user')
            .then((res) => {
                deferred.resolve(res.data);
            }, (err) => {
                deferred.reject(err)
            });

        return deferred.promise;
    }

    isAdmin(){
        let deferred = this.$q.defer();
        this.$http.get(this.CONFIG.PATH + 'admin')
            .then((res) => {
                deferred.resolve(res.data);
            }, (err) => {
                deferred.reject(err)
            });

        return deferred.promise;
    }

    logout(){
        this.$cookieStore.remove('token');
        this.$state.go('unAuth');
    }
}

export default userService;