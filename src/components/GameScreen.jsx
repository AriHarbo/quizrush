import { useState, useEffect } from 'react';
import { getRandomQuestion, verifyAnswer } from '../services/api';
import BackgroundSelectMode from '../backgrounds/BackgroundSelectMode'; // Importamos tu background
import BackButton from '../components/BackButton'; // Importamos el botón de volver

const GameScreen = ({ score,setScore,onGameEnd, initialLives = 3, onBackToModeSelect }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lives, setLives] = useState(initialLives);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    loadNewQuestion();
  }, []);

  const loadNewQuestion = async () => {
    try {
      setLoading(true);
      setSelectedAnswer(null);
      setShowResult(false);
      setResult(null);
      
      const question = await getRandomQuestion();
      setCurrentQuestion(question);
    } catch (error) {
      console.error('Error loading question:', error);
      alert('Error loading question. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerClick = async (answerIndex) => {
    if (selectedAnswer !== null || isVerifying) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    setIsVerifying(true);

    try {
      const verification = await verifyAnswer(currentQuestion._id, answerIndex);
      setResult(verification);

      if (verification.correct) {
        setScore(prev => prev + 100);
        setTimeout(() => {
          loadNewQuestion();
        }, 2000);
      } else {
        const newLives = lives - 1;
        setLives(newLives);
        setTimeout(() => {
          if (newLives === 0) {
            onGameEnd(score);
          } else {
            loadNewQuestion();
          }
        }, 3000);
      }
    } catch (error) {
      console.error('Error verifying answer:', error);
      alert('Error verifying answer. Please try again.');
      setSelectedAnswer(null);
      setShowResult(false);
    } finally {
      setIsVerifying(false);
    }
  };

  const getAnswerClass = (index) => {
    if (!showResult || !result) {
      return 'bg-pink-600 border-pink-700 hover:bg-pink-700';
    }
    
    if (index === selectedAnswer) {
      return result.correct 
        ? 'bg-green-500 border-2 border-green-600' 
        : 'bg-red-500 border-2 border-red-600';
    }
    
    if (index === result.correctAnswer) {
      return 'bg-green-500 border-2 border-green-600';
    }
    
    return 'bg-gray-400 border-2 border-gray-500';
  };

  const isButtonDisabled = showResult || isVerifying || loading;

  if (loading) {
    return (
      <div className="bg-yellow-500 relative w-full h-screen overflow-hidden">
        <BackgroundSelectMode/>
        <div className="absolute top-4 left-4">
            <div onClick={onBackToModeSelect}>
                <BackButton  backPath="#"/>
            </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="text-white text-2xl font-bold">Loading question...</div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="bg-yellow-500 relative w-full h-screen overflow-hidden">
        <BackgroundSelectMode/>
        <div className="absolute top-4 left-4">
            <div onClick={onBackToModeSelect}>
                <BackButton  backPath="#"/>
            </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="text-white text-2xl font-bold">No questions available</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-500 relative w-full min-h-screen overflow-hidden">
      <BackgroundSelectMode/>
      
      {/* Botón de volver */}
      <div className="absolute top-4 left-4 z-50">
        <div onClick={onBackToModeSelect}>
            <BackButton  backPath="#"/>
        </div>
      </div>

      {/* Contenedor principal del juego */}
      <div className="relative z-40 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
          
          {/* Header con vidas y puntaje */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-3">
              <span className="text-red-500 text-2xl">❤️</span>
              <span className="text-xl font-bold text-gray-800">Lives: {lives}</span>
            </div>
            <div className="text-xl font-bold text-gray-800">Score: {score}</div>
          </div>

          {/* Pregunta */}
          <h2 
            style={{ fontFamily: '"Fredoka", cursive' }}
            className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center leading-tight"
          >
            {currentQuestion.question}
          </h2>

          {/* Opciones de respuesta */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={isButtonDisabled}
                className={`p-4 rounded-xl border-2 text-white font-bold text-lg transition-all duration-300 transform 
                          ${getAnswerClass(index)} 
                          ${!isButtonDisabled ? 'hover:scale-105 hover:shadow-lg' : ''}
                          disabled:opacity-70 disabled:cursor-not-allowed
                          min-h-[80px] flex items-center justify-center text-center`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Explicación */}
          {showResult && result && (
            <div className={`p-4 rounded-xl mb-6 border-2 ${
              result.correct 
                ? 'bg-green-100 border-green-300 text-green-800' 
                : 'bg-red-100 border-red-300 text-red-800'
            }`}>
              <p className="font-bold text-lg mb-2">
                {result.correct ? '✅ Correct!' : '❌ Incorrect!'}
              </p>
              <p className="text-sm">{result.explanation}</p>
            </div>
          )}

          {/* Loading durante verificación */}
          {isVerifying && (
            <div className="text-center text-yellow-600 font-bold">
              Verifying your answer...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;