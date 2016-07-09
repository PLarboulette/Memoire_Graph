/**
 * Created by pierre on 17/05/16.
 */

'use strict';

// Imports
const RouterExpress = require('express').Router();

module.exports = class Router {

    constructor (database) {
        this.router = RouterExpress;
        this.database = database;
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

        // Return all the Services for a given application
        this.router.get("/requests", (req, res) => {
            console.log("ok requête");

           /* this.nodesController.getNodesFromA(req, res, (err, nodes) => {
                if (err) res.status(501).json(err.message);
                res.status(200).json(nodes);
            });*/
        });
    }

};