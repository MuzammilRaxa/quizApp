import React, { useContext } from 'react'
import { QuizContext } from '../Helper/Contexts'

export default function MainMenu() {

  const { firstState, setfirstState } = useContext(QuizContext)
  return (
    <div>
      
      <button onClick={(() => { setfirstState("quiz") })} >Start Quiz</button>
    </div>
  )
}
