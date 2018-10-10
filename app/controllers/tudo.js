module.exports.init = function (io) {
    io.on('connection', (socket) => {

        var rooms = ['adm', 'teste', 'setor', 'asd'];

        // console.log('Usuario conectou');
        // (function () {
        //     console.log('teste');
        // })();

        socket.on('room', function (room) {
            if (room == 'adm') {
                rooms.map((x) => {
                    socket.join(x);
                    io.sockets.in(x).emit('message', 'what is going on? Adm here!');
                });
                return;
            }
            if (rooms.indexOf(room) == -1) {
                rooms.push(room);
            }
            console.log(rooms);
            socket.join(room);
            io.sockets.in(room).emit('message', 'what is going on, party people? Group: ' + room);
        });

        socket.on('disconnect', function () {
            console.log('Usuario desconectou');
        });

        socket.on('msgParaServidor', function (data) {
            //mensagens
            socket.emit(
                'msgParaClient',
                { apelido: data.apelido, mensagem: data.mensagem }
            );

            socket.broadcast.emit(
                'msgParaClient',
                { apelido: data.apelido, mensagem: data.mensagem }
            );

            //participantes
            if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
                socket.emit(
                    'participantesParaClient',
                    { apelido: data.apelido, mensagem: data.mensagem }
                );

                socket.broadcast.emit(
                    'participantesParaClient',
                    { apelido: data.apelido, mensagem: data.mensagem }
                );
            }
        });

        socket.on('esta_digitando', function (data) {
            socket.broadcast.emit(
                'digitando',
                { apelido: data.apelido }
            );
        });

        socket.on('parou_digitar', function () {
            socket.broadcast.emit(
                'parou'
            );
        });

        socket.on('disconectou', function (data) {
            socket.broadcast.emit(
                'msgParaClient',
                {
                    usuario: data.usuario,
                    mensagem: ' se desconectou'
                }
            );
        });

    });
}