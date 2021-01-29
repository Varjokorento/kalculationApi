// config.js
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname+'/.env' });


export const typeOrmConfig = {
    port: process.env.PORT
}