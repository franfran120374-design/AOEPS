import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StartScreen from '@/components/aoeps/StartScreen';
import InitialScreening from '@/components/aoeps/InitialScreening';
import RiskAssessment from '@/components/aoeps/RiskAssessment';
import DistressAssessment from '@/components/aoeps/DistressAssessment';
import ResultScreen from '@/components/aoeps/ResultScreen';

export default function Evaluation() {
  const [currentStep, setCurrentStep] = useState('start');
  const [answers, setAnswers] = useState({});
  const [resultType, setResultType] = useState(null);

  const handleStart = () => {
    setCurrentStep('screening');
  };

  const handleScreeningAnswer = (answer) => {
    setAnswers({ ...answers, q1: answer });
    if (answer === 'yes_suicidal') {
      setCurrentStep('risk');
    } else {
      setCurrentStep('distress');
    }
  };

  const handleRiskComplete = (riskAnswers) => {
    const allAnswers = { ...answers, ...riskAnswers };
    setAnswers(allAnswers);
    
    // Déterminer le niveau de risque
    if (riskAnswers.q2 === 'yes') {
      setResultType('urgence_absolue');
    } else {
      const factorCount = [riskAnswers.q3, riskAnswers.q4, riskAnswers.q5].filter(a => a === 'yes').length;
      if (factorCount >= 2) {
        setResultType('risque_modere_eleve');
      } else {
        setResultType('risque_faible');
      }
    }
    setCurrentStep('result');
  };

  const handleDistressComplete = (distressAnswers) => {
    const allAnswers = { ...answers, ...distressAnswers };
    setAnswers(allAnswers);
    
    // Déterminer le niveau de détresse
    const distressCount = [
      distressAnswers.q6 === 'yes',
      distressAnswers.q7 === 'yes',
      distressAnswers.q8 === 'no'
    ].filter(Boolean).length;
    
    if (distressCount >= 3) {
      setResultType('detresse_elevee');
    } else {
      setResultType('detresse_moderee');
    }
    setCurrentStep('result');
  };

  const handleReset = () => {
    setCurrentStep('start');
    setAnswers({});
    setResultType(null);
  };

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        <AnimatePresence mode="wait">
          {currentStep === 'start' && (
            <motion.div
              key="start"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <StartScreen onStart={handleStart} />
            </motion.div>
          )}

          {currentStep === 'screening' && (
            <motion.div
              key="screening"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <InitialScreening onAnswer={handleScreeningAnswer} />
            </motion.div>
          )}

          {currentStep === 'risk' && (
            <motion.div
              key="risk"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <RiskAssessment onComplete={handleRiskComplete} />
            </motion.div>
          )}

          {currentStep === 'distress' && (
            <motion.div
              key="distress"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <DistressAssessment onComplete={handleDistressComplete} />
            </motion.div>
          )}

          {currentStep === 'result' && (
            <motion.div
              key="result"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <ResultScreen resultType={resultType} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
