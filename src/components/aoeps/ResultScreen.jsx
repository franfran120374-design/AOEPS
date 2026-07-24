import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  AlertOctagon, 
  AlertTriangle, 
  Heart,
  CheckCircle,
  RotateCcw,
  ExternalLink,
  Users,
  Stethoscope,
  MessageCircle
} from 'lucide-react';
import AppLogo from './AppLogo';

const resultConfigs = {
  urgence_absolue: {
    level: 'URGENCE ABSOLUE',
    subtitle: 'RISQUE IMMINENT',
    color: 'red',
    icon: AlertOctagon,
    bgClass: 'bg-red-600',
    borderClass: 'border-red-200',
    lightBgClass: 'bg-red-50',
    textClass: 'text-red-900',
    consignes: [
      'NE JAMAIS LAISSER LA PERSONNE SEULE',
      'Maintenir le contact physique et verbal',
      'Sécuriser l\'environnement (retirer les moyens)',
      'Rester calme et rassurant'
    ],
    action: 'Appeler immédiatement le 15 (SAMU) ou le 112',
    actionDescription: 'Transmettez toutes les informations aux secours',
    resources: [
      { name: 'SAMU', number: '15', primary: true },
      { name: 'Urgences européennes', number: '112', primary: true }
    ]
  },
  risque_modere_eleve: {
    level: 'RISQUE MODÉRÉ À ÉLEVÉ',
    subtitle: 'ORIENTATION RAPIDE NÉCESSAIRE',
    color: 'orange',
    icon: AlertTriangle,
    bgClass: 'bg-orange-500',
    borderClass: 'border-orange-200',
    lightBgClass: 'bg-orange-50',
    textClass: 'text-orange-900',
    consignes: [
      'Écoute active et validation de la souffrance',
      'Tentez de sécuriser l\'environnement (éloigner les moyens)',
      'Ne pas minimiser la situation',
      'Maintenir un lien de confiance'
    ],
    action: 'Orientation vers un professionnel dans les 24-48h',
    actionDescription: 'Médical ou psychologique selon disponibilité',
    resources: [
      { name: '3114 - Prévention du suicide', number: '3114', primary: true },
        { name: 'S. Mercier', number: 'à définir', email: 'à définir', description: 'Évaluatrice de crise suicidaire' },
      { name: 'Médecin traitant', description: 'Consultation en urgence' },
      { name: 'CUMP', description: 'Cellule de crise locale si besoin' }
    ]
  },
  risque_faible: {
    level: 'RISQUE PRÉSENT',
    subtitle: 'SURVEILLANCE ET SUIVI',
    color: 'yellow',
    icon: Heart,
    bgClass: 'bg-yellow-500',
    borderClass: 'border-yellow-200',
    lightBgClass: 'bg-yellow-50',
    textClass: 'text-yellow-900',
    consignes: [
      'Maintenir une écoute bienveillante',
      'Valider les émotions exprimées',
      'Identifier les facteurs protecteurs (entourage, activités)',
      'Proposer un suivi régulier'
    ],
    action: 'Orientation pour un suivi dans la semaine',
    actionDescription: 'Évaluation par un professionnel recommandée',
    resources: [
      { name: '3114 - Prévention du suicide', number: '3114', primary: true },
     { name: 'S. Mercier', number: 'à définir', email: 'à définir', description: 'Évaluatrice de crise suicidaire' },
      { name: 'Médecin traitant', description: 'Prise de rendez-vous' },
      { name: 'Psychologue', description: 'Suivi psychologique' }
    ]
  },
  detresse_elevee: {
    level: 'DÉTRESSE ÉLEVÉE',
    subtitle: 'NÉCESSITE UN SUIVI',
    color: 'yellow',
    icon: Heart,
    bgClass: 'bg-yellow-500',
    borderClass: 'border-yellow-200',
    lightBgClass: 'bg-yellow-50',
    textClass: 'text-yellow-900',
    consignes: [
      'Valider la souffrance et l\'urgence de prise en charge',
      'Rappeler les facteurs protecteurs (entourage, passions)',
      'Proposer un accompagnement concret',
      'Encourager le maintien des liens sociaux'
    ],
    action: 'Orientation pour un suivi psychologique/social dans la semaine',
    actionDescription: 'Accompagnement professionnel recommandé',
    resources: [
      { name: 'Associations d\'écoute', description: 'Soutien téléphonique' },
      { name: 'Service social MSA', description: 'Accompagnement social' },
      { name: 'Médecin traitant', description: 'Évaluation médicale' }
    ]
  },
  detresse_moderee: {
    level: 'DÉTRESSE MODÉRÉE / FAIBLE',
    subtitle: 'VEILLE ET SOUTIEN',
    color: 'green',
    icon: CheckCircle,
    bgClass: 'bg-emerald-500',
    borderClass: 'border-emerald-200',
    lightBgClass: 'bg-emerald-50',
    textClass: 'text-emerald-900',
    consignes: [
      'Encourager la communication et le maintien des liens sociaux',
      'Utiliser l\'application "Hop Ma Liste" pour identifier les ressources et activités positives',
      'Identifier et renforcer les facteurs de protection (famille, amis, passions, projets)',
      'Proposer un suivi avec le médecin généraliste ou un psychologue',
      'Rester disponible et à l\'écoute',
      'Conseils d\'hygiène de vie (sommeil, alimentation, activité physique)'
    ],
    action: 'Suivi recommandé et renforcement des facteurs protecteurs',
    actionDescription: 'Accompagnement préventif et orientation',
    resources: [
      { name: '3114 - Prévention du suicide', number: '3114', primary: true },
      { name: 'Application Hop Ma Liste', description: 'Identifier ressources et activités positives', link: 'https://hopmaliste.fr' },
      { name: 'C. Simons - PCMS', email: 'c.simons@ucrm.fr', description: 'Évaluatrice de crise suicidaire' },
      { name: 'S. Mercier - PCMS', number: '0763718607', email: 's.mercier@ucrm.fr', description: 'Évaluatrice de crise suicidaire' },
      { name: 'Médecin généraliste', description: 'Évaluation et suivi médical' },
      { name: 'Psychologue', description: 'Suivi psychologique préventif' },
      { name: 'Associations locales', description: 'Activités et lien social' }
    ],
    protectionFactors: [
      'Soutien familial et amical',
      'Activités valorisantes (hobbies, passions)',
      'Projets personnels ou professionnels',
      'Participation à des activités sociales',
      'Ressources spirituelles ou philosophiques',
      'Accès aux soins et accompagnement'
    ]
  }
};

