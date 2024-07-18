import dotenv from 'dotenv';
import {Sequelize} from 'sequelize-typescript';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


dotenv.config();

const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const db = new Sequelize(process.env.DATABASE_URL!, {
    models:[join(__dirname + '/../models/**/*.model.ts')],
});

export default db;