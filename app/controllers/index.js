module.exports = {
	home
}

function home(app, req, res){
	res.render("index", {validacao: {}});
}