export default function IndustrySection({ industries }) {
  return (
    <section className="services panel" id="work">
      <div className="services-title">Branchenübergreifend, international vernetzt</div>
      <p className="services-intro">
        Wir initiieren und begleiten Unternehmensnachfolgen sowie Verkaufsprozesse
        in unterschiedlichen Branchen. Dabei kommt es nicht darauf an, wie groß
        ein Unternehmen ist, sondern darauf, die richtigen Menschen
        zusammenzubringen.
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
