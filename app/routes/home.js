module.exports = function(app){
    app.get('/', function(req,res){
        res.render("./home/index"); //carrega o arquivo .ejs
    });   

    app.post('/area_acesso', function(req,res){
        res.redirect('/areaAcesso');   
    });
};