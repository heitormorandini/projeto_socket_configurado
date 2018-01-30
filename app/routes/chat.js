module.exports = (app) => {
	const controller = require('../controllers/chat');

	app.post('/chat', (req, res) => {
		controller.iniciaChat(app, req, res);
	});

	app.get('/chat', (req, res) => {
		controller.iniciaChat(app, req, res);
	});
}