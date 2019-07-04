const express = require('express')
require('./db/mongoose')
// cria o express e mantem rodando
//express define as pastas de router
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Servidor está na porta ' + port)
})