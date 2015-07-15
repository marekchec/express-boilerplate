/// <reference path="typings/tsd.d.ts" />

import express          = require('express');
import bodyParser       = require('body-parser');
import errorHandler     = require('errorhandler');
import mongoose         = require('mongoose');
import AppRoutes        = require('./server/routes/Routes');

class App {

    private _expressApplication;
    private _appPort:Number = 8000;

    /**
     * Initialize application
     */
    constructor() {
        this.setAppConfig();
        this.setRoutes();
        this.startServer();
    }

    /**
     * Set express properties
     */
    setAppConfig():void {
        this._expressApplication = express();
        this._expressApplication.use(bodyParser.urlencoded({ extended: true }));
        this._expressApplication.use(bodyParser.json());
    }

    /**
     * Initialize application routes
     */
    setRoutes():void {
        var appRoutes = new AppRoutes(this._expressApplication);
    }

    /**
     * Start node server
     */
    startServer():void {
        var port = this._appPort;

        this._expressApplication.listen(port, function() {
            console.log("Express server listening on port %d", port);
        });
    }
}

mongoose.connect('mongodb://localhost/crm');
var app = new App();
