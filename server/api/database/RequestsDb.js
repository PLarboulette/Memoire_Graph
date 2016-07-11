/**
 * Created by pierre on 10/07/16.
 */


module.exports = class RequestsDb {

    constructor (connection) {
        this.connection = connection;
    }

    getRequests (req, res, callback) {
        this.instances = [];
        this.requests = [];
        this.result = [];

        this.connection.query('SELECT * FROM Requests ORDER BY timestamp ASC, step',  (err, requests) => {

            for (var i = 0 ; i < requests.length; i++) {
                this.indexTarget = 0;
                if (i < requests.length -1) {
                    this.indexTarget = i +1;
                }
                this.requests.push({
                    source : requests[i].instance,
                    target : requests[this.indexTarget].instance,
                    request : requests[i].uuid
                });
            }
            this.result.push({
                requests : this.requests
            });

            this.getInstances (req, res, callback, this.result);
        });
    }

    getInstances (req, res, callback, result) {
        this.connection.query('SELECT instance FROM Requests',  (err, instances) => {
            for (var i = 0 ; i < instances.length; i++) {
                if (this.instances.indexOf(instances[i].instance)== -1) {
                    this.instances.push(instances[i].instance);
                }
            }
            result.push({
                instances : this.instances
            });

            this.sendresult (req, res, callback, result);

        });
    }

    sendresult(req, res, callback, result) {
        callback(null, result);

    }

};