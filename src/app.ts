import express, {Request, Response} from "express"
import router from "./routes/routes"
import cors from "cors"

function createApp(){
    const app = express()

    app.use(express.json())
    app.use("/api", router)

    //const corsOptions = {
        //origin: ["http://client001.sistem.com", "http://client002.sistem.com", "http://gov.br"],
        //methods: ["GET", "UPDATE"]
    //}
    
    //função "crors" chama "const corsOptions" comentada acima
    app.use(cors())


    return app
}

export default createApp

