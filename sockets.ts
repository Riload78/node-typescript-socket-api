import { Socket, Server } from "socket.io";

const sockets = (io : Server) : void => {
    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    })
}

export default sockets