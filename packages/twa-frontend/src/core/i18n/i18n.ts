import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';

import { defaultLocale, locales } from './config';
import { getLocale } from './locale';
import type { Locale } from './types';

// Define a type for the messages
interface MessageModule {
  default: AbstractIntlMessages;
}

const i18nRequestConfig = getRequestConfig(async () => {
  // Remove await since getLocale is not async anymore
  const locale = getLocale() as Locale;

  // Fix unsafe member access by using proper type assertions
  const messages =
    locale === defaultLocale || !locales.includes(locale)
      ? ((await import(`@public/locales/${defaultLocale}.json`)) as MessageModule).default
      : ((await import(`@public/locales/${locale}.json`)) as MessageModule).default;

  return {
    locale,
    messages,
  };
});

export default i18nRequestConfig;
