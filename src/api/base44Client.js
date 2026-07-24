import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, serverUrl, token, functionsVersion } = appParams;

// Pas de config Base44 (appId/serverUrl absents) => app en standalone, hors
// plateforme Base44. On évite d'instancier le vrai client SDK : sa simple
// construction déclenche déjà un appel réseau interne (init analytics), ce
// qui spamme la console de 404/405 puisqu'il n'y a aucun backend à contacter.
// On fournit à la place un stub inoffensif couvrant les méthodes utilisées
// ailleurs dans l'app (NavigationTracker, AuthContext, PageNotFound).
const isStandalone = !appId || !serverUrl;

export const base44 = isStandalone
  ? {
      auth: {
        me: () => Promise.reject(new Error('Standalone: pas de backend Base44 configuré')),
        logout: () => {},
        redirectToLogin: () => {},
      },
      appLogs: {
        logUserInApp: () => Promise.resolve(),
      },
      entities: {},
    }
  : createClient({
      appId,
      serverUrl,
      token,
      functionsVersion,
      requiresAuth: false
    });
