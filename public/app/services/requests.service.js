/**
 * Created by Pierre on 05/07/2016.
 */


class RequestsService {

    constructor ($resource) {
        this.$resource = $resource; 
    }

    getNodesFromA () {
        return this.$resource('/api/etcd/requests/Nenya').query();
    }

    createNode (node) {
        this.$resource('/api/requests').save(node);
    }

    getRequests() {
        console.log('requests service');
        // return this.$resource("/api/requests").query(); 

       return new Promise(function(resolve, reject) {
           resolve('ok');

       });
}}


RequestsService.$inject = ['$resource'];

export default RequestsService;

