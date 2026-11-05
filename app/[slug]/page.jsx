import { notFound } from 'next/navigation';
import BlogArticleLayout from '../../components/blog/BlogArticleLayout';
import EnglishAuxiliaryPage from '../../components/i18n/EnglishAuxiliaryPage';
import EnglishInsightsPage from '../../components/i18n/EnglishInsightsPage';
import BookingPage from '../buchung/page';
import HomePage from '../page';
import SectorLandingPage from '../../components/sector/SectorLandingPage';
import ValuePage from '../../components/value/ValuePage';
import { blogArticles } from '../../data/blog-articles';
import { blogCategories, blogPosts, industries, processItems } from '../../data/homepage';
import { sectors } from '../../data/sectors';
import { valuePages } from '../../data/value-pages';
import { getEnglishDictionary, localizeTree } from '../../data/english-translation';
import { localizedRoutes } from '../../data/i18n-routes';

function entryForSlug(slug) {
  return localizedRoutes.find((route) => route.en.split('/').filter(Boolean).at(-1) === slug);
}

function constructionCopy(value) {
  if (typeof value === 'string') {
    return value
      .replace(/skilled[- ]trade businesses/gi, 'construction businesses')
      .replace(/skilled[- ]trade business/gi, 'construction business')
      .replace(/skilled trades/gi, 'construction')
      .replace(/skilled[- ]trade/gi, 'construction')
      .replace(/craft businesses/gi, 'construction businesses')
      .replace(/craft business/gi, 'construction business')
      .replace(/master craftspeople/gi, 'construction professionals');
  }
  if (Array.isArray(value)) return value.map(constructionCopy);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, constructionCopy(item)]));
  return value;
}

