// для запуска используем команду::::=> npm run nodemon
// Подключение express
const express = require('express');
// подключение bodyParser
const bodyParser = require('body-parser');

// Создание объекта сервера
let chat = express();
chat.use(bodyParser())
// создаём Express-приложение
let app = express();
//all - get - post

const ARRAY_RESPONSES = [];

//req => req || res => res
chat.get("/get-message", function(req, res) {
	// console.log(req.query);
	ARRAY_RESPONSES.push(res)
})

chat.post("/send-message", function(req, res) {
	let { message } = req.body;
	while (ARRAY_RESPONSES.length) {
		const client = ARRAY_RESPONSES.pop()
		client.send(`${message}`)
	}
	console.log("msg recive");
	// res.send("message send")
	// res.sendfile('index.html');
	// res.send(message)
})

chat.listen(3000, function () {
	console.log("run server 3000");
})

chat.get('/', function(req, res) {
	res.sendfile('index.html');
});
console.log('Сервер стартовал!');