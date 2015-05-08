var IndexRoutes = (function () {
    /**
     * Constructor
     * @param app
     */
    function IndexRoutes(app) {
        this.setRoutes(app);
    }
    /**
     * Set index routes
     * @param app
     */
    IndexRoutes.prototype.setRoutes = function (app) {
        app.get('/', function (req, res) {
            res.send('Hello World!!!!');
        });
    };
    return IndexRoutes;
})();
module.exports = IndexRoutes;
