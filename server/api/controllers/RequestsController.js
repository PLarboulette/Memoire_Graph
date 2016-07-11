/**
 * Created by pierre on 10/07/16.
 */


const RequestsService = require('./../services/RequestsService');

module.exports = class RequestsController {

    constructor (connection) {
        this.connection = connection;
        this.requestsService = new RequestsService(this.connection);
    }
    
    getRequests (req, res, callback) {
        this.requestsService.getRequests(req, res, callback); 
    }
};

