import IndexRoutes = require('./IndexRoutes');
import UserRoutes = require('./UserRoutes');

class Routes {

    /**
     * Initialize all application routes
     * @param app
     */
    constructor(app) {
        var indexRoutes = new IndexRoutes(app);
        var userRoutes  = new UserRoutes(app);
    }
}

export = Routes;
