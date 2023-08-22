// import React and quiz variable
import React, { useState } from 'react'
import { quiz } from './quizQuestions'

// Quiz is Const in guide. Making it a function here instead

export function Quiz() {
  // React hooks
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

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
    setActiveQuestion(0)
    setSelectedAnswer('')
    setSelectedAnswerIndex(null)
    setShowResult(false)
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })

  }


  return (
    <div className="quiz-container">

      {!showResult ? (

        <div>

          <h1>Quiz</h1>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                <img src={answer} width="30px" />
              </li>
            ))}
          </ul>
          <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
            {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {(result.score / questions.length) * 100 + '%'}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>

          <button onClick={onTryAgain} >Try Again</button>

        </div>
      )}

    </div>
  )
}