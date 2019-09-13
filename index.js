//Back-end
const server = require('server');
const {get,socket}=server.router;
const {file}=server.reply;
const chat =require('./chat');

//Servidor
server([
    //Mostrar archivo principal
    get('/',file('./public/index.html')),

    //Rutas del chat
    socket('login',chat.login),
    socket('message',chat.message),
    socket('logout',chat.logout),
    socket('disconnet',chat.logout),

    //Peticion sis respuesta
    get('*',ctx=>404)
]);