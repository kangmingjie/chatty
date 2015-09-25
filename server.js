// var http = require('http');

var messages = ["Hello World", "Shi Jie Ni Hao"];

// var onRequest = function(req, res) {
// 	if (req.method === 'GET'){
// 		res.writeHead(200, {
// 		'Connection': 'close',
//   		'Content-Type': 'application/json',
//   		'Access-Control-Allow-Origin': '*',	
// 		})
// 		res.end(JSON.stringify(messages));
// 	}
// 	if (req.method === 'POST') {
// 		       var postData = '';
//        req.on('data', function(chunk) {
//            postData += chunk.toString();
//         });    
//         req.on('end', function() {
//   			messages.push(postData);
//                 	res.writeHead(200, {
//     	 'Connection': 'close',
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//     });
//     res.end(JSON.stringify(messages));
//        });
//     }
//     if (req.method === 'OPTIONS') {
//     	res.writeHead(200, {
//     	 'Connection': 'close',
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
//   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
//     });
//     res.end();
// }
// }
// http.createServer(onRequest).listen(8000);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.listen(8080);

app.get('/', function(req, res) {
    res.send(JSON.stringify(messages));
});

app.post('/page', function(req, res){
  var msg = req.body.data;
  messages.push(msg);
})