function englishSectorData(source, key) {
  const industriesByKey = {
    handwerk: { name: 'Construction', business: 'construction business', imageAlt: 'Construction business and workshop' },
    tiermedizin: { name: 'Veterinary medicine', business: 'veterinary practice', imageAlt: 'Veterinarian caring for an animal in a practice' },
    kanzleien: { name: 'Professional firms', business: 'professional firm', imageAlt: 'Professional firm and workplace' },
    'facility-management': { name: 'Facility services', business: 'facility management business', imageAlt: 'Facility services in a modern building' },
    einzelhandel: { name: 'Retail', business: 'retail business', imageAlt: 'Retail business and its products' },
    dienstleistungen: { name: 'Business services', business: 'business services company', imageAlt: 'Business services company at work' },
  };
  const industry = industriesByKey[key];
  const business = industry.business;
  const possessive = business.startsWith('v') ? 'your' : 'your';
  const image = source.hero.image;
  const storyImage = source.stories?.[0]?.image || image;
  const buyers = 'experienced successors, strategic buyers and investors';
  const common = {
    name: industry.name,
    promoHref: '/present-your-business/',
    hero: {
      eyebrow: `SELL YOUR ${business.toUpperCase()} · BUSINESS SUCCESSION`,
      before: `Your ${business} deserves a`,
      emphasis: 'future.',
      text: `We help you find the right successor for ${possessive} business through personal introductions, without a success-based seller commission.`,
      action: 'Present your business',
      feeNote: 'No success-based brokerage commission for sellers. One-time registration and profile-preparation fee: EUR 184.',
      image,
      imageAlt: industry.imageAlt,
    },
    intro: {
      eyebrow: '01 · YOUR BUSINESS',
      title: 'Your business.\nYour story.\nIn good hands.',
      paragraphs: [
        `Are you considering selling your ${business}, stepping back from day-to-day operations or finding a partner for its next stage?`,
        `MERGIU connects owners with ${buyers}. We take a personal, discreet approach and look beyond the numbers to understand what makes your business distinctive.`,
      ],
    },
    stories: [{
      eyebrow: 'THE RIGHT SUCCESSOR MAKES THE DIFFERENCE',
      title: 'We make the introductions that matter.',
      paragraphs: [
        `A ${business} is built on more than its financial statements. Teams, customer relationships, know-how and established processes all contribute to its value.`,
        'The right successor should be a strong professional and financial fit, and understand the people and experience behind the business.',
      ],
      image: storyImage,
      imageAlt: `${industry.name} business preparing for succession`,
      action: 'Present your business',
      note: 'Your business is never publicly listed for sale. We share identifiable information only with your approval.',
      listTitle: 'What matters in a successful handover:',
      points: [
        { title: 'Experience', text: `Understanding of the ${industry.name.toLowerCase()} market and your business model.` },
        { title: 'People', text: 'A clear and reliable future for your employees and existing relationships.' },
        { title: 'Continuity', text: 'Respect for the processes, reputation and customer trust you have built.' },
        { title: 'Leadership', text: 'The ability to take responsibility and lead the business forward.' },
        { title: 'Future', text: 'A credible plan for the next stage of the business.' },
      ],
      closing: 'A good succession considers the future of the business as well as the purchase price.',
    }],
    experience: {
      eyebrow: '02 · OUR EXPERIENCE',
      title: `Every ${industry.name.toLowerCase()} succession is different.`,
      paragraphs: [
        `The needs of a ${business} depend on its size, location, team and plans for the future. We take time to understand those details before looking for a successor.`,
        `Our network includes ${buyers}, giving us different ways to explore the right next step for your business.`,
        'You remain in control throughout the process. We make introductions only after discussing them with you.',
      ],
      listTitle: 'We consider:',
      points: ['Your business model and market', 'The team and existing responsibilities', 'Customer and supplier relationships', 'Your preferred timing and handover model', 'The successor’s experience and plans'],
      closing: 'You do not have to leave overnight. A gradual transition or continued involvement may also be possible.',
    },
    process: {
      eyebrow: '03 · HOW IT WORKS',
      title: 'A discreet, personal succession search.',
      action: 'Present your business',
      steps: [
        { title: 'Discretion', text: 'Your business is not publicly advertised for sale. Information is shared only with your consent.' },
        { title: 'No success fee for sellers', text: 'We charge no success-based brokerage commission to sellers. The one-time registration and profile-preparation fee is EUR 184.' },
        { title: 'Less effort', text: 'We review potential contacts in our network so you can focus on running your business.' },
        { title: 'You decide', text: 'You decide whether an introduction is right and what the next step should be.' },
      ],
    },
    faq: {
      eyebrow: '04 · FREQUENTLY ASKED QUESTIONS',
      title: 'A business succession raises important questions. We take them seriously.',
      items: [
        { question: 'Will my employees, customers or competitors find out?', answer: 'Your succession plans are treated confidentially. We do not publish a public sales listing, and we share identifying information only with your approval.' },
        { question: 'Do I have to sell to the first interested buyer?', answer: 'No. You decide whether a potential successor is a good fit and whether to proceed with an introduction.' },
        { question: 'What if my business is highly specialised?', answer: 'We consider different types of successors, strategic buyers and investors, depending on the business and your plans.' },
        { question: 'Do I have to be ready to sell immediately?', answer: 'No. An early conversation can help you understand options and prepare for a future handover.' },
        { question: 'Do sellers pay a commission?', answer: 'Sellers do not pay a success-based brokerage commission. A one-time EUR 184 registration and profile-preparation fee applies.' },
      ],
    },
    benefits: {
      eyebrow: '05 · WHY MERGIU?',
      title: 'Your succession. Personally supported.',
      emphasis: 'Connected across industries.',
      items: [
        { title: 'A personal contact', text: 'Speak directly with someone who understands your business and your goals.' },
        { title: 'Different buyer groups', text: 'We consider individual successors, strategic buyers, business groups and investors.' },
        { title: 'A discreet process', text: 'Your plans and business details are shared only with your approval.' },
      ],
    },
    contact: {
      title: `The future of your ${business} starts with a conversation.`,
      text: `Tell us about your ${business}. We will get back to you personally.`,
      action: 'Present your business',
      subject: `Present your ${business}`,
    },
  };
  return common;
}

