import BlogArticleLayout from '../../components/blog/BlogArticleLayout';
import { blogArticles } from '../../data/blog-articles';

const article = blogArticles['tierarztpraxis-verkaufen-nachfolger-finden'];

export const metadata = article.metadata;

export default function TierarztpraxisNachfolgePage() {
  return <BlogArticleLayout article={article} />;
}
