import express from "express";
import cors from 'cors';
import router from "./routes";
const server = express();

server.use(cors());
server.use(express.json());;

server.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('ngrok-skip-browser-warning', '*');
    next();
});

server.use(router);

server.listen(5400, () => {
    var currentTimeStamp = new Date().toLocaleTimeString();
    console.log('server running ' + currentTimeStamp);
});