function englishValueData(source, key) {
  const copy = {
    persoenlich: {
      eyebrow: 'PERSONAL BUSINESS SUCCESSION',
      heading: ['The right', 'connection', 'starts with people.'],
      lead: 'We listen, understand what makes your business special and look for someone who can carry its story forward.',
      intro: ['01 / A PERSONAL APPROACH', 'Your business is more than a transaction.', 'A successful succession brings together experience, values and trust. We start with a conversation and stay involved until the right connection is made.'],
      principlesTitle: ['Four things that', 'make a difference.'],
      items: [['Listen', 'We take time to understand your story, goals and priorities.'], ['Understand', 'We look beyond the numbers to consider people, culture and the future.'], ['Connect', 'We approach successors who are a genuine fit for your business.'], ['Support', 'You have a personal contact from the first conversation through the handover.']],
      storyTitle: 'We bring people together, not just businesses.',
      story: ['We begin with an open conversation: what makes your business distinctive, what kind of successor are you looking for, and what future feels right?', 'That helps us focus on relevant introductions rather than simply generating a large number of contacts.'],
      action: 'Arrange a conversation',
    },
    diskretion: {
      eyebrow: 'CONFIDENTIAL BUSINESS SUCCESSION',
      heading: ['Your plans', 'stay', 'confidential.'],
      lead: 'A succession starts with trust. We protect your information and create a private space to discuss the next steps.',
      intro: ['02 / CONFIDENTIALITY', 'A change does not have to start in public.', 'Your decision to hand over a business is personal and sensitive. We treat your situation confidentially from the outset and share information only with your explicit consent.'],
      principlesTitle: ['Trust needs', 'a safe framework.'],
      items: [['Start privately', 'We discuss your situation personally, without public exposure.'], ['Choose carefully', 'We approach contacts who fit your plans professionally and personally.'], ['Protect information', 'Business details are shared only with your approval and in an appropriate setting.'], ['Stay in control', 'You decide what is shared, when and with whom.']],
      storyTitle: 'You set the pace and scope of every conversation.',
      story: ['We agree clear next steps and give you a dedicated contact, keeping the search discreet while exploring relevant opportunities.', 'We move forward together only when a potential contact is right for you.'],
      action: 'Arrange a confidential conversation',
    },
    netzwerk: {
      eyebrow: 'A NETWORK WITH PURPOSE',
      heading: ['The right', 'connection', 'starts here.'],
      lead: 'Our network is more than a list of names. It brings together people ready to take responsibility and build what comes next.',
      intro: ['03 / OUR NETWORK', 'The right people help a business move forward.', 'We connect owners with successors, buyers and investors looking to take on a meaningful business, not just an opportunity.'],
      principlesTitle: ['Connections that', 'create possibilities.'],
      items: [['Know people', 'We build lasting relationships and understand the people behind an enquiry.'], ['Understand needs', 'We compare goals, experience and plans before making an introduction.'], ['Make the right connection', 'We bring together people with a strong professional and personal fit.'], ['Create a future', 'An initial conversation can open a new perspective for both sides.']],
      storyTitle: 'A good network brings the right people together.',
      story: ['We do not rely on anonymous lists. We speak with people, understand their aims and consider whether a conversation makes sense.', 'That creates introductions based on genuine interest and respect.'],
      action: 'Join our network',
    },
    provisionsfrei: {
      eyebrow: 'FAIR BUSINESS SUCCESSION',
      heading: ['Your future', 'without hidden', 'commissions.'],
      lead: 'We believe in fair terms and clear agreements. Sellers do not pay a success-based brokerage commission.',
      intro: ['04 / CLEAR COSTS', 'A fair succession starts with clarity.', 'We charge a transparent one-time registration and profile-preparation fee, with no success-based commission for sellers.'],
      principlesTitle: ['A fair model for', 'an important decision.'],
      items: [['Transparent costs', 'You know what you pay and what the service includes.'], ['Independent guidance', 'Our recommendations focus on the right outcome, not a commission.'], ['Protect business value', 'Your business and negotiating position remain central.'], ['You decide', 'You choose whether and with whom to take the next step.']],
      storyTitle: 'Transparency builds trust on both sides.',
      story: ['Business succession is complex enough. The fee model should not be. We explain each step clearly and set out our services.', 'That lets you focus on what matters: a strong future for your business.'],
      action: 'Learn about your options',
    },
    betreuung: {
      eyebrow: 'PERSONAL SUPPORT THROUGHOUT',
      heading: ['You do not', 'have to take', 'this path alone.'],
      lead: 'From your first idea through the handover, you have a dedicated contact who listens, thinks ahead and keeps track of the details.',
      intro: ['05 / PERSONAL GUIDANCE', 'A good succession needs someone by your side.', 'Questions arise throughout the process. We explain the options, coordinate next steps and make sure you know who is handling your enquiry.'],
      principlesTitle: ['Personal support,', 'every step of the way.'],
      items: [['Available', 'A dedicated contact who knows your situation and stays in touch.'], ['Clear direction', 'We structure the process and make next steps easy to understand.'], ['Reliable', 'We follow through on agreements and keep information moving.'], ['On your terms', 'We advise without taking decisions away from you.']],
      storyTitle: 'Personal contact makes the difference.',
      story: ['We understand more than the facts about your business. We listen to your questions, concerns and goals.', 'If circumstances change, we adjust the plan together.'],
      action: 'Meet your contact',
    },
  }[key];

  return {
    metadata: { title: `${copy.eyebrow.replaceAll('/', '·')} | MERGIU`, description: copy.lead },
    hero: {
      ...source.hero,
      eyebrow: copy.eyebrow,
      heading: copy.heading.map((text, index) => ({ text, emphasis: index === 2 })),
      lead: copy.lead,
      action: copy.action,
    },
    intro: { label: copy.intro[0], title: copy.intro[1], text: copy.intro[2] },
    principles: {
      eyebrow: 'OUR APPROACH',
      title: copy.principlesTitle,
      items: copy.items.map(([title, text]) => ({ title, text })),
    },
    story: {
      ...source.story,
      imageAlt: 'A personal conversation about the future of a business',
      eyebrow: 'A CONVERSATION THAT MOVES THINGS FORWARD',
      title: copy.storyTitle,
      paragraphs: copy.story,
      action: copy.action,
    },
  };
}

