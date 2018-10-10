module.exports = function(application) {
    application.get('/upload', function(req, res) {
        application.app.controllers.upload.home(application, req, res);
    });
    
    application.post('/fileUpload', function(req, res) {
        application.app.controllers.upload.upload(application, req, res);
    });
}