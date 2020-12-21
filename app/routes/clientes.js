module.exports = function(app){
    app.get('/clientes', function(req,res){
        var connection = app.config.dbConnection();
        var informacoesBD =  new app.app.models.InfoBD(connection);
        informacoesBD.getListaCadastro(function(error, result){
            res.render("./listaClientes/listaClientes", {cadastro : result});
        });        
    });  
    
    app.post('/cadastrarClientes', function(req,res){
        res.redirect('/formulario_cadastro');   
    });
};