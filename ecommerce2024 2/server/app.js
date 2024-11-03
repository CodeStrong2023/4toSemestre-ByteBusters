import express from "express";
import cors from "cors";
import mercadopago from "mercadopago";
import mysql from "mysql2/promise";

// SDK de Mercado Pago
import { MercadoPagoConfig, Preference } from 'mercadopago';
// Agrega credenciales
const client = new MercadoPagoConfig({ 
    accessToken: process.env.ACCESS_TOKEN, 
});
// Creación de tabla "clientes" si no existe
async function createClientesTable() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user:   process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'admin',
        database: process.env.DB_NAME || 'constructora'
    });

    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS clientes (
            id INT AUTO_INCREMENT PRIMARY KEY,
            usuario VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL,
            telefono VARCHAR(20),
            email VARCHAR(100) NOT NULL
        )
    `;

    await connection.execute(createTableQuery);
    await connection.end();
    console.log("Tabla 'clientes' verificada/creada con éxito.");
}

// Ejecuta la creación de la tabla
createClientesTable().catch(error => console.error("Error al crear la tabla 'clientes':", error));

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("SERVER ACTIVADO");
});

app.post("/create_preference", async (req, res) => {
    try {
        const preference = {
            items: [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: "ARS",
                },
            ],
            back_urls: {
                success: "https://campus.frsr.utn.edu.ar/moodle/mod/quiz/view.php?id=47895",
                failure: "https://campus.frsr.utn.edu.ar/moodle/mod/quiz/view.php?id=47895",
                pending: "https://campus.frsr.utn.edu.ar/moodle/mod/quiz/view.php?id=47895",
            },
            auto_return: "approved",
        };

        const result = await mercadopago.preferences.create(preference);
        res.json({
            id: result.body.id,
        });
    } catch (error) {
        console.log("Error al crear la preferencia:", error);
        res.status(500).json({
            error: "Error al crear la preferencia"
        });
    }
});

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});
