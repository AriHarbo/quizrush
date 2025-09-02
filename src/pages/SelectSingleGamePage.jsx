import React, { useState } from 'react'
import BackgroundSelectMode from '../backgrounds/BackgroundSelectMode'
import BackButton from '../components/BackButton'
import SelectSingleCard from '../components/SelectSingleCard'
import GameScreen from '../components/GameScreen'

const SelectSingleGamePage = () => {
    // Estado para controlar qué modo se seleccionó
    const [selectedMode, setSelectedMode] = useState(null);
    const [finalScore, setFinalScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
  
    const classicIcon = "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z";
    const classicText = "Answer random questions until your lives run out. Go as far as you can to score big!"
    
    const dailyIcon = "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
    const dailyText = "Face the same set of questions as everyone else. One daily attempt — new challenge every day!"

    const categoriesIcon = "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
    const categoriesText = "Choose your favorite topics and answer random questions within them. Test your knowledge where it matters most!"

    const timeIcon = "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    const timeText = "Race against the clock! Answer as many questions as you can before time runs out."

    // Función para manejar la selección de modo
    const handleModeSelect = (mode) => {
        setSelectedMode(mode);
        setGameOver(false);
        setFinalScore(0);
    };

    // Función para cuando el juego termina
    const handleGameEnd = (score) => {
        setGameOver(true);
        setFinalScore(score);
        setSelectedMode(null);
    };

    // Función para volver a la selección de modos
    const handleBackToModeSelect = () => {
      console.log("handleBack apretado")
        setSelectedMode(null);
        setGameOver(false);
    };

    // Función para jugar again
    const handlePlayAgain = () => {
        setSelectedMode(selectedMode);
        setGameOver(false);
    };

    // Si hay un juego en progreso, mostrar el GameScreen
    if (selectedMode && !gameOver) {
        return (
            <GameScreen 
                onGameEnd={handleGameEnd} 
                initialLives={3} 
                mode={selectedMode}
                onBackToModeSelect={handleBackToModeSelect}
            />
        );
    }

    // Si el juego terminó, mostrar pantalla de Game Over
    if (gameOver) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 relative">
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-30"></div>
                <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-400 rounded-full opacity-30"></div>
                <div className="bg-white/90 rounded-2xl shadow-2xl p-10 text-center w-full max-w-lg border-2 border-orange-400">
                  <h2 style={{ fontFamily: '"Fredoka", cursive' }} className="text-3xl font-extrabold text-gray-800 mb-4">Game Over!</h2>
                  <p style={{ fontFamily: '"Fredoka", cursive' }} className="text-xl text-gray-600 mb-8">Your score: <span className="font-bold text-orange-500">1</span></p>

                  {/* botones */}
                  <button style={{ fontFamily: '"Fredoka", cursive' }} onClick={handlePlayAgain} className="w-full rounded-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 mb-4 transition text-lg cursor-pointer">
                    Play Again
                  </button>
                  <button style={{ fontFamily: '"Fredoka", cursive' }} onClick={handleBackToModeSelect} className="w-full bg-sky-900 hover:bg-sky-950 text-white font-semibold py-3 rounded-full transition text-lg cursor-pointer">
                    Try Another Mode
                  </button>
                </div>
            </div>
        );
    }

    return (
    <div className="bg-yellow-500 relative w-full h-screen overflow-hidden">
      <BackgroundSelectMode/>
        <div className="absolute top-4 left-4">
          <BackButton backPath="/select-mode" />
        </div>
        <div className="z-40 flex flex-col items-center justify-center min-h-screen text-center">
            <h1 style={{ fontFamily: '"Fredoka", cursive' }} className="z-40 text-5xl lg:text-7xl text-white font-bold mb-8">Choose One Mode</h1>
            
            <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-3 items-stretch'>
                <div className="h-full flex cursor-pointer z-40" onClick={() => handleModeSelect('classic')}>
                        <SelectSingleCard 
                            tittleCard="Classic" 
                            textCard={classicText} 
                            bgCard="bg-orange-400" 
                            iconCard={classicIcon} 
                            iconColor="orange" 
                            bgIconColor="bg-yellow-400"
                        />
                    </div>
                    <div className="h-full flex cursor-pointer z-40" onClick={() => handleModeSelect('daily')}>
                        <SelectSingleCard 
                            tittleCard="Daily" 
                            textCard={dailyText} 
                            bgCard="bg-orange-600" 
                            iconCard={dailyIcon} 
                            iconColor="white" 
                            bgIconColor="bg-red-600"
                        />
                    </div>
                    <div className="h-full flex cursor-pointer z-40" onClick={() => handleModeSelect('categories')}>
                        <SelectSingleCard 
                            tittleCard="Categories" 
                            textCard={categoriesText} 
                            bgCard="bg-pink-600" 
                            iconCard={categoriesIcon} 
                            iconColor="white" 
                            bgIconColor="bg-pink-800"
                        />
                    </div>
                    <div className="h-full flex cursor-pointer z-40" onClick={() => handleModeSelect('time')}>
                        <SelectSingleCard
                            tittleCard="Time Trial" 
                            textCard={timeText} 
                            bgCard="bg-red-600" 
                            iconCard={timeIcon} 
                            iconColor="violet" 
                            bgIconColor="bg-red-800"
                        />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default SelectSingleGamePage
