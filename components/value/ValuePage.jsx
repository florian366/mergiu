import { industries } from '../../data/homepage';
import SiteFooter from '../site/SiteFooter';
import SiteHeader from '../site/SiteHeader';
import { BlogCardGrid, PrinciplesGrid, StoryBlock, ValueHero, ValueIntro } from './ValueSections';
import styles from './ValuePage.module.css';

export default function ValuePage({ page, locale = 'de', posts, industries: pageIndustries = industries }) {
  return (
    <div className={styles.page} id="top">
      <SiteHeader locale={locale} />
      <main>
        <ValueHero hero={page.hero} locale={locale} />
        <ValueIntro intro={page.intro} />
        <PrinciplesGrid principles={page.principles} />
        <StoryBlock story={page.story} />
        <BlogCardGrid locale={locale} posts={posts} />
      </main>
      <SiteFooter industries={pageIndustries} locale={locale} />
    </div>
  );
}
