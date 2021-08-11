require('dotenv').config()
const config ={
    DB_HOST:process.env.DB_HOST||'localhost',
    DB_USER:process.env.DB_USER||'root',
    DB_PASSWORD:process.env.DB_PASS||'123',
    DB:process.env.DB||'myDatabase',
    PORT:process.env.PORT||5000
}
module.exports = config;
