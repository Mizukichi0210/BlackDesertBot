var Botkit = require("botkit");
var mysql = require('mysql');

var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : 'test',
  database : 'black_desert_online'
});

var controller = Botkit.slackbot({
  debug: false       
  // include "log: false" to disable logging
  // or a "logLevel" integer from 0 to 7 to adjust logging verbosity
})

controller.spawn({
    token : process.env.token
}).startRTM();

// ↓　コマンドの種類表示

controller.hears(["('登録')"], ['direct_message'], (bot,message) =>{
		var objectName = message.text.split("\n")[1];
		var substance1 = message.text.split("\n")[2];
		var substance2 = message.text.split("\n")[3];
		var substance3 = message.text.split("\n")[4];
		var substance4 = message.text.split("\n")[5];
		var substance5 = message.text.split("\n")[6];
});