import { localizedRoutes } from './i18n-routes';

const routeForGermanPath = (pathname) => localizedRoutes.find((route) => route.de === pathname);

export const frenchIndustries = [
  {
    name: 'Artisanat',
    href: routeForGermanPath('/handwerk/')?.fr,
    image: '/images/Handwerk.jpg',
    description: 'Nous mettons les dirigeants d’entreprises artisanales en relation avec des repreneurs capables de poursuivre et de développer leur activité.',
  },
  {
    name: 'Médecine vétérinaire',
    href: routeForGermanPath('/tiermedizin/')?.fr,
    image: '/images/Tiermedizin.jpg',
    description: 'Nous aidons les propriétaires de cabinets vétérinaires à trouver des repreneurs, des associés ou des acheteurs stratégiques.',
  },
  {
    name: 'Cabinets professionnels',
    href: routeForGermanPath('/kanzleien/')?.fr,
    image: '/images/Kanzlei.jpg',
    description: 'Nous mettons les experts-comptables, les avocats et les autres professionnels en relation avec des repreneurs potentiels.',
  },
  {
    name: 'Services aux bâtiments',
    href: routeForGermanPath('/facility-management/')?.fr,
    image: '/images/facility%20management%204.jpg',
    description: 'Nous mettons les propriétaires et dirigeants d’entreprises de services aux bâtiments en relation avec des repreneurs et partenaires stratégiques.',
  },
  {
    name: 'Commerce de détail',
    href: routeForGermanPath('/einzelhandel/')?.fr,
    image: '/images/Einzelhandel.jpg',
    description: 'Du commerce indépendant à l’entreprise de distribution établie, nous aidons à trouver de nouvelles perspectives.',
  },
  {
    name: 'Services aux entreprises',
    href: routeForGermanPath('/dienstleistungen/')?.fr,
    image: '/images/Dienstleistung.jpg',
    description: 'Nous mettons en relation les prestataires spécialisés et les entreprises de services avec des repreneurs adaptés.',
  },
];

export const frenchBlogPosts = [
  {
    slug: 'tierarztpraxis-verkaufen-nachfolger-finden',
    title: 'Vendre un cabinet vétérinaire : trouver le bon repreneur',
    date: '2026-11-04',
    shortDate: '4 nov.',
    label: 'Médecine vétérinaire · Transmission d’entreprise',
    text: 'Comment préparer la transmission d’un cabinet vétérinaire, trouver un repreneur adapté et organiser une transition discrète.',
    image: '/images/Tierarztpraxis%20und%20Praxisteam.jpg',
    localizedHref: routeForGermanPath('/tierarztpraxis-verkaufen-nachfolger-finden/')?.fr,
  },
  {
    slug: 'handwerksbetrieb-verkaufen-nachfolger-finden',
    title: 'Vendre une entreprise artisanale : trouver le bon repreneur',
    date: '2026-11-02',
    shortDate: '2 nov.',
    label: 'Artisanat · Transmission d’entreprise',
    text: 'Les étapes pour préparer la vente d’une entreprise artisanale et choisir un repreneur adapté à son activité.',
    image: '/images/Handwerksbetrieb%20verkaufen.jpg',
    localizedHref: routeForGermanPath('/handwerksbetrieb-verkaufen-nachfolger-finden/')?.fr,
  },
  {
    slug: 'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden',
    title: 'Transmission d’entreprise artisanale : préparer les prochaines étapes',
    date: '2026-10-28',
    shortDate: '28 oct.',
    label: 'Artisanat · Transmission d’entreprise',
    text: 'Pourquoi anticiper la transmission, évaluer son entreprise et préparer une passation adaptée.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85',
    localizedHref: routeForGermanPath('/unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden/')?.fr,
  },
];

export const frenchBlogCategories = ['Artisanat', 'Médecine vétérinaire', 'Services aux entreprises', 'Commerce de détail', 'Cabinets professionnels', 'Services aux bâtiments'];

