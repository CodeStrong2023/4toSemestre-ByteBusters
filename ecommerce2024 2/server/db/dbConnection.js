import mysql from "mysql2/promise";

// Crear un pool de conexiones a la base de datos
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin", // Acá van los datos de la Base de Datos
  database: "constructora"
});

// Exportar el pool de conexiones
export default pool;
