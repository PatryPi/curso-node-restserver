//en este archivo creamos funciones y las exportamos

const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit} = req.query;


    res.json({ //enviamos un objeto a json, no envía un string
        msg: 'get API - Controlador',
        q, 
        nombre, 
        apikey, 
        page, 
        limit
    })
}

const usuariosPost = (req, res = response) => {

    //const body = req.body;
    //desestructurando la línea anterior:
    const {nombre, edad} = req.body;

    res.json({ //enviamos un objeto a json, no envía un string
        msg: 'post API - Controlador',
        nombre, edad
    })
}


const usuariosPut = (req, res = response) => {

    const { id }= req.params; // es lo mismo que: id = req.params.id;

    res.json({ //enviamos un objeto a json, no envía un string
        msg: 'put API - Controlador',
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({ //enviamos un objeto a json, no envía un string
        msg: 'patch API - Controlador'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({ //enviamos un objeto a json, no envía un string
        msg: 'delete API - Controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}