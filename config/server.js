/* importar o módulo do framework express */
var express = require('express');

/* importar o módulo do body-parser */
var bodyParser = require('body-parser');

/* iniciar o objeto do express */
var app = express();

/* importar o módulo do express-validator */
var expressValidator = require('express-validator');

/* setar as variáveis 'view engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar o middleware express.static */
app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar middleware de CORS */
app.use(require('./cors.js'));

/* configurar middleware do Express Validator */
app.use(expressValidator());

(function loadRoutes() {
	require('../app/routes/chat.js')(app);
	require('../app/routes/index.js')(app);
})();

/* exportar o objeto app */
module.exports = app;