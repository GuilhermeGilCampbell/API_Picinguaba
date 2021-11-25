import express, {application, request} from "express"

const api = express();


// Node transforms our machine in a web server. We must listen to the port 3000
api.listen(3000,()=>console.log("Servidor inicializado na porta 3000"));

// The requests will use JSON format
api.use(express.json());

//
api.get("/",(req,res)=>{
    return res.json({mensage: "Picinguaba awaits"})
})