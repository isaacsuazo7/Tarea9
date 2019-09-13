//Guardando el nombre del user en el backend y comunicarlo a todos
exports.login=ctx=>{
    ctx.socket.user=ctx.data;
    console.log(`Login: ${ctx.socket.user}`);
    return ctx.io.emit('login',{
        user: ctx.socket.user,
        time: new Date()
    })
}

//Reenviando mensajes
exports.message=ctx=>{
    console.log(`Message: ${ctx.data}`);
    ctx.io.emit('message', {
        user: ctx.socket.user,
        text: ctx.data,
        time: new Date()
    })
}

//Mostrarle a todos el logout
exports.logout = ctx =>{
    console.log('Logout:', ctx.socket.user);
    if(!ctx.socket.user) return; //Entren y salgan sin hacer login
    return ctx.io.emit('logout',{
        user: ctx.socket.user,
        time: new Date()
    })
}