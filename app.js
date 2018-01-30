/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta do servidor */
var server = app.listen(999, function(){
	console.log('Servidor online');
})

var io = require('socket.io').listen(server);

app.set('io', io);

/* criar a conexão por websocket */
io.on('connection', function(socket){
	console.log('Usuário conectou');

	socket.on('disconnect', function(){
		console.log('Usuário desconectou');
	});

	// recebimento de mensagens

});