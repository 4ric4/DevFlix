import express from "express"
import { sequelize } from "../database"

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    sequelize.authenticate().then(()=>{
        console.log('conexao com DB foi um sucesso')
    })
    console.log(`Servidor iniciou na porta ${PORT}`)
}

)