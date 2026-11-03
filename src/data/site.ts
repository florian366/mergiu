export const languages = ['de', 'en', 'fr', 'es'] as const;
export type Language = (typeof languages)[number];

export const languageNames: Record<Language, string> = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Francais',
  es: 'Espanol'
};

export const routes = [
  '', 'handwerk', 'tiermedizin', 'kanzleien', 'facility-management', 'einzelhandel',
  'dienstleistungen', 'persoenlich', 'diskretion', 'netzwerk', 'provisionsfrei',
  'persoenliche-betreuung', 'buchung', 'tippgeber', 'category',
  'handwerksbetrieb-verkaufen-nachfolger-finden',
  'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden',
  'agb', 'datenschutz', 'impressum'
] as const;

type Copy = {
  home: { title: string; description: string; eyebrow: string; lead: string; cta: string; industries: string; process: string; steps: string[] };
  nav: { home: string; industries: string; insights: string; contact: string; booking: string; language: string };
  footer: { lead: string; legal: string; privacy: string; terms: string; imprint: string };
  shared: { learnMore: string; contact: string; fee: string; confidential: string; howItWorks: string };
  booking: { title: string; lead: string; included: string[]; consent: string; submit: string; note: string };
  referral: { title: string; lead: string; steps: string[]; formTitle: string; reward: string };
  legal: { translation: string; terms: string; privacy: string; imprint: string };
};

