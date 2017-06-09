//forma de crear un servidor de forma "sencilla"
var express = require('express');
var app = express();

/*app.get("/", function(req, res){
	res.send("Hola :)");  //cuando le haga una petición a la ... debe responder HOla
});*/

app.use(express.static(__dirname + '/public/'));


app.listen(3000, function(){
	console.log("servidor escuchando en localhost:3000");
});