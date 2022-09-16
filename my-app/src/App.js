import './App.css';
import React, { useState, useContext } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import EndScreen from './Components/EndScreen';

import { QuizContext } from './Helper/Contexts'

function App() {

  const [firstState, setfirstState] = useState('menu');



  return (
    <div className='flex justify-center '>
      <div className='border-4 border-zinc-400 h-[657px] w-[525px] '>
        <h1 className='text-2xl	font'> Question 1 of 20</h1>
        <QuizContext.Provider value={{ firstState, setfirstState }} >
          {firstState === "menu" && <MainMenu />}
          {firstState === "quiz" && <Quiz />}
          {firstState === "endScreen" && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;

