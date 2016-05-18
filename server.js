var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('calentada_db', ['caliente']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

/*
app.use('/contactlist',function(req, res){
	console.log("I received a GET request ");
  	db.contactlist.find(function (err, docs) {
	    //console.log(docs);
	    res.json(docs);
	  });

});
*/
app.get('/caliente', function (req, res) {
  console.log('Server received a GET request');

  db.caliente.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
})

app.post('/caliente', function (req, res) {
	console.log("Server received a POST request ");	
  	console.log(req.body);
  	db.caliente.insert(req.body, function(err, doc) {
    	res.json(doc);
  	}); 
});

app.get('/caliente/:id', function (req, res) {
	var id = req.params.id;
	console.log("Server received a GET request ");	
  	console.log(id);
  	db.caliente.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    	res.json(doc);
  	});; 
});

app.delete('/caliente/:id', function (req, res) {
	var id = req.params.id;
	console.log("Server received a DELETE request ");	
  	console.log(id);
  	db.caliente.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    	res.json(doc);
  	});; 
});

app.put('/caliente/:id', function (req, res) {
	console.log("Server received a PUT request ");	
    var id = req.params.id;
  	console.log(req.body.name);
  	db.caliente.findAndModify({
  		query: {_id: mongojs.ObjectId(id)},
  		update: {$set: {name: req.body.name, payment: req.body.payment, balance: req.body.balance}},
    	new: true}, function (err, doc) {
      		res.json(doc);
    	}
  	);
});

app.listen(3000);
console.log(" Running on 3000 ");