const stats = [
  { icon: '↗', value: '12,421+', description: 'Unternehmen im Netzwerk' },
  { icon: '◎', value: '7+', description: 'Länder im Netzwerk' },
  { icon: '◔', value: '6', description: 'Abgedeckte Branchen' },
];

export default function StatsSection() {
  return (
    <section className="stats panel" aria-label="MERGIU in Zahlen">
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
