const origin = 'https://mergiu.com';
const route = '/fr/vendre-cabinet-veterinaire-trouver-repreneur/';
const image = `${origin}/images/Tierarztpraxis%20und%20Praxisteam.jpg`;

export const frenchVeterinaryArticle = {
  heading: 'Vendre un cabinet vétérinaire : trouver le bon repreneur',
  category: 'Médecine vétérinaire',
  byline: 'MERGIU · MÉDECINE VÉTÉRINAIRE · 4 NOVEMBRE 2026',
  image: {
    src: '/images/Tierarztpraxis%20und%20Praxisteam.jpg',
    alt: 'Cabinet vétérinaire et équipe de soins',
  },
  metadata: {
    title: 'Vendre un cabinet vétérinaire : trouver le bon repreneur | MERGIU',
    description: 'Découvrez comment préparer la transmission de votre cabinet vétérinaire et trouver un repreneur adapté, en toute discrétion.',
    alternates: { canonical: `${origin}${route}` },
    openGraph: {
      type: 'article',
      title: 'Vendre un cabinet vétérinaire : trouver le bon repreneur',
      description: 'Conseils pour préparer la transmission d’un cabinet vétérinaire et organiser une reprise en toute discrétion.',
      url: `${origin}${route}`,
      siteName: 'MERGIU',
      locale: 'fr_FR',
      images: [{ url: image, alt: 'Cabinet vétérinaire et équipe de soins' }],
      publishedTime: '2026-11-04',
      section: 'Médecine vétérinaire',
      tags: ['Vendre un cabinet vétérinaire', 'Transmission de cabinet'],
    },
  },
  jsonLd: [{
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Vendre un cabinet vétérinaire : trouver le bon repreneur',
    description: 'Conseils pour préparer la transmission d’un cabinet vétérinaire et organiser une reprise en toute discrétion.',
    datePublished: '2026-11-04',
    dateModified: '2026-11-04',
    inLanguage: 'fr-FR',
    author: { '@type': 'Organization', name: 'MERGIU' },
    publisher: { '@type': 'Organization', name: 'MERGIU' },
    image,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${origin}${route}` },
  }],
  blocks: [
    { type: 'p', intro: true, content: 'La transmission d’un cabinet vétérinaire est une étape importante dans la carrière de son propriétaire. Il ne s’agit pas seulement de céder une entreprise : il faut aussi préserver le travail accompli, l’équilibre de l’équipe et la continuité des soins aux animaux.' },
    { type: 'p', content: 'Le bon repreneur doit présenter un projet cohérent sur les plans professionnel, humain et économique. Une préparation anticipée permet d’étudier plusieurs options et de choisir le calendrier qui vous convient.' },
    { type: 'h2', text: 'Qu’est-ce qui fait la valeur d’un cabinet vétérinaire ?' },
    { type: 'p', content: 'Les locaux et les équipements ne représentent qu’une partie de la valeur du cabinet. L’organisation, les compétences de l’équipe, la fidélité de la clientèle, les spécialités proposées et la situation financière comptent également.' },
    { type: 'p', content: 'Un dossier clair sur l’activité, les charges, les investissements et la répartition des responsabilités aide les repreneurs à comprendre le fonctionnement du cabinet et à préparer une transition réaliste.' },
    { type: 'h2', text: 'Qui peut reprendre un cabinet vétérinaire ?' },
    { type: 'p', content: 'Selon la taille et la situation du cabinet, le repreneur peut être un vétérinaire salarié souhaitant s’installer, un autre praticien, un associé ou un groupe de cabinets. Chaque option implique un mode de financement et une organisation différents.' },
    { type: 'h3', text: 'Un projet adapté à l’équipe et aux patients' },
    { type: 'p', content: 'Une reprise réussie tient compte des collaborateurs déjà en place et de la relation de confiance établie avec les propriétaires d’animaux. Le repreneur doit pouvoir assurer la continuité des soins et comprendre les spécificités de l’activité.' },
    { type: 'h2', text: 'Préparer la transmission suffisamment tôt' },
    { type: 'p', content: 'Commencer les échanges plusieurs années avant la date envisagée laisse le temps d’organiser les informations, de clarifier vos objectifs et d’envisager une cession progressive. La présence temporaire du propriétaire ou l’arrivée d’un associé peuvent aussi faire partie de la transition.' },
    { type: 'p', content: 'Il est également utile de réfléchir aux sujets qui comptent le plus pour vous : la continuité des soins, l’avenir de l’équipe, le rôle que vous souhaitez conserver et le calendrier de départ.' },
    { type: 'h2', text: 'Comment organiser une recherche discrète ?' },
    { type: 'p', content: 'Une annonce publique n’est pas la seule manière de trouver un repreneur. Une approche ciblée permet d’identifier des personnes ou des groupes susceptibles d’être intéressés, tout en protégeant les informations sensibles du cabinet.' },
    { type: 'p', content: 'Les données identifiantes et les documents détaillés ne doivent être partagés qu’avec votre accord. Vous gardez ainsi la maîtrise du rythme de la recherche et des interlocuteurs approchés.' },
    { type: 'h2', text: 'L’accompagnement de MERGIU' },
    { type: 'p', content: 'MERGIU met en relation les propriétaires de cabinets avec des repreneurs, des praticiens, des groupes et des investisseurs de son réseau. Nous prenons le temps de comprendre votre situation et vos attentes avant d’explorer les contacts adaptés.' },
    { type: 'p', content: 'Les vendeurs ne paient pas de commission d’intermédiation liée au succès. L’inscription et la préparation d’un profil d’entreprise donnent lieu à des frais uniques de 184 euros.' },
    { type: 'cta', title: 'Vous envisagez de transmettre votre cabinet vétérinaire ?', text: 'Échangez avec MERGIU sur les options possibles, en toute confidentialité.', label: 'Présenter votre cabinet ↗︎', href: '/fr/presenter-votre-entreprise/' },
    { type: 'h2', text: 'Une transmission qui prépare la suite' },
    { type: 'p', content: 'La réussite d’une transmission ne se mesure pas uniquement au prix de vente. Un projet solide protège la continuité du cabinet, donne une perspective à l’équipe et permet au repreneur de poursuivre le développement de l’activité.' },
  ],
};

function makeFrenchArticle({ slug, heading, description, category, date, imageSrc, imageAlt, sections, intro }) {
  const canonical = `${origin}${slug}`;
  const imageUrl = `${origin}${imageSrc}`;
  const blocks = [{ type: 'p', intro: true, content: intro }];
  for (const section of sections) {
    blocks.push({ type: 'h2', text: section.heading });
    for (const paragraph of section.paragraphs || []) blocks.push({ type: 'p', content: paragraph });
    if (section.items) blocks.push({ type: 'ul', items: section.items });
  }
  blocks.push({
    type: 'cta',
    title: 'Vous préparez la transmission de votre entreprise ?',
    text: 'Échangez avec MERGIU sur les prochaines étapes, en toute confidentialité.',
    label: 'Présenter votre entreprise ↗︎',
    href: '/fr/presenter-votre-entreprise/',
  });

  return {
    heading,
    category,
    byline: `MERGIU · ${category.toLocaleUpperCase('fr-FR')} · ${date}`,
    image: { src: imageSrc, alt: imageAlt },
    metadata: {
      title: `${heading} | MERGIU`,
      description,
      alternates: { canonical },
      openGraph: { type: 'article', title: heading, description, url: canonical, siteName: 'MERGIU', locale: 'fr_FR', images: [{ url: imageUrl, alt: imageAlt }] },
    },
    jsonLd: [{
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: heading,
      description,
      inLanguage: 'fr-FR',
      author: { '@type': 'Organization', name: 'MERGIU' },
      publisher: { '@type': 'Organization', name: 'MERGIU' },
      image: imageUrl,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    }],
    blocks,
  };
}

export const frenchCraftSaleArticle = makeFrenchArticle({
  slug: '/fr/vendre-entreprise-artisanale-trouver-repreneur/',
  heading: 'Vendre une entreprise artisanale : trouver le bon repreneur',
  description: 'Comment préparer la vente d’une entreprise artisanale, évaluer son activité et trouver un repreneur adapté.',
  category: 'Artisanat',
  date: '2 NOVEMBRE 2026',
  imageSrc: '/images/Handwerksbetrieb%20verkaufen.jpg',
  imageAlt: 'Entreprise artisanale et atelier',
  intro: 'Une entreprise artisanale s’est souvent construite au fil de nombreuses années. Elle réunit une équipe, un savoir-faire, une clientèle fidèle et des relations professionnelles que le dirigeant souhaite voir perdurer après son départ.',
  sections: [
    {
      heading: 'À qui transmettre une entreprise artisanale ?',
      paragraphs: ['Le repreneur peut être un entrepreneur du même secteur, un salarié expérimenté souhaitant s’installer, une entreprise qui veut développer son activité ou un investisseur. Le profil adapté dépend de la taille de l’entreprise, de ses spécialités, de son équipe et de vos objectifs.', 'Il ne suffit pas de comparer les offres financières. Il est également important d’évaluer l’expérience du repreneur, son projet pour l’entreprise et sa capacité à prendre en charge les responsabilités liées à l’activité.'],
    },
    {
      heading: 'Évaluer l’entreprise et préparer les informations',
      paragraphs: ['La valeur d’une entreprise ne dépend pas uniquement de son chiffre d’affaires ou de ses équipements. La rentabilité, les contrats, la clientèle, les collaborateurs, les commandes en cours et la dépendance au dirigeant sont également déterminants.', 'Un dossier organisé permet aux candidats de comprendre l’activité et de préparer une reprise réaliste. Il est utile de rassembler les comptes, les informations sur les équipes, les contrats et les actifs de l’entreprise.'],
      items: ['Résultats financiers et évolution de l’activité', 'Équipe, compétences et répartition des responsabilités', 'Clientèle, contrats et carnet de commandes', 'Équipements, locaux et autres actifs', 'Organisation qui permet à l’activité de fonctionner sans le dirigeant'],
    },
    {
      heading: 'Commencer à préparer la transmission suffisamment tôt',
      paragraphs: ['Anticiper la transmission laisse le temps de clarifier vos attentes, de préparer les informations et d’envisager plusieurs scénarios. Vous pouvez notamment décider du calendrier, du rôle que vous souhaitez garder et de la durée de la période de transition.', 'Une organisation moins dépendante du dirigeant et des responsabilités bien réparties facilitent également la continuité de l’activité après la reprise.'],
    },
    {
      heading: 'Organiser la vente étape par étape',
      paragraphs: ['La démarche comprend la préparation de l’entreprise, la définition de vos objectifs, la recherche de candidats et l’examen de leurs projets. Lorsque les deux parties souhaitent avancer, elles peuvent approfondir les informations, convenir des conditions et préparer la passation avec leurs conseils professionnels.'],
      items: ['Préparer les informations essentielles sur l’entreprise', 'Définir le calendrier et vos objectifs de cession', 'Identifier des repreneurs correspondant à votre projet', 'Échanger avec les candidats et étudier leur proposition', 'Préparer les conditions de la reprise et la transition'],
    },
    {
      heading: 'Protéger la confidentialité pendant la recherche',
      paragraphs: ['Une annonce publique n’est pas la seule manière de trouver un repreneur. Une recherche ciblée permet d’approcher des candidats potentiels tout en préservant la confidentialité vis-à-vis des équipes, des clients et des concurrents.', 'Les informations qui permettraient d’identifier l’entreprise ne sont partagées qu’après discussion et avec votre accord.'],
    },
    {
      heading: 'L’accompagnement de MERGIU',
      paragraphs: ['MERGIU met en relation les dirigeants qui envisagent une cession avec des repreneurs, des acheteurs stratégiques et des investisseurs de son réseau. Nous commençons par comprendre votre activité et vos attentes, puis discutons avec vous des contacts qui pourraient convenir.', 'Les vendeurs paient des frais uniques de 184 € pour l’inscription et la préparation du profil. Aucune commission d’intermédiation liée au succès ne leur est facturée.'],
    },
    {
      heading: 'Construire une continuité pour l’entreprise',
      paragraphs: ['Une transmission réussie doit préparer la suite de l’activité. Le repreneur doit pouvoir prendre ses responsabilités, préserver les relations importantes et porter un projet crédible pour l’équipe et la clientèle.', 'Une préparation anticipée et une transition structurée donnent au dirigeant et au repreneur de meilleures conditions pour réussir ce passage de relais.'],
    },
  ],
});

export const frenchCraftSuccessionArticle = makeFrenchArticle({
  slug: '/fr/transmission-entreprise-artisanale/',
  heading: 'Transmission d’entreprise artisanale : préparer les prochaines étapes',
  description: 'Les points essentiels pour planifier la transmission d’une entreprise artisanale et préparer une transition réussie.',
  category: 'Artisanat',
  date: '28 OCTOBRE 2026',
  imageSrc: '/images/Handwerk.jpg',
  imageAlt: 'Activité artisanale et préparation d’une transmission',
  intro: 'La transmission d’une entreprise artisanale demande du temps et une bonne préparation. Les équipes, le savoir-faire, les relations avec les clients et la réputation locale font partie de ce que le dirigeant souhaite transmettre.',
  sections: [
    {
      heading: 'Pourquoi anticiper la transmission ?',
      paragraphs: ['Commencer plusieurs années avant la date envisagée permet d’étudier les options disponibles sans devoir prendre de décisions dans l’urgence. Vous pouvez organiser les informations, répartir les responsabilités et réfléchir au rôle que vous souhaitez avoir après la reprise.', 'Cette préparation aide aussi à repérer les points qui dépendent trop du dirigeant et à organiser progressivement le fonctionnement de l’entreprise.'],
    },
    {
      heading: 'Comprendre les facteurs de valeur',
      paragraphs: ['Le chiffre d’affaires est un indicateur parmi d’autres. La rentabilité, les contrats, les commandes en cours, l’équipe, les équipements et les relations clients contribuent à la valeur de l’entreprise.', 'Des informations à jour et une organisation claire aident les candidats à évaluer l’activité et à préparer la continuité après la reprise.'],
    },
    {
      heading: 'Identifier le profil du repreneur',
      paragraphs: ['Un repreneur peut être un membre de la famille, un collaborateur expérimenté, un entrepreneur du secteur, une entreprise stratégique ou un investisseur. Le choix dépend de votre activité, de vos objectifs et du projet envisagé pour l’entreprise.', 'L’expérience, les capacités de gestion et la manière dont le candidat souhaite accompagner l’équipe sont des éléments importants à examiner.'],
    },
    {
      heading: 'Préserver la confidentialité',
      paragraphs: ['Les dirigeants souhaitent souvent protéger leurs équipes, leurs clients et leurs partenaires pendant la recherche. Une démarche discrète permet d’examiner des possibilités sans publier d’annonce de vente.', 'Les informations sensibles ne sont partagées avec des candidats identifiés qu’après votre accord. Vous gardez la maîtrise des échanges et des étapes suivantes.'],
    },
    {
      heading: 'Comment MERGIU accompagne les dirigeants',
      paragraphs: ['MERGIU échange avec vous sur votre situation et les objectifs de la transmission. Nous recherchons ensuite dans notre réseau les repreneurs, acheteurs et investisseurs dont le projet peut correspondre à votre entreprise.', 'Toute prise de contact est préparée avec vous. Les frais uniques d’inscription et de préparation du profil sont de 184 €. Les vendeurs ne paient pas de commission d’intermédiation liée au succès.'],
    },
    {
      heading: 'Préparer une passation durable',
      paragraphs: ['Le prix n’est pas le seul critère d’une bonne transmission. Une passation réussie tient compte de l’avenir de l’équipe, des clients et de l’activité. Une période d’accompagnement peut faciliter le transfert du savoir-faire et des responsabilités.', 'En clarifiant tôt vos priorités et en étudiant plusieurs profils, vous préparez une transition adaptée à l’entreprise et à celles et ceux qui la font vivre.'],
    },
  ],
});
