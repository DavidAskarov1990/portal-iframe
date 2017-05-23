/**
 * Created by david on 22.05.17.
 */
import './alertStyle.less';

class alertDirective{
    constructor($timeout){
        'ngInject';
        this.$timeout = $timeout;

        this.restrict = 'E';
        this.scope = {
            message: '='
        };
        this.replace = true;
        this.templateUrl = 'directives/alert/alert.html';
    }

    link(scope, element, attrs){
        this.$timeout(() => {
            scope.isHide = true;
        }, 2000);
    }
}
alertDirective.$$ngIsClass = true;

export default alertDirective;