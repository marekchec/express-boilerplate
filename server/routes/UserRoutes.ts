
import UserController = require('../controllers/UserController');

class UserRoutes {

//    userController: UserController;
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
        app.get('/user/:email', UserController.prototype.getUser);
    }
}

export = UserRoutes;
