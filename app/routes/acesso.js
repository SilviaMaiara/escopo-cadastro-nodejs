module.exports = function(app){
    app.get('/areaAcesso', function(req,res){
        res.render("./acesso/acesso") //carrega o arquivo .ejs
    });  
    
    app.post('/visuClientes', function(req,res){
        res.redirect('/clientes');   //redireciona
    });

    app.post('/cadastrarClientes', function(req,res){
        res.redirect('/formulario_cadastro');   
    });
};