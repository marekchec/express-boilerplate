import IndexRoutes = require('./IndexRoutes');

class Routes {

    /**
     * Initialize all application routes
     * @param app
     */
    constructor(app) {
        var indexRoutes = new IndexRoutes(app);
    }
}

export = Routes;
