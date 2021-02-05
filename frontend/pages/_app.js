import React from 'react';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://8a2bf55a79a94688a4d0f5fd95c1b3bb@sentry.io/5189731',
});

export default function DfgApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}
