import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import UcrmLogo from './UcrmLogo';

const questions = [
  {
    id: 'q6',
    title: 'Signes de Détresse',
    question: 'Observez-vous des changements significatifs : repli, isolement, altération du sommeil/appétit, irritabilité extrême, désespoir ?',
    yesLabel: 'Oui, signes significatifs observés',
    noLabel: 'Non ou signes légers',
    factor: 'détresse'
  },
  {
    id: 'q7',
    title: 'Facteur Fardeau',
    question: 'La personne exprime-t-elle le sentiment d\'être un poids, une inutilité, ou un échec complet ?',
    yesLabel: 'Oui, sentiment de fardeau exprimé',
    noLabel: 'Non, pas de sentiment de fardeau',
    factor: 'vulnérabilité'
  },
  {
    id: 'q8',
    title: 'Capacité d\'Adaptation',
    question: 'La personne est-elle encore capable de faire face aux obligations du quotidien (travail, famille, hygiène) ?',
    yesLabel: 'Oui, capacité d\'adaptation conservée',
    noLabel: 'Non, capacité très faible',
    reversed: true,
    factor: 'fonctionnement'
  }
];

export default function DistressAssessment({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (value) => {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

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
      {/* Logo UCRM */}
      <UcrmLogo />
      
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>Étape 2 sur 2</span>
          <span className="font-medium text-amber-600">Évaluation de la Détresse</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-amber-500 transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-slate-400 text-right">
          Question {currentQuestion + 1} sur {questions.length}
        </p>
      </div>

      {/* Info Banner */}
      <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <Heart className="w-5 h-5 text-amber-600 flex-shrink-0" />
        <p className="text-sm text-amber-700">
          Pas d'idées suicidaires identifiées — Évaluation de la détresse en cours
        </p>
      </div>

      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 inline-block">
              Facteur {question.factor}
            </span>
            <CardTitle className="text-lg text-slate-900">
              {question.title}
            </CardTitle>
            <p className="text-slate-600 leading-relaxed">
              {question.question}
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {question.reversed ? (
            <>
              <button
                onClick={() => handleAnswer('yes')}
                className="w-full p-5 rounded-xl border-2 border-green-200 hover:border-green-400 hover:bg-green-50 text-left transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-green-800">
                    {question.yesLabel}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>
              </button>

              <button
                onClick={() => handleAnswer('no')}
                className="w-full p-5 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 text-left transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-amber-800">
                    {question.noLabel}
                  </span>
                  <ChevronRight className="w-5 h-5 text-slate-400" />
                </div>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleAnswer('yes')}
                className="w-full p-5 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 text-left transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-amber-800">
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
            </>
          )}

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
