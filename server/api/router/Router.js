/**
 * Created by pierre on 17/05/16.
 */

'use strict';

// Imports
const RouterExpress = require('express').Router();
const RequestsController = require('./../controllers/RequestsController');

module.exports = class Router {

    constructor (connection) {
        this.router = RouterExpress;
        this.connection = connection;
        this.requestsController = new RequestsController(this.connection);
        this.init();
        this.requestsRoutes();
    }

    getRouter () {
        return this.router;
    }

    init () {
        this.router.use(function timeLog(req, res, next) {
            next();
        });

        this.router.get('/', (req, res) => {
            res.send('Home page');
        });
    }

    requestsRoutes () {

        // Return all the requests
        this.router.get("/requests", (req, res) => {
            this.requestsController.getRequests(req, res, (err, nodes) => {
                if (err) res.status(501).json(err.message);
                res.status(200).json(nodes);
            });
        });
    }

};