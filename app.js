var app = require('./config/server');

//var config = require('./app/controllers/socket');

var teste = require('./app/controllers/tudo')

var server = app.listen(3000, function(){
	console.log('Servidor ON');
});

var io = require('socket.io').listen(server);

app.set('io', io);

teste.init(io);
//criar conexao por websocket
//io.on('connection', config);
/*function(socket) {
	console.log('Usuario conectou');

	socket.on('disconnect', function() {
		console.log('Usuario desconectou');
	});

	socket.on('msgParaServidor', function(data) {
		//mensagens
		socket.emit(
			'msgParaClient', 
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		socket.broadcast.emit(
			'msgParaClient', 
			{apelido: data.apelido, mensagem: data.mensagem}
		);

		//participantes
		if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
			socket.emit(
				'participantesParaClient', 
				{apelido: data.apelido, mensagem: data.mensagem}
			);

			socket.broadcast.emit(
				'participantesParaClient', 
				{apelido: data.apelido, mensagem: data.mensagem}
			);
		}
	});

	socket.on('esta_digitando', function(data) {
		socket.broadcast.emit(
			'digitando',
			{apelido: data.apelido}
		);
	});

	socket.on('parou_digitar', function() {
		socket.broadcast.emit(
			'parou'
		);
	});

	socket.on('disconectou', function(data) {
		socket.broadcast.emit(
			'msgParaClient',
			{
				usuario: data.usuario,
				mensagem: ' se desconectou'
			}
		);
	});
});*/