"use client";
import React, { useState } from 'react';

// Define your questions, options, and answers
const questions = [
  {
    questionText: 'What is deforestation?',
    answerOptions: [
      { answerText: 'Planting more trees than are cut down', isCorrect: false },
      { answerText: 'The process of clearing the forested lands', isCorrect: true },
      { answerText: 'Rainfall in forested areas', isCorrect: false },
      { answerText: 'Conservation of forest', isCorrect: false },
    ],
  },
  {
    questionText: 'What is a primary cause of deforestation?',
    answerOptions: [
      { answerText: 'Natural wildfires', isCorrect: false },
      { answerText: 'Logging for timber and paper products', isCorrect: true },
      { answerText: 'Increased rainfall', isCorrect: false },
      { answerText: 'Animal migration', isCorrect: false },
    ],
  },
  {
    questionText: 'How does deforestation contribute to climate change?',
    answerOptions: [
      { answerText: 'By increasing the Earth\'s temperature', isCorrect: false },
      { answerText: 'By decreasing the amount of land for farming', isCorrect: false },
      { answerText: 'By releasing stored carbon dioxide when trees are cut or burned', isCorrect: true },
      { answerText: 'By creating more space for urban development', isCorrect: false },
    ],
  },
  {
    questionText: 'Which region is most affected by deforestation?',
    answerOptions: [
      { answerText: 'The Arctic', isCorrect: false },
      { answerText: 'European forests', isCorrect: false },
      { answerText: 'The Amazon rainforest', isCorrect: true },
      { answerText: 'Sahara desert', isCorrect: false },
    ],
  },
  {
    questionText: 'What can be done to reduce deforestation?',
    answerOptions: [
      { answerText: 'Increased logging activities', isCorrect: false },
      { answerText: 'Promoting sustainable forest management practices', isCorrect: true },
      { answerText: 'Expansion of urban areas', isCorrect: false },
      { answerText: 'Reduction in the use of paper products', isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
