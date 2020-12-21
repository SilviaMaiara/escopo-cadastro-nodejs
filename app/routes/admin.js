module.exports = function(app){
    app.get('/formulario_cadastro', function(req,res){
        res.render("admin/form_cadastro", {validacao: {}, cadastro : {} });
    });  

    app.post('/cadastro/salvar', function(req,res){
        var cadastro = req.body;

        req.assert('nome','Nome é obrigatorio').notEmpty();
        req.assert('cpf','CPF é obrigatorio').notEmpty();
        req.assert('celular','Celular é obrigatorio').notEmpty()

        var erros = req.validationErrors();
        
        if (erros){
            res.render("admin/form_cadastro", {validacao: erros,  cadastro: cadastro});
            return;
        }

        var connection = app.config.dbConnection();
        var informacoesBD = new app.app.models.InfoBD(connection);

        informacoesBD.salvarCadastro(cadastro, function(error, result){
            res.redirect('/clientes');
        });    
    });
}