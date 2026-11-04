export default function IndustrySection({ industries, locale = 'de' }) {
  const isEnglish = locale === 'en';
  const isFrench = locale === 'fr';
  return (
    <section className="services panel" id="work">
      <div className="services-title">{isEnglish ? 'Connected across industries, internationally' : isFrench ? 'Un réseau intersectoriel et international' : 'Branchenübergreifend, international vernetzt'}</div>
      <p className="services-intro">
        {isEnglish ? 'We support business succession and sale processes across a range of industries. What matters is not the size of a business, but bringing the right people together.' : isFrench ? 'Nous accompagnons les transmissions et les cessions dans différents secteurs. L’essentiel n’est pas la taille de l’entreprise, mais la rencontre entre les bonnes personnes.' : 'Wir initiieren und begleiten Unternehmensnachfolgen sowie Verkaufsprozesse in unterschiedlichen Branchen. Dabei kommt es nicht darauf an, wie groß ein Unternehmen ist, sondern darauf, die richtigen Menschen zusammenzubringen.'}
      </p>

      <div className="service-row">
        {industries.map((industry) => (
          <a className="service-card" href={industry.href} key={industry.name}>
            <div
              className="service-image"
              style={{ backgroundImage: `url("${industry.image}")` }}
              aria-hidden="true"
            />
            <h3>{industry.name}</h3>
            <p>{industry.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