function englishArticleData(article, route) {
  const canonical = `https://mergiu.com${route.en}`;
  const isSaleArticle = route.id === 'handwerk-blog';
  const details = isSaleArticle
    ? {
        heading: 'Selling a construction business: How to find the right successor',
        title: 'Selling a construction business: Find the right successor | MERGIU',
        description: 'Learn how to prepare the sale of a construction business, identify potential buyers and plan a successful handover.',
        date: '2 NOVEMBER 2026',
        image: article.image,
        sections: [
          ['A construction business is more than a company', 'For many owners, a construction business represents decades of work. Customer relationships, employees, equipment and established operations all contribute to its value. Finding someone who can take over the whole business and lead it into the future can be challenging.'],
          ['Who could buy a construction business?', 'Potential successors include other construction business owners, experienced managers, strategic buyers, business groups and investors. The right option depends on the company’s size, specialisation, financial position and the owner’s plans.'],
          ['Understand what the business is worth', 'Revenue is only one part of a business valuation. Profitability, customer concentration, employees, equipment, property, order book and reliance on the current owner all matter. Clear operations and a capable team can make a handover easier.'],
          ['Start planning early', 'Ideally, owners begin preparing several years before their preferred handover date. That gives time to organise financial information, share responsibilities, reduce dependence on the owner and consider different transition models.'],
          ['Prepare and manage the sale', 'A sale usually involves preparing business information, setting goals, identifying suitable buyers, assessing their plans and agreeing on the handover. Professional legal, tax and financial advice can help with the transaction.'],
          ['Find buyers discreetly', 'Public listings are not the only option. Personal networks and specialist introductions can help identify interested parties while protecting confidential business information.'],
          ['How MERGIU can help', 'MERGIU connects owners with potential successors, buyers and investors. We prepare a profile, review relevant contacts in our network and discuss any introduction with you before sharing identifying information. The one-time registration and profile-preparation fee is EUR 184; sellers pay no success-based brokerage commission.'],
          ['Protect the future of your business', 'A successful handover is about more than the purchase price. The successor should understand the business, take responsibility for its team and customers, and have a credible plan for its future.'],
        ],
      }
    : {
        heading: 'Business succession in construction: What owners should consider and how to find a successor',
        title: 'Planning construction business succession | MERGIU',
        description: 'Plan a construction business succession, assess the company, prepare the handover and find a suitable successor.',
        date: '28 OCTOBER 2026',
        image: article.image,
        sections: [
          ['Why plan succession early?', 'A construction business often represents years of work, customer relationships, trained employees and a strong local reputation. Starting to plan several years before a handover gives owners more options and avoids making decisions under time pressure.'],
          ['Understand the value of the business', 'Revenue and profitability, customers, employees, equipment, property, market position and reliance on the current owner all influence a business valuation. A clear picture of these factors can help owners form realistic expectations.'],
          ['Find a successor who fits', 'Possible successors include family members, experienced employees, construction professionals, strategic buyers and investors. The right choice depends on the size of the business, its specialisation and the owner’s wishes.'],
          ['Keep the process confidential', 'Owners may not want employees, customers, suppliers or competitors to learn about a possible sale too early. A discreet search and carefully managed sharing of information can protect the business while exploring options.'],
          ['How MERGIU supports owners', 'MERGIU connects owners considering a sale or handover with potential successors, buyers and investors. We identify relevant contacts and make personal introductions only after the owner approves the next step.'],
          ['Prepare a strong handover', 'A well-run construction business deserves a future beyond its current owner. Early planning, an organised transition and a successor who understands the business can help protect its team, customers and operations.'],
        ],
      };

  const blocks = [];
  details.sections.forEach(([heading, paragraph], index) => {
    if (index === 0) blocks.push({ type: 'p', intro: true, content: paragraph });
    else blocks.push({ type: 'h2', text: heading });
    if (index === 0) blocks.push({ type: 'h2', text: heading });
    blocks.push({ type: 'p', content: paragraph });
  });
  blocks.push({ type: 'cta', title: 'Considering a sale or succession?', text: 'Tell us about your business. We will discuss suitable next steps with you confidentially.', label: 'Present your business ↗︎', href: '/present-your-business/' });

  return {
    ...article,
    heading: details.heading,
    category: 'Construction',
    byline: `MERGIU · CONSTRUCTION · ${details.date}`,
    metadata: {
      title: details.title,
      description: details.description,
      alternates: { canonical },
      openGraph: { type: 'article', title: details.heading, description: details.description, url: canonical, siteName: 'MERGIU', locale: 'en_GB', images: [`https://mergiu.com${details.image.src}`] },
    },
    jsonLd: [{ '@context': 'https://schema.org', '@type': 'Article', headline: details.heading, description: details.description, inLanguage: 'en-GB', author: { '@type': 'Organization', name: 'MERGIU' }, publisher: { '@type': 'Organization', name: 'MERGIU' }, image: `https://mergiu.com${details.image.src}`, mainEntityOfPage: { '@type': 'WebPage', '@id': canonical } }],
    blocks,
  };
}

