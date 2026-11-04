import './globals.css';
import { headers } from 'next/headers';

export const metadata = {
  title: 'Unternehmensnachfolge kostenlos beraten | MERGIU',
  description: 'Kostenlose Erstberatung zur Unternehmensnachfolge: MERGIU findet passende Nachfolger, Käufer und Investoren für Ihr Unternehmen – persönlich, diskret und provisionsfrei.',
  icons: { icon: '/images/mergiu-favicon.svg' },
};

export default async function RootLayout({ children }) {
  const requestHeaders = await headers();
  const language = requestHeaders.get('x-mergiu-language') || 'de';
  return <html lang={language} suppressHydrationWarning><body>{children}</body></html>;
}
