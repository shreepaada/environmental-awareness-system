"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";

const questions = [
  {
    question: "What is the primary cause of deforestation?",
    options: ["Agriculture", "Logging", "Urbanization", "All of the above"],
    answer: "All of the above",
  },
  {
    question: "Which of the following is a benefit of reforestation?",
    options: [
      "Increases biodiversity",
      "Reduces carbon footprint",
      "Enhances soil quality",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "What gas do trees absorb from the atmosphere, helping to combat climate change?",
    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    answer: "Carbon dioxide",
  },
  {
    question:
      "Which country is known for its massive deforestation rates due to cattle ranching?",
    options: ["USA", "Brazil", "India", "Russia"],
    answer: "Brazil",
  },
  {
    question:
      "What type of reforestation involves planting different tree species to increase biodiversity?",
    options: ["Monoculture", "Polyculture", "Agroforestry", "Biochar"],
    answer: "Polyculture",
  },
  {
    question: "Deforestation significantly affects the water cycle by:",
    options: [
      "Increasing rainfall",
      "Decreasing humidity",
      "Reducing rainfall",
      "Increasing groundwater levels",
    ],
    answer: "Reducing rainfall",
  },
  {
    question: "Which international day celebrates tree planting?",
    options: ["Earth Day", "Environment Day", "Ozone Day", "Arbor Day"],
    answer: "Arbor Day",
  },
  {
    question:
      "Which technique involves growing crops among trees and is a form of sustainable land use?",
    options: ["Slash and burn", "Terracing", "Agroforestry", "Polycropping"],
    answer: "Agroforestry",
  },
  {
    question:
      "Which animal species is greatly affected by deforestation in Indonesia?",
    options: ["Elephants", "Orangutans", "Tigers", "Pandas"],
    answer: "Orangutans",
  },
  {
    question: "What is the primary reason for reforestation?",
    options: [
      "Economic profit",
      "Aesthetic purposes",
      "Ecological restoration",
      "Recreational areas",
    ],
    answer: "Ecological restoration",
  },
  {
    question: "How does deforestation contribute to global warming?",
    options: [
      "Trees emit carbon when cut down",
      "Soil degradation releases methane",
      "Both A and B",
      "None of the above",
    ],
    answer: "Both A and B",
  },
  {
    question: "What practice is often used as a pretext for deforestation?",
    options: [
      "Conservation",
      "Urban development",
      "Sustainable logging",
      "Land grabbing",
    ],
    answer: "Land grabbing",
  },
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const quizCardRef = useRef(null);
  const scoreRef = useRef(null);

  useEffect(() => {
    const animateBackground = () => {
      gsap.to(".bg-animate", {
        duration: 20,
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        opacity: "random(0.3, 0.7)",
        scale: "random(0.5, 1.5)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    };
    animateBackground();
  }, []);

  useEffect(() => {
    if (quizCardRef.current) {
      gsap.fromTo(
        quizCardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (scoreRef.current) {
      gsap.fromTo(
        scoreRef.current,
        { scale: 0 },
        { scale: 1, duration: 1, ease: "back.out(1.7)" }
      );
    }
  }, [userAnswers.length]);

  const handleAnswer = (option) => {
    const isCorrect = option === questions[currentQuestionIndex].answer;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setUserAnswers((prev) => [...prev, option]);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-blue-100 p-5 font-sans overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="bg-animate absolute w-64 h-64 bg-blue-300 rounded-full"></div>
        <div className="bg-animate absolute w-48 h-48 bg-green-300 rounded-full"></div>
        <div className="bg-animate absolute w-72 h-72 bg-purple-300 rounded-full"></div>
      </div>
      <h1 className="relative text-4xl font-bold text-center mb-6 font-mono z-10">
        Reforestation & Deforestation Quiz
      </h1>
      <AnimatePresence>
        {userAnswers.length === currentQuestionIndex && (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white shadow-xl rounded-lg p-8 z-10"
            ref={quizCardRef}
          >
            <h2 className="text-2xl font-bold mb-4 font-serif">
              {questions[currentQuestionIndex].question}
            </h2>
            <div className="space-y-4">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-lg bg-green-300 hover:bg-green-400 rounded-lg p-4 shadow"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {userAnswers.length === questions.length && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-xl font-bold z-10"
          ref={scoreRef}
        >
          Your Score: {score} / {questions.length}
        </motion.div>
      )}
    </div>
  );
};

export default QuizPage;