export const frenchProcessItems = [
  {
    title: 'Une approche humaine',
    summary: 'Des relations personnelles plutôt que des plateformes anonymes.',
    detail: 'Une transmission réussie commence par la confiance. Nous privilégions les échanges directs et les mises en relation ciblées.',
    href: routeForGermanPath('/persönlich/')?.fr,
    imageClass: 'image-strategy',
  },
  {
    title: 'La confidentialité',
    summary: 'La discrétion dès le premier échange.',
    detail: 'Votre projet est sensible. Nous protégeons vos informations et ne les partageons qu’avec votre accord.',
    href: routeForGermanPath('/diskretion/')?.fr,
    imageClass: 'image-branding',
  },
  {
    title: 'Notre réseau',
    summary: 'Les bons contacts font la différence.',
    detail: 'Nous tenons compte de l’activité, de la taille de l’entreprise, ainsi que des projets et de l’expérience des repreneurs potentiels.',
    href: routeForGermanPath('/netzwerk/')?.fr,
    imageClass: 'image-marketing',
  },
  {
    title: 'Sans commission vendeur',
    summary: 'Aucune commission d’intermédiation liée au succès pour les vendeurs.',
    detail: 'Les frais uniques d’inscription et de préparation du profil sont de 184 €. Aucune commission vendeur liée au succès ne s’ajoute.',
    href: routeForGermanPath('/provisionsfrei/')?.fr,
    imageClass: 'image-planning',
  },
  {
    title: 'Un accompagnement personnel',
    summary: 'Un interlocuteur dédié à chaque étape.',
    detail: 'De la première conversation aux prochaines étapes, nous vous accompagnons personnellement et restons attentifs à vos objectifs.',
    href: routeForGermanPath('/persönliche-betreuung/')?.fr,
    imageClass: 'image-support',
  },
];

export const frenchAnalysisSteps = [
  { title: 'Prenez contact', text: 'Présentez-nous brièvement votre entreprise et vos premières questions.' },
  { title: 'Nous découvrons votre activité', text: 'Nous échangeons sur votre projet et préparons les informations utiles.' },
  { title: 'Nous étudions les possibilités', text: 'Nous recherchons dans notre réseau des repreneurs, acheteurs et investisseurs adaptés.' },
  { title: 'Vous décidez', text: 'Vous choisissez si une mise en relation vous convient et quelles seront les prochaines étapes.' },
];

const sectorCopy = {
  handwerk: {
    industry: 'artisanat',
    business: 'entreprise artisanale',
    intro: 'De l’entreprise familiale à l’activité spécialisée, nous recherchons une personne capable de poursuivre votre travail et de faire grandir l’entreprise.',
    question: 'Comment assurer la continuité de l’équipe et des relations clients ?',
    answer: 'Nous prenons en compte les compétences de l’équipe, les relations établies et le savoir-faire qui font la valeur de votre entreprise.',
  },
  tiermedizin: {
    industry: 'médecine vétérinaire',
    business: 'cabinet vétérinaire',
    intro: 'Nous accompagnons les propriétaires de cabinets et de cliniques vétérinaires dans la recherche d’un repreneur, d’un associé ou d’un partenaire stratégique.',
    question: 'Comment préserver les soins et la relation avec les patients ?',
    answer: 'Nous recherchons un repreneur qui comprend le fonctionnement du cabinet et peut assurer la continuité des soins avec l’équipe en place.',
  },
  kanzleien: {
    industry: 'professions réglementées',
    business: 'cabinet professionnel',
    intro: 'Les relations avec les clients, les équipes et les responsabilités professionnelles sont au cœur de la transmission d’un cabinet.',
    question: 'Comment préserver la relation avec les clients et l’équipe ?',
    answer: 'Nous prenons en compte les besoins du cabinet et recherchons des professionnels ou des groupes qui peuvent assurer une transition structurée.',
  },
  'facility-management': {
    industry: 'services aux bâtiments',
    business: 'entreprise de services aux bâtiments',
    intro: 'Les contrats de longue durée, les équipes et la qualité des prestations sont des éléments essentiels de votre activité.',
    question: 'Comment protéger les contrats et les relations clients ?',
    answer: 'Nous préparons une recherche confidentielle et ne partageons les informations identifiantes qu’avec votre accord.',
  },
  einzelhandel: {
    industry: 'commerce de détail',
    business: 'commerce',
    intro: 'L’emplacement, la clientèle fidèle, les équipes et les relations fournisseurs contribuent à la valeur de votre commerce.',
    question: 'Comment préserver l’identité et la clientèle de mon commerce ?',
    answer: 'Nous recherchons une personne qui comprend votre activité et peut poursuivre son développement dans le respect de ce que vous avez construit.',
  },
  dienstleistungen: {
    industry: 'services aux entreprises',
    business: 'entreprise de services',
    intro: 'Votre savoir-faire, vos relations clients, vos méthodes de travail et votre équipe forment une activité cohérente à transmettre.',
    question: 'Comment choisir un repreneur adapté à mon activité ?',
    answer: 'Nous étudions l’expérience, le projet et les capacités des repreneurs potentiels pour identifier des contacts pertinents.',
  },
};

