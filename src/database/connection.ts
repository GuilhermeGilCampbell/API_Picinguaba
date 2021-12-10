import knex from "knex";
<<<<<<< HEAD
import knexfile from "../../knexfile";
=======
import knexfile from "../../knexfile"
>>>>>>> d4b4731c744f207e1e32a805321a01601795126f

export default knex(knexfile["development"]);
console.log("Conexão com o banco de dados realizada com sucesso");
