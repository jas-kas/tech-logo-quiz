// import React and quiz variable
import React, { useState } from 'react'
import { quiz } from './quizQuestions'
import pusheenGif from './logos/pusheen-laptop.gif'

// Quiz is Const in guide. Making it a function here instead

export function Quiz() {
  // React hooks
  const [activeQuestion, setActiveQuestion] = useState(-1)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })


  function onClickStart() {
    setActiveQuestion(0)
  }

  // in curly brackets - block

  if (activeQuestion == -1) {
    return (
      <div className="quiz-container">
        <h1 className="quiz-heading">Tech Logo Quiz ✨</h1>

        <p>
          <img src={pusheenGif} />

        </p>






        <button onClick={onClickStart} className="quizButton">
          {'Start Now'}
        </button>

      </div>
    )
  }




  // questions (variable) is an array from quiz variable - see quizQuestions.js 
  const questions = quiz.questions;

  // grabbing question from questions array and picking the question at the default state
  const question = questions[activeQuestion].question;

  // grabbing choices from questions array and picking all choices [choice is an array]
  const choices = questions[activeQuestion].choices;

  // grabbing correctAnswer from questions array
  const correctAnswer = questions[activeQuestion].correctAnswer

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
          ...prev,
          score: prev.score + 1,
          correctAnswers: prev.correctAnswers + 1,
        }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }


  function onAnswerSelected(answer, index) {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  function onTryAgain() {

    // Back to starting empty state
    setActiveQuestion(-1)
    setSelectedAnswer('')
    setSelectedAnswerIndex(null)
    setShowResult(false)
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })

  }


  if (!showResult) {

    return (

      <div className="quiz-container">
        <div>
          <h1 className="quiz-heading">Tech Logo Quiz ✨</h1>
          <h2 className="quiz-questions">{question}</h2>
          <ul className="logoPics">
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : 'unselected-answer'}>
                <img src={answer} width="200px" />
              </li>
            ))}
          </ul>
          <button onClick={onClickNext} disabled={selectedAnswerIndex === null} className={selectedAnswerIndex === null ? "disabledQuizButton" : "quizButton"}>
            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>



      </div>



    )
  }

  const yourScore = (result.score / questions.length) * 100
  function scoreResult() {
    if (yourScore >= 80) {
      return (
        <p>
          <h3>{yourScore}%</h3>
          <h3>Great job! 😊</h3>
        </p>
      )
    } else if (yourScore >= 50 && yourScore < 80) {

      return (

        <p>
          <h3>{yourScore}%</h3>
          <h3>You could aim for a higher score tbh. ⭐ </h3>
        </p>

      )
    } else {

      return (

        <p>
          <h3>{yourScore}%</h3>
          <h3>Oh no. 😔 Better luck next time!</h3>
        </p>

      )

    }
  }


  return (

    <div className="quiz-container">

      <div className="result">
        <h3 className="result-heading">Result</h3>

        <p>
          Total Score:<span> {scoreResult()}

          </span>
        </p>

        <button onClick={onTryAgain} className="quizButton" >Try Again</button>

      </div>


    </div>

  )
}