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
import { blogCategories, blogPosts, industries, processItems } from '../data/homepage';

export default function HomePage() {
  return (
    <>
      <SiteHeader isHomePage />
      <main id="top">
        <HeroSection />
        <IntroSection />
        <IndustrySection industries={industries} />
        <StatsSection />
        <ProcessAccordion items={processItems} />
        <SuccessSection />
        <AnalysisSection />
        <BlogPreview posts={blogPosts} categories={blogCategories} />
      </main>
      <SiteFooter industries={industries} />
    </>
  );
}