function englishHomeContent() {
  const dictionary = getEnglishDictionary('homepage');
  const translatedIndustries = localizeTree(industries, dictionary);
  const translatedPosts = blogPosts.map((post) => {
    const routeId = post.slug === 'tierarztpraxis-verkaufen-nachfolger-finden'
      ? 'tierarztpraxis-blog'
      : post.slug === 'handwerksbetrieb-verkaufen-nachfolger-finden'
        ? 'handwerk-blog'
        : 'nachfolge-blog';
    const route = localizedRoutes.find((item) => item.id === routeId);
    const postDictionary = getEnglishDictionary(route?.translation);
    const localizedPost = localizeTree(post, postDictionary);
    localizedPost.localizedHref = route?.en;
    localizedPost.shortDate = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', timeZone: 'UTC' }).format(new Date(`${post.date}T00:00:00Z`));
    if (post.slug === 'tierarztpraxis-verkaufen-nachfolger-finden') {
      localizedPost.title = 'Selling a veterinary practice: How to find the right successor';
      localizedPost.label = 'Veterinary medicine · Business succession';
      localizedPost.text = 'Learn how to identify suitable buyers, prepare a discreet handover and find a successor who is right for your practice.';
    }
    if (post.slug === 'handwerksbetrieb-verkaufen-nachfolger-finden') {
      localizedPost.title = constructionCopy(localizedPost.title);
      localizedPost.label = 'Construction · Business succession';
      localizedPost.text = 'How to prepare the sale of a construction business, find suitable buyers and plan a successful handover.';
    }
    if (post.slug === 'unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden') {
      localizedPost.title = constructionCopy(localizedPost.title);
      localizedPost.label = 'Construction · Business succession';
      localizedPost.text = 'How owners can plan succession early, assess their business and find the right successor.';
    }
    return localizedPost;
  });

  translatedIndustries.forEach((industry) => {
    const route = localizedRoutes.find((item) => item.de === industry.href || item.en === industry.href);
    industry.englishHref = route?.en || '/business-succession/';
    if (route?.id === 'handwerk') industry.name = 'Construction';
    if (route?.id === 'facility-management') industry.name = 'Facility services';
  });

  const translatedProcess = [
    {
      title: 'A personal approach',
      summary: 'Personal connections instead of anonymous sales platforms.',
      detail: 'Successful business successions start with trust. We rely on personal relationships and individual introductions rather than public listings.',
      href: '/personal-approach/',
      imageClass: processItems[0].imageClass,
    },
    {
      title: 'Discretion',
      summary: 'Confidentiality from the outset.',
      detail: 'Your plans are sensitive. We treat your information confidentially and share it with potential successors only with your consent.',
      href: '/confidentiality/',
      imageClass: processItems[1].imageClass,
    },
    {
      title: 'Our network',
      summary: 'The right people make the difference.',
      detail: 'We consider more than industry and business size. We look for successors and buyers whose interests, experience and plans fit your business.',
      href: '/network/',
      imageClass: processItems[2].imageClass,
    },
    {
      title: 'No seller commission',
      summary: 'No success-based brokerage commission for sellers.',
      detail: 'Sellers pay a one-time EUR 184 registration and profile-preparation fee. No success-based brokerage commission is charged.',
      href: '/commission-free/',
      imageClass: processItems[3].imageClass,
    },
    {
      title: 'Personal guidance',
      summary: 'One dedicated contact throughout the process.',
      detail: 'From your first conversation to the next steps, we support you personally and keep your goals in view.',
      href: '/personal-guidance/',
      imageClass: processItems[4].imageClass,
    },
  ];

  return {
    industries: translatedIndustries,
    blogPosts: translatedPosts,
    blogCategories: blogCategories.map((category) => category === 'Handwerk' ? 'Construction' : localizeTree(category, dictionary)),
    processItems: translatedProcess,
    analysisSteps: [
      { title: 'Get in touch', text: 'Complete our short form and give us an initial overview of your business.' },
      { title: 'We get to know your business', text: 'We discuss your plans and prepare the key information.' },
      { title: 'We explore suitable options', text: 'We consider potential successors, buyers and investors from our network.' },
      { title: 'You decide', text: 'Once we identify a suitable contact, we agree the next steps with you.' },
    ],
  };
}

