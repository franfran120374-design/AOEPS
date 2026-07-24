import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ChevronLeft, ChevronRight } from 'lucide-react';
import AppLogo from './AppLogo';

const questions = [
  {
    id: 'q2',
    title: 'Le Plan (Facteur de Dangerosité)',
    question: 'La personne a-t-elle élaboré un plan précis (moyen, lieu, date/heure) et dispose-t-elle du moyen pour passer à l\'acte ?',
    yesLabel: 'Oui, plan précis et moyens disponibles',
    noLabel: 'Non ou plan vague',
    critical: true
  },
  {
    id: 'q3',
    title: 'Antécédents',
    question: 'Y a-t-il des antécédents de tentatives de suicide, d\'actes auto-agressifs graves ou d\'automutilation ?',
    yesLabel: 'Oui, antécédents présents',
    noLabel: 'Non, pas d\'antécédents connus',
    factor: 'aggravant'
  },
  {
    id: 'q4',
    title: 'Rupture / Perte',
    question: 'La personne vient-elle de vivre un événement déclencheur majeur et récent (rupture, perte d\'emploi, deuil, diagnostic grave) ?',
    yesLabel: 'Oui, événement récent majeur',
    noLabel: 'Non, pas d\'événement récent',
    factor: 'crise'
  },
  {
    id: 'q5',
    title: 'Soutien / Isolement',
    question: 'La personne se sent-elle totalement isolée ou sans soutien émotionnel familial/professionnel ?',
    yesLabel: 'Oui, isolement total',
    noLabel: 'Non, soutien présent',
    factor: 'vulnérabilité'
  }
];

export default function RiskAssessment({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    // Si Q2 = Oui (risque imminent), terminer immédiatement
    if (question.id === 'q2' && value === 'yes') {
      onComplete(newAnswers);
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* AppLogo */}
      <AppLogo />
      
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>Étape 2 sur 2</span>
          <span className="font-medium text-red-600">Évaluation du Risque</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-red-500 transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-400 text-right">
          Question {currentQuestion + 1} sur {questions.length}
        </p>
      </div>

      {/* Alert Banner */}
      <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
        <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
        <p className="text-sm text-red-700">
          Idées suicidaires identifiées — Évaluation du risque en cours
        </p>
      </div>

      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                question.critical 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {question.critical ? 'CRITIQUE' : `Facteur ${question.factor}`}
              </span>
            </div>
            <CardTitle className="text-lg text-slate-900">
              {question.title}
            </CardTitle>
            <p className="text-slate-600 leading-relaxed">
              {question.question}
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <button
            onClick={() => handleAnswer('yes')}
            className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-200 ${
              question.critical
                ? 'border-red-200 hover:border-red-400 hover:bg-red-50'
                : 'border-amber-200 hover:border-amber-400 hover:bg-amber-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`font-medium ${question.critical ? 'text-red-800' : 'text-amber-800'}`}>
                {question.yesLabel}
              </span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </button>

          <button
            onClick={() => handleAnswer('no')}
            className="w-full p-5 rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-left transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-700">
                {question.noLabel}
              </span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          </button>

          {currentQuestion > 0 && (
            <Button
              variant="ghost"
              onClick={handleBack}
              className="w-full mt-4 text-slate-500"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Question précédente
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
