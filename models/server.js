// Esta clase de server, para crear una instancia de Express

const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        //Middlewares: funciones que añaden otra funcionalidad al webserver, 
        //es una función que se ejecutará siempre cuando se ejecute nuestro servidor
        this.middlewares();


        //Rutas de mi aplicación
        this.routes();

    }

    //método
    middlewares(){

        //CORS configurarlo para permitir/denegar accesos desde otros sitios
        this.app.use(cors());

        //Lectura y Parseo del body
        this.app.use(express.json());

        //directorio público
        this.app.use(express.static('public')); //use: palabra clave para decir que esto es un middleware
    }

    // método para definir las rutas
    routes(){ 

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    //método para "escuchar"
    listen(){ 
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto: ', this.port);
        });
    }


}


module.exports = Server;