export function generateStaticParams() {
  return localizedRoutes.map((route) => ({ slug: route.en.split('/').filter(Boolean).at(-1) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const route = entryForSlug(slug);
  if (!route) return {};

  const dictionary = getEnglishDictionary(route.translation);
  if (route.type === 'article') {
    const article = blogArticles[route.key];
    const metadata = article?.metadata || {};
    const defaults = {
      tierarztpraxis: {
        title: 'Selling a veterinary practice: Find the right successor | MERGIU',
        description: 'Learn how to find a suitable successor for your veterinary practice and prepare a discreet handover.',
      },
    };
    const fallback = defaults.tierarztpraxis;
    const articleTitle = route.id === 'tierarztpraxis-blog' ? fallback.title : constructionCopy(localizeTree(metadata.title, dictionary));
    const articleDescription = route.id === 'tierarztpraxis-blog' ? fallback.description : localizeTree(metadata.description, dictionary);
    const canonical = `https://mergiu.com${route.en}`;
    return {
      ...localizeTree(metadata, dictionary),
      title: articleTitle || fallback.title,
      description: articleDescription || fallback.description,
      alternates: { canonical, languages: { de: `https://mergiu.com${route.de}`, en: canonical } },
      openGraph: { ...localizeTree(metadata.openGraph || {}, dictionary), url: canonical, locale: 'en_GB' },
    };
  }

  const titles = {
    home: 'Business succession advice | MERGIU',
    sector: `${route.key === 'handwerk' ? 'Construction' : route.key === 'tiermedizin' ? 'Veterinary practices' : route.key === 'kanzleien' ? 'Professional firms' : route.key === 'facility-management' ? 'Facility services businesses' : route.key === 'einzelhandel' ? 'Retail businesses' : 'Business services'} | MERGIU`,
    value: `${route.key === 'diskretion' ? 'Confidentiality' : route.key === 'netzwerk' ? 'Our network' : route.key === 'provisionsfrei' ? 'Commission-free succession' : route.key === 'betreuung' ? 'Personal guidance' : 'Personal approach'} | MERGIU`,
    category: 'Business succession insights | MERGIU',
    booking: 'Present your business | MERGIU',
    referral: 'Business succession referral reward | MERGIU',
    legal: `${route.key === 'agb' ? 'Terms and conditions' : route.key === 'datenschutz' ? 'Privacy policy' : 'Legal notice'} | MERGIU`,
  };
  const descriptions = {
    home: 'Personal, discreet support for business succession. MERGIU connects business owners with suitable successors, buyers and investors.',
    category: 'Articles and insights on business succession, selling a business and finding the right successor.',
    booking: 'Tell MERGIU about your business and explore succession options with our network.',
    referral: 'Know a business looking for a successor? Send MERGIU a discreet tip.',
    legal: 'Legal information for MERGIU website visitors.',
  };
  const canonical = `https://mergiu.com${route.en}`;
  return {
    title: titles[route.type] || localizeTree(route.key, dictionary),
    description: descriptions[route.type] || '',
    alternates: { canonical, languages: { de: `https://mergiu.com${route.de}`, en: canonical } },
  };
}

export default async function EnglishLocalizedPage({ params }) {
  const { slug } = await params;
  const route = entryForSlug(slug);
  if (!route) notFound();
  const dictionary = getEnglishDictionary(route.translation);
  const englishIndustries = localizeTree(industries, getEnglishDictionary('homepage'));
  englishIndustries.forEach((industry) => {
    const itemRoute = localizedRoutes.find((entry) => entry.de === industry.href || entry.en === industry.href);
    industry.englishHref = itemRoute?.en || '/business-succession/';
    if (itemRoute?.id === 'handwerk') industry.name = 'Construction';
    if (itemRoute?.id === 'facility-management') industry.name = 'Facility services';
  });

  if (route.type === 'home') return <HomePage locale="en" content={englishHomeContent()} />;
  if (route.type === 'sector') {
    return <SectorLandingPage data={englishSectorData(sectors[route.key], route.key)} locale="en" industries={englishIndustries} />;
  }
  if (route.type === 'value') {
    const posts = englishHomeContent().blogPosts;
    return <ValuePage page={englishValueData(valuePages[route.key], route.key)} locale="en" posts={posts} industries={englishIndustries} />;
  }
  if (route.type === 'article') {
    let article = route.id === 'handwerk-blog' || route.id === 'nachfolge-blog'
      ? englishArticleData(blogArticles[route.key], route)
      : localizeTree(blogArticles[route.key], dictionary);
    if (route.key === 'tierarztpraxis-verkaufen-nachfolger-finden') {
      article.heading = 'Selling a veterinary practice: How to find the right successor';
      article.category = 'Veterinary medicine';
      article.byline = 'MERGIU · VETERINARY MEDICINE · 4 NOVEMBER 2026';
    }
    return <BlogArticleLayout article={article} locale="en" industries={englishIndustries} />;
  }
  if (route.type === 'category') return <EnglishInsightsPage posts={englishHomeContent().blogPosts} industries={englishIndustries} />;
  if (route.type === 'booking') return <BookingPage locale="en" industries={englishIndustries} />;
  return <EnglishAuxiliaryPage route={route} industries={englishIndustries} />;
}
