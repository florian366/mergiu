import Link from 'next/link';
import SiteHeader from '../site/SiteHeader';
import SiteFooter from '../site/SiteFooter';
import { frenchIndustries } from '../../data/french-content';
import styles from './EnglishAuxiliaryPage.module.css';

const legalContent = {
  agb: {
    title: 'Conditions générales',
    text: 'Le contrat d’enregistrement et les conditions générales sont actuellement disponibles en allemand. La version allemande fait foi.',
    href: '/agb.html',
    label: 'Consulter la version allemande',
  },
  datenschutz: {
    title: 'Politique de confidentialité',
    text: 'La politique de confidentialité est actuellement disponible en allemand. La version allemande fait foi.',
    href: '/datenschutz.html',
    label: 'Consulter la politique de confidentialité en allemand',
  },
  impressum: {
    title: 'Mentions légales',
    text: 'Les mentions légales sont actuellement disponibles en allemand.',
    href: '/impressum.html',
    label: 'Consulter les mentions légales en allemand',
  },
};

export default function FrenchLegalPage({ route }) {
  const legal = legalContent[route.key];

  return (
    <div className={styles.page} id="top">
      <SiteHeader locale="fr" />
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>MERGIU · INFORMATIONS JURIDIQUES</p>
          <h1>{legal.title}</h1>
          <p>{legal.text}</p>
          <Link className={styles.button} href={legal.href} hrefLang="de" data-no-locale="true">{legal.label} ↗</Link>
        </section>
      </main>
      <SiteFooter industries={frenchIndustries} locale="fr" />
    </div>
  );
}
