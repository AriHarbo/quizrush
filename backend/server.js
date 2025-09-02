const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const quizRoutes = require('./routes/quizRoutes');

// 1. Cargar variables de entorno
dotenv.config();

// 2. Conectar a la base de datos
connectDB();

// 3. Crear la aplicación Express
const app = express();
const PORT = process.env.PORT || 5000;

// 4. Configurar middlewares
app.use(cors()); 
app.use(express.json());

// 5. Usar las rutas
app.use('/api/quiz', quizRoutes);

// 6. Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: '¡El API de Quiz funciona!' });
});

// 7. Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});