export const copy: Record<Language, Copy> = {
  de: {
    nav: { home: 'Startseite', industries: 'Branchen', insights: 'Impulse', contact: 'Kontakt', booking: 'Unternehmen vorstellen', language: 'Sprache' },
    home: { title: 'Provisionsfreie Nachfolge fuer Ihr Unternehmen finden.', description: 'Kostenlose Erstberatung zur Unternehmensnachfolge. MERGIU findet passende Nachfolger, Kaeufer und Investoren fuer Ihr Unternehmen.', eyebrow: 'Persoenlicher Ansprechpartner statt anonymer Verkaufsplattform', lead: 'Wir bringen Unternehmer, die ihr Lebenswerk in neue Haende geben moechten, mit passenden Nachfolgern, Kaeufern und Investoren zusammen.', cta: 'Unternehmen vorstellen', industries: 'Branchenuebergreifend, international vernetzt', process: 'In vier Schritten zur passenden Nachfolge', steps: ['Sie nehmen Kontakt auf', 'Wir lernen Ihr Unternehmen kennen', 'Wir identifizieren passende Kontakte', 'Sie entscheiden ueber die naechsten Schritte'] },
    footer: { lead: 'Persoenlich, diskret und branchenuebergreifend vernetzt.', legal: 'Rechtliches', privacy: 'Datenschutz', terms: 'AGB', imprint: 'Impressum' },
    shared: { learnMore: 'Mehr erfahren', contact: 'Kontakt aufnehmen', fee: 'Einmalige Registrierungs- und Aufbereitungsgebuehr: 184 EUR. Keine erfolgsabhaengige Vermittlungsprovision fuer Verkaeufer.', confidential: 'Ihre Angaben werden vertraulich behandelt und nur mit Ihrer Zustimmung weitergegeben.', howItWorks: 'So funktioniert es' },
    booking: { title: 'Wir haben den Nachfolger Ihres Unternehmens in unserem Netzwerk.', lead: 'Der direkte Weg zu einer passenden Unternehmensnachfolge.', included: ['Aufnahme in das MERGIU-Netzwerk', 'Pruefung und Aufbereitung Ihres Unternehmensprofils', 'Abgleich mit passenden Nachfolgern', 'Kontaktaufnahme bei geeigneten Interessenten'], consent: 'Ich handle im Namen eines Unternehmens und akzeptiere die AGB.', submit: 'Unternehmen registrieren', note: 'Die Registrierung ist kein Versprechen eines Vermittlungserfolgs.' },
    referral: { title: 'Kennen Sie ein Unternehmen, das einen Nachfolger sucht?', lead: 'Geben Sie uns einen diskreten Hinweis und erhalten Sie bei erfolgreicher Vermittlung eine Tippgeberpraemie von 500 EUR.', steps: ['Sie kennen ein Unternehmen', 'Sie geben uns einen Hinweis', 'Wir pruefen den Kontakt diskret', 'Wir klaeren die naechsten Schritte'], formTitle: 'Geben Sie Ihren Tipp ab', reward: '500 EUR Tippgeberpraemie bei erfolgreicher Vermittlung' },
    legal: { translation: 'Massgeblich ist die deutsche Fassung. Andere Sprachfassungen dienen ausschliesslich der Information und muessen vor Verwendung rechtlich geprueft werden.', terms: 'Allgemeine Geschaeftsbedingungen', privacy: 'Datenschutzerklaerung', imprint: 'Impressum' }
  },
  en: {
    nav: { home: 'Home', industries: 'Industries', insights: 'Insights', contact: 'Contact', booking: 'Present your business', language: 'Language' },
    home: { title: 'Find a commission-free succession for your business.', description: 'Initial advice for business succession. MERGIU connects your business with suitable successors, buyers and investors.', eyebrow: 'A personal contact instead of an anonymous sales platform', lead: 'We bring business owners who want to place their life’s work in new hands together with suitable successors, buyers and investors.', cta: 'Present your business', industries: 'Cross-industry expertise, internationally connected', process: 'The right succession in four steps', steps: ['Get in touch', 'We get to know your business', 'We identify suitable contacts', 'You decide on the next steps'] },
    footer: { lead: 'Personal, discreet and connected across industries.', legal: 'Legal', privacy: 'Privacy', terms: 'Terms', imprint: 'Legal notice' },
    shared: { learnMore: 'Learn more', contact: 'Get in touch', fee: 'One-off registration and preparation fee: EUR 184. No success-based brokerage commission for sellers.', confidential: 'Your information is handled confidentially and shared only with your consent.', howItWorks: 'How it works' },
    booking: { title: 'We have your business’s successor in our network.', lead: 'The direct route to the right business succession.', included: ['Admission to the MERGIU network', 'Review and preparation of your company profile', 'Matching with suitable successors', 'Contacting suitable interested parties'], consent: 'I act on behalf of a company and accept the terms.', submit: 'Register your business', note: 'Registration does not guarantee a successful placement.' },
    referral: { title: 'Do you know a business looking for a successor?', lead: 'Give us a discreet referral and receive a EUR 500 referral reward when a placement is successful.', steps: ['You know a business', 'You send us a referral', 'We review the contact discreetly', 'We clarify the next steps'], formTitle: 'Submit your referral', reward: 'EUR 500 referral reward for a successful placement' },
    legal: { translation: 'The German version is authoritative. Other language versions are provided for information only and must be legally reviewed before use.', terms: 'Terms and conditions', privacy: 'Privacy policy', imprint: 'Legal notice' }
  },
  fr: {
    nav: { home: 'Accueil', industries: 'Secteurs', insights: 'Perspectives', contact: 'Contact', booking: 'Presenter votre entreprise', language: 'Langue' },
    home: { title: 'Trouvez une succession sans commission pour votre entreprise.', description: 'Conseil initial pour la transmission d’entreprise. MERGIU met votre entreprise en relation avec des repreneurs, acheteurs et investisseurs adaptes.', eyebrow: 'Un interlocuteur personnel plutot qu’une plateforme anonyme', lead: 'Nous mettons en relation les dirigeants qui souhaitent transmettre leur oeuvre avec des repreneurs, acheteurs et investisseurs adaptes.', cta: 'Presenter votre entreprise', industries: 'Tous secteurs, un reseau international', process: 'La bonne succession en quatre etapes', steps: ['Vous nous contactez', 'Nous apprenons a connaitre votre entreprise', 'Nous identifions les bons contacts', 'Vous decidez des prochaines etapes'] },
    footer: { lead: 'Personnel, discret et connecte a tous les secteurs.', legal: 'Mentions legales', privacy: 'Confidentialite', terms: 'Conditions', imprint: 'Mentions legales' },
    shared: { learnMore: 'En savoir plus', contact: 'Nous contacter', fee: 'Frais uniques d’inscription et de preparation : 184 EUR. Aucune commission de succes pour les vendeurs.', confidential: 'Vos informations sont traitees de maniere confidentielle et partagees uniquement avec votre accord.', howItWorks: 'Notre fonctionnement' },
    booking: { title: 'Nous avons le successeur de votre entreprise dans notre reseau.', lead: 'La voie directe vers une transmission adaptee.', included: ['Integration au reseau MERGIU', 'Verification et preparation du profil de votre entreprise', 'Mise en relation avec des repreneurs adaptes', 'Prise de contact avec les interesses qualifies'], consent: 'J’agis au nom d’une entreprise et j’accepte les conditions.', submit: 'Inscrire votre entreprise', note: 'L’inscription ne garantit pas une mise en relation reussie.' },
    referral: { title: 'Connaissez-vous une entreprise qui cherche un repreneur ?', lead: 'Transmettez-nous une information en toute discretion et recevez une prime de 500 EUR en cas de mise en relation reussie.', steps: ['Vous connaissez une entreprise', 'Vous nous donnez une information', 'Nous examinons le contact discretement', 'Nous clarifions les prochaines etapes'], formTitle: 'Transmettre votre information', reward: 'Prime de recommandation de 500 EUR en cas de succes' },
    legal: { translation: 'La version allemande fait foi. Les autres versions linguistiques sont fournies a titre informatif et doivent etre verifiees juridiquement avant utilisation.', terms: 'Conditions generales', privacy: 'Politique de confidentialite', imprint: 'Mentions legales' }
  },
  es: {
    nav: { home: 'Inicio', industries: 'Sectores', insights: 'Ideas', contact: 'Contacto', booking: 'Presentar su empresa', language: 'Idioma' },
    home: { title: 'Encuentre una sucesion sin comision para su empresa.', description: 'Asesoramiento inicial para la sucesion empresarial. MERGIU conecta su empresa con sucesores, compradores e inversores adecuados.', eyebrow: 'Una persona de contacto en lugar de una plataforma anonima', lead: 'Conectamos a empresarios que desean dejar su obra en nuevas manos con sucesores, compradores e inversores adecuados.', cta: 'Presentar su empresa', industries: 'Todos los sectores, conectados internacionalmente', process: 'La sucesion adecuada en cuatro pasos', steps: ['Se pone en contacto', 'Conocemos su empresa', 'Identificamos contactos adecuados', 'Usted decide los siguientes pasos'] },
    footer: { lead: 'Personal, discreto y conectado entre sectores.', legal: 'Legal', privacy: 'Privacidad', terms: 'Condiciones', imprint: 'Aviso legal' },
    shared: { learnMore: 'Saber mas', contact: 'Contactar', fee: 'Tarifa unica de registro y preparacion: 184 EUR. Sin comision por exito para vendedores.', confidential: 'Sus datos se tratan de forma confidencial y solo se comparten con su consentimiento.', howItWorks: 'Como funciona' },
    booking: { title: 'Tenemos al sucesor de su empresa en nuestra red.', lead: 'La via directa hacia la sucesion empresarial adecuada.', included: ['Inclusion en la red MERGIU', 'Revision y preparacion del perfil de su empresa', 'Coincidencia con sucesores adecuados', 'Contacto con interesados cualificados'], consent: 'Actuo en nombre de una empresa y acepto las condiciones.', submit: 'Registrar su empresa', note: 'El registro no garantiza una intermediacion exitosa.' },
    referral: { title: 'Conoce una empresa que busca sucesor?', lead: 'Denos una referencia discreta y reciba una prima de 500 EUR si la intermediacion tiene exito.', steps: ['Conoce una empresa', 'Nos envia una referencia', 'Revisamos el contacto discretamente', 'Aclaramos los siguientes pasos'], formTitle: 'Enviar su referencia', reward: 'Prima de recomendacion de 500 EUR por intermediacion exitosa' },
    legal: { translation: 'La version alemana es la vinculante. Las versiones en otros idiomas se facilitan solo con fines informativos y deben revisarse juridicamente antes de usarse.', terms: 'Terminos y condiciones', privacy: 'Politica de privacidad', imprint: 'Aviso legal' }
  }
};

