/**
 * Created by Pierre on 17/05/16.
 */

'use strict';

// Imports components
const express = require('express');
const appExpress = express();
const http = require('http').Server(appExpress);

const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const configServer = require('./utils/config/server.json');

const Router = require('./api/router/Router');

class server {

    constructor () {
        this.init();
        this.launch();
        this.initConnections();
    }

    init () {
        appExpress.set('port', process.env.PORT || configServer.port);
        appExpress.use(session({ resave: true, saveUninitialized: true, secret: 'unicorn' }));
        appExpress.use(bodyParser.json());
        appExpress.use(bodyParser.urlencoded({ extended: true }));
        appExpress.use(express.static(__dirname + '/../public'));
        
    }

    launch () {
        http.listen(appExpress.get('port'), () => {
            console.log("INFO = [Listening on port "+appExpress.get('port')+"]");
        });
    }

    initConnections () {

        const connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'root',
            database : 'microservices'
        });

        appExpress.use('/api', new Router(connection).getRouter());
    }
}

new server();