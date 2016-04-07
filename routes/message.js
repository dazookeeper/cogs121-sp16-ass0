var models = require('../models');
exports.send = function(req,res){

	var newMess = new models.Message({
		"email":req.body.email,
		"content":req.body.content,
		"created":new Date()
	});
	console.log(req.body);

	newMess.save(postsave);

	function postsave(err) {
		if (err) {
			console.log(err); 
			res.send(500);
		}

			res.redirect('/');
	}

};