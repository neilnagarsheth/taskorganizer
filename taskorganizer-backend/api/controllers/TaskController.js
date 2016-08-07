/**
 * TaskController
 *
 * @description :: Server-side logic for managing Tasks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	getTasks: function(req, res){
		Task.find().exec(function(error, tasks){
			if(error){
				return res.json(error);
			} else {
				return res.json(tasks);
			}
		});
	},

	createTask: function(req, res){
		var task = {};
		task.title = req.body.title;
		task.description = req.body.description;
		Task.create(task).exec(function(error, task) {
			if(error){
				return res.json(error);
			} else {
				return res.json(task);
			}
		})
	},

	updateTask: function(req, res){
		var task = {};
		task.title = req.body.title;
		task.description = req.body.description;
		task.isDone = req.body.isDone;
		Task.update({id: req.params.id}, task).exec(function(error, task) {
			if(error){
				return res.json(error);
			} else {
				return res.json(task);
			}
		});
	},

	deleteTask: function(req, res){
		Task.destroy({id: req.params.id}).exec(function(error){
			if(error){
				return res.json(error);
			} else {
				return res.ok();
			}
		})
	}

};

