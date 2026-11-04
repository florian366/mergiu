import Link from 'next/link';
import ScrollTextReveal from './ScrollTextReveal';

export default function IntroSection({ locale = 'de' }) {
  const isEnglish = locale === 'en';
  return (
    <section className="intro panel" id="about">
      <div className="intro-side">
        <div className="eyebrow">
          {isEnglish ? 'BUSINESS SUCCESSION · BUSINESS SALES · INVESTMENTS' : 'UNTERNEHMENSNACHFOLGE · UNTERNEHMENSVERKAUF · INVESTMENTS'}
        </div>
        <p>
          {isEnglish ? 'We connect business owners who want to pass on their life’s work with suitable successors, buyers and investors.' : 'Wir bringen Unternehmer, die ihr Lebenswerk in neue Hände geben möchten, mit passenden Nachfolgern, Käufern und Investoren zusammen.'}
        </p>
        <p>
          {isEnglish ? 'Personal, discreet and cross-industry. For a business succession that values what you have built and creates a strong foundation for the future.' : 'Persönlich, diskret und branchenübergreifend. Für eine Unternehmensnachfolge, die das Fundament Ihres Unternehmens wertschätzt und langfristig darauf aufbaut.'}
        </p>
        <Link className="underlink" href={isEnglish ? '/present-your-business/' : '/buchung/'}>
          {isEnglish ? 'Find a successor for your business ↗' : 'Unternehmen vermitteln lassen ↗'}
        </Link>
      </div>

      <ScrollTextReveal
        activeColors={['#b7c4c8', '#eef3f3']}
        as="div"
        className="intro-title"
        lines={isEnglish ? ['Your business has a future.', 'We help shape it.'] : ['Ihr Unternehmen hat eine Zukunft.', 'Wir helfen, sie zu gestalten.']}
      />
    </section>
  );
}
