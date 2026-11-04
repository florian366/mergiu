import BlogPreview from '../components/home/BlogPreview';
import HeroSection from '../components/home/HeroSection';
import IndustrySection from '../components/home/IndustrySection';
import IntroSection from '../components/home/IntroSection';
import ProcessAccordion from '../components/home/ProcessAccordion';
import StatsSection from '../components/home/StatsSection';
import AnalysisSection from '../components/home/AnalysisSection';
import SuccessSection from '../components/home/SuccessSection';
import SiteFooter from '../components/site/SiteFooter';
import SiteHeader from '../components/site/SiteHeader';
import { analysisSteps, blogCategories, blogPosts, industries, processItems } from '../data/homepage';

export default function HomePage({ locale = 'de', content = {} }) {
  const isEnglish = locale === 'en';
  const pageIndustries = content.industries || industries;
  const pagePosts = content.blogPosts || blogPosts;
  const pageCategories = content.blogCategories || blogCategories;
  const pageProcessItems = content.processItems || processItems;
  return (
    <>
      <SiteHeader isHomePage locale={locale} />
      <main id="top">
        <HeroSection locale={locale} />
        <IntroSection locale={locale} />
        <IndustrySection industries={pageIndustries} locale={locale} />
        <StatsSection locale={locale} />
        <ProcessAccordion items={pageProcessItems} locale={locale} />
        <SuccessSection locale={locale} />
        <AnalysisSection locale={locale} steps={content.analysisSteps || analysisSteps} />
        <BlogPreview posts={pagePosts} categories={pageCategories} locale={locale} />
      </main>
      <SiteFooter industries={pageIndustries} locale={locale} />
    </>
  );
}
