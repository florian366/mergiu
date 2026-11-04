const stats = [
  { icon: '↗', value: '12,421+', description: 'Unternehmen im Netzwerk' },
  { icon: '◎', value: '7+', description: 'Länder im Netzwerk' },
  { icon: '◔', value: '6', description: 'Abgedeckte Branchen' },
];

export default function StatsSection({ locale = 'de' }) {
  const stats = locale === 'en'
    ? [
        { icon: '↗', value: '12,421+', description: 'Businesses in our network' },
        { icon: '◎', value: '7+', description: 'Countries in our network' },
        { icon: '◔', value: '6', description: 'Industries covered' },
      ]
    : [
        { icon: '↗', value: '12,421+', description: 'Unternehmen im Netzwerk' },
        { icon: '◎', value: '7+', description: 'Länder im Netzwerk' },
        { icon: '◔', value: '6', description: 'Abgedeckte Branchen' },
      ];
  return (
    <section className="stats panel" aria-label={locale === 'en' ? 'MERGIU in numbers' : 'MERGIU in Zahlen'}>
      {stats.map(({ icon, value, description }) => (
        <div className="stat" key={description}>
          <i aria-hidden="true">{icon}</i>
          <strong>{value}</strong>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}
