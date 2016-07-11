/**
 * Created by pierre on 10/07/16.
 */


const RequestsDb = require('./../database/RequestsDb');

module.exports = class RequestsService {

    constructor (connection) {
        this.connection = connection;
        this.requestsDb = new RequestsDb(this.connection);
    }

    getRequests (req, res, callback) {
        this.requestsDb.getRequests(req, res, callback);
    }
};
