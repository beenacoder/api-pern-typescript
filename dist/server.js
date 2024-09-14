import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routers from './routers';
import db from './config/db';
//Conectar a Base de Datos
async function connectDB() {
    try {
        await db.authenticate();
        db.sync();
        console.log("Base de datos conectada");
    }
    catch (error) {
        console.log("Error en la base de datos ", error);
    }
}
connectDB();
//Instanciamos express
const server = express();
const corsOptions = {
    origin: (origin, callback) => {
        if (origin === process.env.CLIENT_URL) {
            callback(null, true);
        }
        else {
            callback(new Error('Error de CORS'));
        }
    }
};
server.use(cors(corsOptions));
//Leer datos de formnularios
server.use(express.json());
server.use(morgan('dev'));
server.use('/api/products', routers);
server.get('/api', (req, res) => {
    res.json({ msg: 'Desde API' });
});
export default server;
//# sourceMappingURL=server.js.map