import { industries } from '../../data/homepage';
import SiteFooter from '../site/SiteFooter';
import SiteHeader from '../site/SiteHeader';
import { BlogCardGrid, PrinciplesGrid, StoryBlock, ValueHero, ValueIntro } from './ValueSections';
import styles from './ValuePage.module.css';

export default function ValuePage({ page }) {
  return (
    <div className={styles.page} id="top">
      <SiteHeader />
      <main>
        <ValueHero hero={page.hero} />
        <ValueIntro intro={page.intro} />
        <PrinciplesGrid principles={page.principles} />
        <StoryBlock story={page.story} />
        <BlogCardGrid />
      </main>
      <SiteFooter industries={industries} />
    </div>
  );
}
