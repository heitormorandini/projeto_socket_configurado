module.exports.home = function(application, req, res) {
    res.render('upload');
}

module.exports.upload = function(application, req, res) {
    console.log('teste');

    res.send('teste');
    res.status(200).end();
}