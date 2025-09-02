const Question = require('../models/question.js');

// Obtener pregunta aleatoria (para Clásico, Categorías y Tiempo)
const getRandomQuestion = async (req, res) => {
  try {
    const { category, difficulty, exclude } = req.query;
    
    let filter = {};
    if (category && category !== 'all') filter.category = category;
    if (difficulty && difficulty !== 'all') filter.difficulty = difficulty;
    
    // Excluir preguntas ya mostradas (para modo por tiempo)
    if (exclude) {
      const excludedIds = exclude.split(',');
      filter._id = { $nin: excludedIds };
    }

    const randomQuestion = await Question.aggregate([
      { $match: filter },
      { $sample: { size: 1 } },
      { $project: { correctAnswer: 0 } }
    ]);

    if (randomQuestion.length === 0) {
      return res.status(404).json({ message: 'No questions found' });
    }

    res.json(randomQuestion[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener pregunta específica por ID (para Modo Diario)
const getQuestionById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const question = await Question.findById(id).select('-correctAnswer');
    
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener todas las preguntas ordenadas (para generar secuencia diaria)
const getAllQuestionsOrdered = async (req, res) => {
  try {
    const { category, difficulty } = req.query;
    
    let filter = {};
    if (category && category !== 'all') filter.category = category;
    if (difficulty && difficulty !== 'all') filter.difficulty = difficulty;

    // Obtener todas las preguntas con un orden consistente
    const questions = await Question.find(filter)
      .select('-correctAnswer')
      .sort({ _id: 1 }); // Orden consistente por ID

    if (questions.length === 0) {
      return res.status(404).json({ message: 'No questions found' });
    }

    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Verificar respuesta (común para todos los modos)
const verifyAnswer = async (req, res) => {
  try {
    const { questionId, selectedAnswer } = req.body;
    
    const question = await Question.findById(questionId);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    const isCorrect = question.correctAnswer === selectedAnswer;
    
    res.json({
      correct: isCorrect,
      correctAnswer: question.correctAnswer,
      explanation: question.explanation
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener categorías disponibles
const getCategories = async (req, res) => {
  try {
    const categories = await Question.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener dificultades disponibles
const getDifficulties = async (req, res) => {
  try {
    const difficulties = await Question.distinct('difficulty');
    res.json(difficulties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Generar secuencia diaria única (para Modo Diario)
const getDailySequence = async (req, res) => {
  try {
    const today = new Date();
    const seed = today.toISOString().split('T')[0]; // Fecha como seed: "2024-01-15"
    
    // Algoritmo para generar secuencia consistente por día
    const allQuestions = await Question.find({}).select('_id');
    
    // Mezclar preguntas con seed diario (mismo orden para todos)
    const shuffledQuestions = [...allQuestions].sort((a, b) => {
      const hashA = stringHash(a._id.toString() + seed);
      const hashB = stringHash(b._id.toString() + seed);
      return hashA - hashB;
    });

    // Tomar primeras 20 preguntas para el modo diario
    const dailyQuestions = shuffledQuestions.slice(0, 20).map(q => q._id);
    
    res.json({
      date: seed,
      questionIds: dailyQuestions
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Función helper para hash consistente
function stringHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

module.exports = {
  getRandomQuestion,
  getQuestionById,
  getAllQuestionsOrdered,
  verifyAnswer,
  getCategories,
  getDifficulties,
  getDailySequence
};