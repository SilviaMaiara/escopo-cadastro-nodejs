module.exports = function(application){
    application.get('/', function(req,res){
        application.app.controllers.home_controller.index(application,req,res);
    });   

    application.post('/area_acesso', function(req,res){
        application.app.controllers.access_controller.access(application,req,res)
    });
};