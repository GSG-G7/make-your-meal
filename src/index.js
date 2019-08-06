const server = require('./app');

server.listen(server.get('port'), () => {
    console.log(`the server running at port ${server.get('port')}`);
});
