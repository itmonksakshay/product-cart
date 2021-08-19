require('dotenv').config()
const config ={
    DB_HOST:process.env.DB_HOST||'http://localhost',
    DB_USER:process.env.DB_USER||'root',
    DB_PASSWORD:process.env.DB_PASS||'123',
    DB:process.env.DB||'myDatabase',
    PORT:process.env.PORT||5000,
    DOMAIN:process.env.DOMAIN_URL||"http://localhost",
}
module.exports = config;
