var IndexRoutes = require('./IndexRoutes');
var Routes = (function () {
    /**
     * Initialize all application routes
     * @param app
     */
    function Routes(app) {
        var indexRoutes = new IndexRoutes(app);
    }
    return Routes;
})();
module.exports = Routes;
