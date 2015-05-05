class IndexRoutes {

    /**
     * Constructor
     * @param app
     */
    constructor(app) {
        this.setRoutes(app);
    }

    /**
     * Set index routes
     * @param app
     */
    setRoutes(app):void {
        app.get('/', function(req, res) {
            console.log("Hello world!");
        });
    }
}

export = IndexRoutes;
