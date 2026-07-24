import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AlertTriangle, Shield, Clock, Phone } from 'lucide-react';
import AppLogo from './AppLogo';

export default function StartScreen({ onStart }) {
  return (
    <div className="space-y-6">
      {/* AppLogo */}
      <AppLogo className="justify-center" />
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 shadow-lg">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
            AOEPS
          </h1>
          <p className="text-slate-500 mt-1 text-sm md:text-base">
            Aide à l'Orientation et Évaluation du Potentiel Suicidaire
          </p>
        </div>
      </div>

      {/* Main Card */}
      <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3 text-amber-700 bg-amber-50 rounded-xl p-4">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">
              À LIRE AVANT DE COMMENCER
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-slate-600">
            <p className="leading-relaxed">
              Ce guide est un <strong className="text-slate-900">outil d'aide à la décision</strong> destiné 
              aux professionnels formés. Il ne remplace en aucun cas le jugement clinique.
            </p>
            
            <div className="flex items-center gap-3 text-slate-500">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Temps estimé : 5-10 minutes</span>
            </div>
          </div>

          <Button 
            onClick={onStart}
            className="w-full h-14 text-base font-medium bg-slate-900 hover:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Commencer l'Évaluation
          </Button>
        </CardContent>
      </Card>

      {/* Emergency Alert */}
      <Card className="border-2 border-red-200 bg-red-50/50 shadow-lg">
        <CardContent className="p-5">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-red-600" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-red-900">
                Danger immédiat ?
              </p>
              <p className="text-sm text-red-700 leading-relaxed">
                Si la personne est en danger immédiat (acte en cours), 
                appelez immédiatement le <strong>15</strong> (SAMU) ou le <strong>112</strong>.
              </p>
              <div className="flex gap-3 pt-2">
                <a 
                  href="tel:15" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Appeler le 15
                </a>
                <a 
                  href="tel:112" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-red-700 border border-red-300 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Appeler le 112
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
