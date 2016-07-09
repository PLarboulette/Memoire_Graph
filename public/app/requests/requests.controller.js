/**
 * Created by Pierre on 17/06/16.
 */

class RequestsController  {

    constructor ($state, RequestsService) {
        this.$scope.result = [] ;
        RequestsService.getRequests().$promise.then((requests) => {
            this.result = requests;
        });
    }
}

RequestsController.$inject = ['$state', 'RequestsService'];

export default RequestsController;