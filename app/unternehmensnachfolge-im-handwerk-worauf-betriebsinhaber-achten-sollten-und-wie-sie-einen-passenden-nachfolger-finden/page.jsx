import BlogArticleLayout from '../../components/blog/BlogArticleLayout';
import { blogArticles } from '../../data/blog-articles';

const article = blogArticles['unternehmensnachfolge-im-handwerk-worauf-betriebsinhaber-achten-sollten-und-wie-sie-einen-passenden-nachfolger-finden'];

export const metadata = article.metadata;

export default function UnternehmensnachfolgeHandwerkPage() {
  return <BlogArticleLayout article={article} />;
}
