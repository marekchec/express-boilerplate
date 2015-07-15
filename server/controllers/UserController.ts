import User = require('../models/User');

class UserController
{	
	createUser(req, res)
	{
		var user = req.body;
		var user = new User(user);
		user.save((err) => {
			if (err) {
				return res.send(501);				
			} 
			res.send(user);									
		});
		
	}
	
	getUser(req, res)
	{				
		User.findOne({ email: req.params.email },  (err, user) => {
			if (err) {
				return res.send(501)
			}			
			res.send(user);
		});
	}	
}

export = UserController;