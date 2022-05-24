const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    serviceName : process.env.SERVICENAME,
    urlDb: process.env.MONGO_URL
}