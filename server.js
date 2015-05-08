/// <reference path='server/typings/node/node.d.ts' />
/// <reference path='server/typings/express/express.d.ts' />
/// <reference path='server/typings/body-parser/body-parser.d.ts' />
/// <reference path='server/typings/errorhandler/errorhandler.d.ts' />
var express = require("express");
var bodyParser = require("body-parser");
var AppRoutes = require('./server/routes/Routes');
var App = (function () {
    /**
     * Initialize application
     */
    function App() {
        this._appPort = 8000;
        this.setAppConfig();
        this.setRoutes();
        this.startServer();
    }
    /**
     * Set express properties
     */
    App.prototype.setAppConfig = function () {
        this._expressApplication = express();
        this._expressApplication.use(bodyParser.urlencoded({ extended: true }));
        this._expressApplication.use(bodyParser.json());
    };
    /**
     * Initialize application routes
     */
    App.prototype.setRoutes = function () {
        var appRoutes = new AppRoutes(this._expressApplication);
    };
    /**
     * Start node server
     */
    App.prototype.startServer = function () {
        var port = this._appPort;
        this._expressApplication.listen(port, function () {
            console.log("Express server listening on port %d", port);
        });
    };
    return App;
})();
var app = new App();
