const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');
class Server{
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.loginPath = '/auth';
        this.usuariosPath = '/api/usuarios';
        this.database();
        this.middlewares();
        this.routes();

    }
    database(){
        dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.loginPath,require('../routes/auth'));
       this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`)
        });
    }
}
module.exports= Server;