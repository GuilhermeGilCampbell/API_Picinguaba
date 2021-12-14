import express from "express";
import routes from "./routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./swagger.json";

const api = express();
const PORT = process.env.PORT || 3500;

api.use(cors());
api.use(express.json());
api.use("/v1", routes);
api.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

api.listen(PORT, () => {
  console.log(`Servidor inicializado na url http://localhost:${PORT}`);
});

//API basic test with GET
api.get("/v1",(req,res)=>{
    return res.json({mensage: "Picinguaba awaits"})
})