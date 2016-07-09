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

const configServer = require('./utils/config/server.json');

const Router = require('./api/router/Router');
const configDatabase = require('./utils/config/database.json');

class server {

    constructor () {
        this.init();
        this.launch();
    }

    init () {
        appExpress.set('port', process.env.PORT || configServer.port);
        appExpress.use(session({ resave: true, saveUninitialized: true, secret: 'unicorn' }));
        appExpress.use(bodyParser.json());
        appExpress.use(bodyParser.urlencoded({ extended: true }));
        appExpress.use(express.static(__dirname + '/../public'));

        var db = {info : 'ok'};

        appExpress.use('/api', new Router(db).getRouter());

    }

    launch () {
        http.listen(appExpress.get('port'), () => {
            console.log("INFO = [Listening on port "+appExpress.get('port')+"]");
        });
    }
}

new server();