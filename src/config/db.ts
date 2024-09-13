import dotenv from 'dotenv';
import {Sequelize} from 'sequelize-typescript';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Product from '../models/Product.model';


dotenv.config();

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const db = new Sequelize(process.env.DATABASE_URL!, {
    models:[join(__dirname + '/../models/**/*')],
    logging: false,
});

db.addModels([Product]);

export default db;