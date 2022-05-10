require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
  throw new Error('There is no configuration with API key and token')
}