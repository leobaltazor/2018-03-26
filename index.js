// Подключение express
const express = require('express');
// подключение bodyParser
const bodyParser = require('body-parser');

// Создание объекта сервера
let chat = express();
chat.use(bodyParser.json())
//all - get - post

const ARRAY_RESPONSES = [];

//request => req || response => res
chat.get("/get-message", function(request, response) {
	// console.log(request.query);
	ARRAY_RESPONSES.push(response)
})

chat.post("/send-message", function(request, response) {
	let { message } = request.body;
	while (ARRAY_RESPONSES.length) {
		const client = ARRAY_RESPONSES.pop()
		client.send(`${message}`)
	}
	console.log("msg recive");
	response.send("message send")
	// response.send(message)

})

// chat.get("/index.html", function(req, res){
// 	res.send(index.html)
// })

chat.listen(3000, function () {
	console.log("run server 3000");
})