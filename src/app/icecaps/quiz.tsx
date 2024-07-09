"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const questions = [
  {
    question: "What is the primary cause of ice cap melting?",
    options: [
      "Greenhouse gases",
      "Solar radiation",
      "Volcanic activity",
      "All of the above",
    ],
    answer: "Greenhouse gases",
  },
  {
    question: "How does ice cap melting affect sea levels?",
    options: [
      "Increases sea levels",
      "Decreases sea levels",
      "Has no effect on sea levels",
      "Causes fluctuations in sea levels",
    ],
    answer: "Increases sea levels",
  },
  {
    question:
      "Which gas is primarily responsible for the greenhouse effect that leads to ice cap melting?",
    options: ["Carbon dioxide", "Methane", "Oxygen", "Hydrogen"],
    answer: "Carbon dioxide",
  },
  {
    question: "Which region's ice caps are melting at the fastest rate?",
    options: ["Arctic", "Antarctica", "Himalayas", "Andes"],
    answer: "Arctic",
  },
  {
    question:
      "What is the effect of melting ice caps on global weather patterns?",
    options: [
      "More predictable weather",
      "Increased hurricane activity",
      "Decreased precipitation",
      "More stable temperatures",
    ],
    answer: "Increased hurricane activity",
  },
  {
    question:
      "Which animal species is critically impacted by the melting of Arctic ice?",
    options: ["Polar bears", "Mountain goats", "Camels", "Penguins"],
    answer: "Polar bears",
  },
  {
    question:
      "What global day emphasizes awareness and action on climate change?",
    options: [
      "Earth Day",
      "Environment Day",
      "Ozone Day",
      "Climate Action Day",
    ],
    answer: "Earth Day",
  },
  {
    question:
      "Which technique is effective in studying the changes in ice caps over time?",
    options: [
      "Satellite monitoring",
      "Ground surveys",
      "Public polling",
      "None of the above",
    ],
    answer: "Satellite monitoring",
  },
  {
    question:
      "Which phenomenon is directly caused by the melting of glaciers and ice caps?",
    options: [
      "Ocean acidification",
      "Forest fires",
      "Desertification",
      "Sea level rise",
    ],
    answer: "Sea level rise",
  },
  {
    question:
      "What is a significant consequence of ice cap melting for coastal communities?",
    options: [
      "Increased tourism",
      "Economic downturn",
      "Coastal flooding",
      "Improved fishing conditions",
    ],
    answer: "Coastal flooding",
  },
];

const IceCapQuizPage = () => {
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
        Ice Cap Melting Awareness Quiz
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
          className="mt-8 text-xl font-bold font-sans z-10"
          ref={scoreRef}
        >
          Your Score: {score} / {questions.length}
        </motion.div>
      )}
    </div>
  );
};

export default IceCapQuizPage;
