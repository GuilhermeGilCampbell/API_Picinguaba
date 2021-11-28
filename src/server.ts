import express, {application, request} from "express"
import routes from "./routes";


const api = express();


// Node transforms our machine in a web server. We must listen to the port 3000
api.listen(3000,()=>console.log("Servidor inicializado na porta 3000"));

// The requests will use JSON format
api.use(express.json());

// API REST threated and correctly sent to the right controllers
api.use(routes);

//API basic test with GET
api.get("/",(req,res)=>{
    return res.json({mensage: "Picinguaba awaits"})
})