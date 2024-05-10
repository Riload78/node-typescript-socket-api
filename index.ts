import app from "./app";
import sockets from "./sockets";

import { createServer } from "node:http";
import { Server } from 'socket.io';

const port = process.env.PORT || 3030;
const server = createServer(app);
const io = new Server(server);

sockets(io)

server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
