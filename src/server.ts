import express from "express"
import { sequelize } from "../database"
import { adminJs,adminJsRouter } from "./adminjs"

const app = express()

app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.use(adminJs.options.rootPath, adminJsRouter)

app.listen(PORT, () =>{
    sequelize.authenticate().then(()=>{
        console.log('conexao com DB foi um sucesso')
    })
    console.log(`Servidor iniciou na porta ${PORT}`)
}

)