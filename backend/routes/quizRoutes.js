const express = require('express');
const {
  getRandomQuestion,
  verifyAnswer,
  getCategories
} = require('../controllers/quizController.js');

const router = express.Router();

// Ruta para obtener pregunta aleatoria
router.get('/random', getRandomQuestion);

// Ruta para verificar respuesta
router.post('/verify', verifyAnswer);

// Ruta para obtener categorías
router.get('/categories', getCategories);

module.exports = router;