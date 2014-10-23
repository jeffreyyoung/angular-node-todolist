var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
var todos = [];
var id = 0;

app.get('/api/todos', function(req,res){
	res.json(todos)
})

app.post('/api/todos', function(req, res){
	var todo = {};
	todo.id = id;
	todo.text = req.body.text
	todos.push(todo)
	var response = {
	    status  : 200,
	    success : 'Added Successfully',
	    todo: todo
	}
	id++
	res.end(JSON.stringify(response));
})

app.delete('/api/todos/:id', function(req, res){
	var id = parseInt(req.params.id)
	for (var i = 0; i < todos.length; i++){
		if (todos[i].id == id){
			todos.splice(i, 1);
				var response = {
			    status  : 200,
			    success : 'Added Successfully'
			}
			res.end(JSON.stringify(response));
		}
	}
})

app.listen(3000);