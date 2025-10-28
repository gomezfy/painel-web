import ptBR from './pt-BR';
import enUS from './en-US';
import esES from './es-ES';

export type Locale = 'pt-BR' | 'en-US' | 'es-ES';

export const locales = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'es-ES': esES
};

export const defaultLocale: Locale = 'pt-BR';

export const supportedLocales: Locale[] = ['pt-BR', 'en-US', 'es-ES'];
