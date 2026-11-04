import Link from 'next/link';
import ScrollTextReveal from './ScrollTextReveal';

export default function IntroSection() {
  return (
    <section className="intro panel" id="about">
      <div className="intro-side">
        <div className="eyebrow">
          UNTERNEHMENSNACHFOLGE · UNTERNEHMENSVERKAUF · INVESTMENTS
        </div>
        <p>
          Wir bringen Unternehmer, die ihr Lebenswerk in neue Hände geben möchten,
          mit passenden Nachfolgern, Käufern und Investoren zusammen.
        </p>
        <p>
          Persönlich, diskret und branchenübergreifend. Für eine
          Unternehmensnachfolge, die das Fundament Ihres Unternehmens wertschätzt
          und langfristig darauf aufbaut.
        </p>
        <Link className="underlink" href="/buchung/">
          Unternehmen vermitteln lassen ↗
        </Link>
      </div>

      <ScrollTextReveal
        activeColors={['#b7c4c8', '#eef3f3']}
        as="div"
        className="intro-title"
        lines={['Ihr Unternehmen hat eine Zukunft.', 'Wir helfen, sie zu gestalten.']}
      />
    </section>
  );
}
