var models = require('../models');
exports.view = function(req, res) {
	models.Message
		.find()
		.sort('-created')
		.exec(displayMess);




		function displayMess(err, msg_posts) {
			if (err) {
				console.log(err); 
				res.send(500);
			}
			else {
				var data = {data: msg_posts};
    			res.render("index", data);
			}
		}
    
}
