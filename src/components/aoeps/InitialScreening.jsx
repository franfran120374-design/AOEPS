import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, ArrowRight } from 'lucide-react';
import UcrmLogo from './UcrmLogo';

export default function InitialScreening({ onAnswer }) {
  const options = [
    {
      id: 'yes_suicidal',
      label: 'Oui, idées suicidaires avérées',
      description: 'La personne exprime clairement des pensées suicidaires',
      color: 'border-red-200 hover:border-red-300 hover:bg-red-50/50',
      textColor: 'text-red-900',
      descColor: 'text-red-600'
    },
    {
      id: 'no_distress',
      label: 'Non, détresse profonde sans idées suicidaires',
      description: 'Désespoir, anxiété ou souffrance intense, mais pas d\'idées suicidaires',
      color: 'border-amber-200 hover:border-amber-300 hover:bg-amber-50/50',
      textColor: 'text-amber-900',
      descColor: 'text-amber-600'
    },
    {
      id: 'no_general',
      label: 'Non, crise ou mal-être général',
      description: 'Situation difficile sans signes spécifiques de risque',
      color: 'border-slate-200 hover:border-slate-300 hover:bg-slate-50',
      textColor: 'text-slate-900',
      descColor: 'text-slate-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Logo UCRM */}
      <UcrmLogo />
      
      {/* Progress */}
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>Étape 1 sur 2</span>
        <span className="font-medium text-slate-700">Repérage Initial</span>
      </div>

      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <CardTitle className="text-xl text-slate-900 leading-relaxed">
                La personne exprime-t-elle des idées suicidaires ?
              </CardTitle>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                Idées de suicide, de se faire du mal, de ne plus vouloir vivre, ou envie de disparaître
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => onAnswer(option.id)}
              className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-200 group ${option.color}`}
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className={`font-medium ${option.textColor}`}>
                    {option.label}
                  </p>
                  <p className={`text-sm ${option.descColor}`}>
                    {option.description}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
