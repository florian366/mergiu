import './globals.css';

export const metadata = {
  title: 'Unternehmensnachfolge kostenlos beraten | MERGIU',
  description: 'Kostenlose Erstberatung zur Unternehmensnachfolge: MERGIU findet passende Nachfolger, Käufer und Investoren für Ihr Unternehmen – persönlich, diskret und provisionsfrei.',
  icons: { icon: '/images/mergiu-favicon.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="de"><body>{children}</body></html>;
}
