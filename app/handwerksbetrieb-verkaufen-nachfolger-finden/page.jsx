import BlogArticleLayout from '../../components/blog/BlogArticleLayout';
import { blogArticles } from '../../data/blog-articles';

const article = blogArticles['handwerksbetrieb-verkaufen-nachfolger-finden'];

export const metadata = article.metadata;

export default function HandwerksbetriebNachfolgePage() {
  return <BlogArticleLayout article={article} />;
}
