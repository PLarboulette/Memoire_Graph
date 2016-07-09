/**
 * Created by Pierre on 05/07/2016.
 */


class RequestsService {

    constructor ($resource) {
        this.$resource = $resource; 
    }


    getRequests() {
        return this.$resource("/api/requests").query();
      /* return new Promise(function(resolve, reject) {
           resolve('ok');

       });*/
}}


RequestsService.$inject = ['$resource'];

export default RequestsService;

