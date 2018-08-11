class LivroDAO{
    constructor(connection){
        this._connection = connection
    }

    Get(callback){
        this.connection.query('SELECT * FROM Livros', callback)
    }
    GetById(id, callback){
        this._connection.query('SELECT * FROM Livros WHERE ID=?', id, callback)
    }

    Insert(item, callback){
        this._connection.query('INSERT INTO Livros SET ?', item, callback)
    }
}