module.exports = (app) => {
	const controller = require('../controllers/index');

	app.get('/', (req, res) => {
		controller.home(app, req, res);
	});

}