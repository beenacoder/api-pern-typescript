import express from 'express';
import routers from './routers';
import db from './config/db';


//Conectar a Base de Datos

async function  connectDB() {
    try {
        await db.authenticate();
        db.sync();
        console.log("Base de datos conectada");
    } catch (error) {
        console.log("Error en la base de datos ", error);
    }
}

connectDB();


const server = express();

server.use(express.json());

server.use('/api/products', routers);

export default server;