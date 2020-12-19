function InfoBD(connection){
    this._connection = connection;
}

InfoBD.prototype.getListaCadastro = function(callback){
    this._connection.query('select * from cadastro', callback);
}

InfoBD.prototype.getCadastro = function(callback){
    this._connection.query('select * from cadastro where id_cliente = 1', callback);
}

InfoBD.prototype.salvarCadastro = function(cadastro,callback){
    this._connection.query('insert into cadastro set ?', cadastro, callback);
}

module.exports = function(){
    return InfoBD;
}
