import React, { useState } from "react";
import MainMenu from "./Components/MainMenu";
import EndResult from "./Components/MainMenu";
import QuizPlay from "./Components/QuizPlay";


function App() {

  const [quizState, setQuizState] = useState(menu)

  return (

    <div className="App">

      <h1> Quiz App </h1>
      {quizState === menu && <MainMenu />}
      {quizState === menu && <EndResult />}
      {quizState === menu && <QuizPlay />}


    </div>
  );
}

export default App;
