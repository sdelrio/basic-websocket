var WebSocketServer = require('ws').Server

/* Listen on port 8080 */
wss = new WebSocketServer({ port: 8080 });

/* Add listener */
wss.on('connection',function connection(ws) {
    /* Sent message */
    ws.on('message',function incoming(message) {
        console.log('received: %s', message);
        /* Echo received message */
        ws.send(message);
    });
    ws.send('Conectado');
});