export default function ResultScreen({ resultType, onReset }) {
  const config = resultConfigs[resultType];
  const Icon = config.icon;

  return (
    <div className="space-y-6">
      {/* AppLogo */}
     <AppLogo />
      
      {/* Result Header */}
      <Card className={`border-0 shadow-xl overflow-hidden ${config.bgClass}`}>
        <CardContent className="p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <span className="text-white/80 text-sm font-medium">
                Résultat de l'évaluation
              </span>
              <h1 className="text-xl font-bold">{config.level}</h1>
              <p className="text-white/90 text-sm">{config.subtitle}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Consignes */}
      <Card className={`border-2 ${config.borderClass} ${config.lightBgClass}`}>
        <CardHeader className="pb-3">
          <CardTitle className={`text-base ${config.textClass}`}>
            Consignes immédiates
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-3">
            {config.consignes.map((consigne, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className={`w-6 h-6 rounded-full ${config.bgClass} text-white flex items-center justify-center flex-shrink-0 text-xs font-bold`}>
                  {index + 1}
                </div>
                <span className="text-slate-700 text-sm leading-relaxed">
                  {consigne}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Action Recommandée */}
      <Card className="border-0 shadow-lg bg-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-base text-slate-900 flex items-center gap-2">
            <Stethoscope className="w-5 h-5 text-slate-400" />
            Action recommandée
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          <p className="font-semibold text-slate-900">{config.action}</p>
          <p className="text-sm text-slate-500">{config.actionDescription}</p>
        </CardContent>
      </Card>

      {/* Facteurs de Protection */}
      {config.protectionFactors && (
        <Card className="border-0 shadow-lg bg-white">
          <CardHeader className="pb-3">
            <CardTitle className="text-base text-slate-900 flex items-center gap-2">
              <Heart className="w-5 h-5 text-emerald-500" />
              Facteurs de protection à identifier et renforcer
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ul className="space-y-2">
              {config.protectionFactors.map((factor, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{factor}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Ressources */}
      <Card className="border-0 shadow-lg bg-white">
        <CardHeader className="pb-3">
          <CardTitle className="text-base text-slate-900 flex items-center gap-2">
            <Phone className="w-5 h-5 text-slate-400" />
            Ressources et contacts
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          {config.resources.map((resource, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl ${
                resource.primary 
                  ? `${config.lightBgClass} border ${config.borderClass}` 
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="space-y-1 flex-1 min-w-0">
                  <p className={`font-medium ${resource.primary ? config.textClass : 'text-slate-900'}`}>
                    {resource.name}
                  </p>
                  {resource.description && (
                    <p className="text-sm text-slate-500">{resource.description}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  {resource.number && (
                    <a 
                      href={`tel:${resource.number}`}
                      className={`px-4 py-2 rounded-lg font-bold text-white ${config.bgClass} flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap`}
                    >
                      <Phone className="w-4 h-4" />
                      {resource.number}
                    </a>
                  )}
                  {resource.email && (
                    <a 
                      href={`mailto:${resource.email}`}
                      className={`px-4 py-2 rounded-lg font-medium border-2 ${config.borderClass} ${config.textClass} flex items-center gap-2 hover:opacity-80 transition-opacity whitespace-nowrap`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contacter
                    </a>
                  )}
                  {resource.link && (
                    <a 
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg font-medium border-2 border-slate-200 text-slate-700 flex items-center gap-2 hover:bg-slate-50 transition-colors whitespace-nowrap"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Accéder
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="space-y-3">
        <Button 
          onClick={onReset}
          variant="outline"
          className="w-full h-12 rounded-xl border-2"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Nouvelle évaluation
        </Button>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-slate-400 pt-4">
        <p>Cet outil est un guide d'aide à la décision.</p>
        <p>Il ne remplace pas le jugement clinique.</p>
      </div>
    </div>
  );
}
