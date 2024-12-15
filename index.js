require('dotenv').config()
const express = require('express')
const cors = require('cors')
require ('./dbConnection/connection')
const router= require('./routers/router')


const csServer = express()

csServer.use(cors())
csServer.use(express.json())
csServer.use(router)



const PORT = 3000 || process.env.PORT

csServer.listen(PORT,()=>{
    console.log(`cs server started at ${PORT} and waiting for client request`);
})

csServer.get('/',(req,res)=>{
    res.status(200).send(`<h1 style="color:Red;">cs server started and waiting for client request!!!</h1>`)
})