export function getFrenchSectorData(key, source) {
  const copy = sectorCopy[key];
  if (!copy) return null;
  const action = `Présenter votre ${copy.business}`;
  const fee = 'Aucune commission vendeur liée au succès. Frais uniques d’inscription et de préparation du profil : 184 €.';

  return {
    metadata: {
      title: `Transmission de votre ${copy.business} | MERGIU`,
      description: `Un accompagnement personnel et discret pour transmettre votre ${copy.business} et trouver un repreneur adapté.`,
    },
    name: copy.industry,
    promoHref: routeForGermanPath('/buchung/')?.fr,
    hero: {
      eyebrow: `TRANSMISSION D’ENTREPRISE · ${copy.industry.toUpperCase()}`,
      title: `Préparez l’avenir de votre ${copy.business}.`,
      text: `Nous vous aidons à trouver un repreneur adapté pour votre ${copy.business}, avec une approche personnelle et discrète.`,
      action,
      feeNote: fee,
      image: source.hero.image,
      imageAlt: `Une activité du secteur ${copy.industry}`,
    },
    intro: {
      eyebrow: '01 · VOTRE ACTIVITÉ',
      title: `Votre ${copy.business}.\nVotre histoire.\nUn avenir à transmettre.`,
      paragraphs: [
        `Vous envisagez de transmettre votre ${copy.business}, de vous retirer des activités quotidiennes ou de préparer une nouvelle étape pour votre entreprise ?`,
        `MERGIU vous met en relation avec des repreneurs, des acheteurs stratégiques et des investisseurs. ${copy.intro}`,
      ],
    },
    stories: [{
      eyebrow: `TRANSMETTRE UNE ACTIVITÉ DANS LE SECTEUR ${copy.industry.toUpperCase()}`,
      title: 'Nous organisons la rencontre qui compte.',
      paragraphs: [
        `Votre ${copy.business} repose sur des années de travail, des compétences spécifiques, des relations établies et une équipe engagée. La transmission doit tenir compte de ces éléments.`,
        'Le bon repreneur doit correspondre à votre projet et comprendre les personnes et le savoir-faire qui font la singularité de votre entreprise.',
      ],
      image: source.stories?.[0]?.image || source.hero.image,
      imageAlt: `Échange au sujet de la transmission d’un ${copy.business}`,
      action,
      note: 'Votre entreprise n’est pas publiée comme une annonce de vente. Les informations identifiantes ne sont partagées qu’avec votre accord.',
      listTitle: 'Les points importants pour une transmission réussie :',
      points: [
        { title: 'Expérience', text: `Une bonne compréhension du secteur ${copy.industry} et de votre activité.` },
        { title: 'Équipe', text: 'Une perspective durable pour les collaborateurs et les responsabilités existantes.' },
        { title: 'Relations', text: 'La continuité des relations avec les clients, patients ou partenaires.' },
        { title: 'Organisation', text: 'La capacité à comprendre et à poursuivre les méthodes de travail établies.' },
        { title: 'Avenir', text: 'Un projet crédible pour la prochaine étape de l’entreprise.' },
      ],
      closing: 'Une transmission réussie prend en compte l’avenir de l’entreprise autant que sa valeur économique.',
    }],
    experience: {
      eyebrow: '02 · UNE RECHERCHE ADAPTÉE',
      title: `Chaque transmission dans le secteur ${copy.industry} est différente.`,
      paragraphs: [
        `Les besoins d’un ${copy.business} dépendent de sa taille, de son emplacement, de son équipe et de ses projets. Nous prenons le temps de comprendre ces éléments avant de rechercher un repreneur.`,
        'Notre réseau comprend des repreneurs individuels, des acheteurs stratégiques, des groupes et des investisseurs.',
        'Vous gardez le contrôle du processus. Toute mise en relation est discutée avec vous au préalable.',
      ],
      listTitle: 'Nous étudions notamment :',
      points: [
        'Le modèle économique et le marché de l’entreprise',
        'L’équipe et la répartition des responsabilités',
        'Les relations avec les clients, les patients et les fournisseurs',
        'Le calendrier et le mode de transmission souhaités',
        'L’expérience et le projet du repreneur',
      ],
      closing: 'La transition peut être progressive. Le propriétaire peut, selon les situations, rester impliqué pendant une période convenue.',
    },
    process: {
      eyebrow: '03 · NOTRE ACCOMPAGNEMENT',
      title: 'Une recherche de repreneur personnelle et discrète.',
      action,
      steps: [
        { title: 'Confidentialité', text: 'Votre entreprise n’est pas annoncée publiquement. Les informations sont partagées uniquement avec votre accord.' },
        { title: 'Des frais clairs', text: 'Les frais uniques d’inscription et de préparation du profil sont de 184 €. Aucune commission vendeur liée au succès ne s’ajoute.' },
        { title: 'Des contacts ciblés', text: 'Nous étudions les profils de notre réseau afin que vous puissiez vous concentrer sur votre activité.' },
        { title: 'Vous décidez', text: 'Vous choisissez si une mise en relation vous convient et quelles seront les prochaines étapes.' },
      ],
    },
    faq: {
      eyebrow: '04 · QUESTIONS FRÉQUENTES',
      title: 'Une transmission soulève des questions. Nous les prenons au sérieux.',
      items: [
        { question: 'Mes collaborateurs ou mes clients seront-ils informés ?', answer: 'Votre projet est traité de manière confidentielle. Aucune annonce publique n’est publiée et les informations identifiantes ne sont communiquées qu’avec votre accord.' },
        { question: 'Dois-je vendre au premier candidat ?', answer: 'Non. Vous décidez si un repreneur potentiel correspond à votre projet et si vous souhaitez poursuivre les échanges.' },
        { question: copy.question, answer: copy.answer },
        { question: 'Dois-je être prêt à transmettre immédiatement ?', answer: 'Non. Un premier échange peut vous aider à comprendre les options et à préparer une transmission future.' },
        { question: 'Quels frais sont à prévoir ?', answer: 'Les frais uniques d’inscription et de préparation du profil sont de 184 €. Les vendeurs ne paient pas de commission d’intermédiation liée au succès.' },
      ],
    },
    benefits: {
      eyebrow: '05 · POURQUOI MERGIU ?',
      title: 'Votre transmission, accompagnée personnellement.',
      emphasis: 'Un réseau intersectoriel.',
      items: [
        { title: 'Un interlocuteur dédié', text: 'Vous échangez directement avec une personne qui comprend votre activité et vos objectifs.' },
        { title: 'Plusieurs profils de repreneurs', text: 'Nous étudions les projets de repreneurs individuels, de groupes, d’acheteurs et d’investisseurs.' },
        { title: 'Une approche confidentielle', text: 'Votre projet et les informations sur votre entreprise sont partagés avec votre accord.' },
      ],
    },
    contact: {
      title: `L’avenir de votre ${copy.business} commence par un échange.`,
      text: `Présentez-nous votre ${copy.business}. Nous vous répondrons personnellement.`,
      action,
      subject: `Transmission d’un ${copy.business}`,
    },
  };
}
