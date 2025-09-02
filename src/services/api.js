import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/quiz';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Obtener pregunta aleatoria
export const getRandomQuestion = async (category = 'all', difficulty = 'all') => {
  try {
    const response = await api.get('/random', {
      params: { category, difficulty }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching question:', error);
    throw error;
  }
};

// Verificar respuesta
export const verifyAnswer = async (questionId, selectedAnswer) => {
  try {
    const response = await api.post('/verify', {
      questionId,
      selectedAnswer
    });
    return response.data;
  } catch (error) {
    console.error('Error verifying answer:', error);
    throw error;
  }
};

// Obtener categorías
export const getCategories = async () => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export default api;