export const industryNames: Record<string, Record<Language, string>> = {
  handwerk: { de: 'Handwerk', en: 'Craft businesses', fr: 'Artisanat', es: 'Empresas artesanales' },
  tiermedizin: { de: 'Tiermedizin', en: 'Veterinary medicine', fr: 'Medecine veterinaire', es: 'Medicina veterinaria' },
  kanzleien: { de: 'Kanzleien', en: 'Professional firms', fr: 'Cabinets professionnels', es: 'Despachos profesionales' },
  'facility-management': { de: 'Facility Management', en: 'Facility management', fr: 'Facility management', es: 'Facility management' },
  einzelhandel: { de: 'Einzelhandel', en: 'Retail', fr: 'Commerce de detail', es: 'Comercio minorista' },
  dienstleistungen: { de: 'Dienstleistungen', en: 'Services', fr: 'Services', es: 'Servicios' }
};

export const industryHeroTitles: Record<string, Record<Language, string>> = {
  handwerk: { de: 'Ihr Handwerksbetrieb verdient eine Zukunft.', en: 'Your craft business deserves a future.', fr: 'Votre entreprise artisanale merite un avenir.', es: 'Su empresa artesanal merece un futuro.' },
  tiermedizin: { de: 'Ihre Tierarztpraxis verdient eine Zukunft.', en: 'Your veterinary practice deserves a future.', fr: 'Votre cabinet veterinaire merite un avenir.', es: 'Su clinica veterinaria merece un futuro.' },
  kanzleien: { de: 'Ihre Kanzlei verdient eine Zukunft.', en: 'Your professional firm deserves a future.', fr: 'Votre cabinet merite un avenir.', es: 'Su despacho merece un futuro.' },
  'facility-management': { de: 'Ihr Facility-Management-Unternehmen verdient eine Zukunft.', en: 'Your facility management business deserves a future.', fr: 'Votre entreprise de facility management merite un avenir.', es: 'Su empresa de facility management merece un futuro.' },
  einzelhandel: { de: 'Ihr Einzelhandelsunternehmen verdient eine Zukunft.', en: 'Your retail business deserves a future.', fr: 'Votre commerce merite un avenir.', es: 'Su comercio merece un futuro.' },
  dienstleistungen: { de: 'Ihr Dienstleistungsunternehmen verdient eine Zukunft.', en: 'Your service business deserves a future.', fr: 'Votre entreprise de services merite un avenir.', es: 'Su empresa de servicios merece un futuro.' }
};
