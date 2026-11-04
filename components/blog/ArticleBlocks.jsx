import Link from 'next/link';
import InViewMotion from '../motion/InViewMotion';
import styles from './BlogArticleLayout.module.css';

function InlineContent({ content }) {
  if (typeof content === 'string') return content;

  return content.map((part, index) => {
    if (typeof part === 'string') return part;
    if (part.strong) return <strong key={index}>{part.strong}</strong>;
    if (part.em) return <em key={index}>{part.em}</em>;
    return null;
  });
}

function List({ items, ordered = false }) {
  const ListTag = ordered ? 'ol' : 'ul';
  return (
    <ListTag className={styles.list}>
      {items.map((item, index) => <li key={index}><InlineContent content={item} /></li>)}
    </ListTag>
  );
}

export function ArticleBlocks({ blocks }) {
  return blocks.map((block, index) => {
    switch (block.type) {
      case 'p':
        return (
          <p className={block.intro ? styles.intro : undefined} key={index}>
            <InlineContent content={block.content} />
          </p>
        );
      case 'h2':
        return <h2 key={index}>{block.text}</h2>;
      case 'h3':
        return <h3 key={index}>{block.text}</h3>;
      case 'ul':
      case 'ol':
        return <List items={block.items} ordered={block.type === 'ol'} key={index} />;
      case 'image':
        return (
          <InViewMotion as="img" className={styles.inlineImage} src={block.src} alt={block.alt} loading="lazy" key={index} />
        );
      case 'quote':
        return <blockquote className={styles.quote} key={index}>{block.text}</blockquote>;
      case 'cta':
        return (
          <InViewMotion as="aside" className={styles.cta} key={index}>
            <strong>{block.title}</strong>
            {block.text && <span>{block.text}</span>}
            <Link className={styles.ctaLink} href={block.href}>{block.label}</Link>
          </InViewMotion>
        );
      case 'faq':
        return (
          <InViewMotion as="section" className={styles.faq} aria-labelledby="faq-title" key={index}>
            <h2 id="faq-title">{block.title}</h2>
            {block.items.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </InViewMotion>
        );
      default:
        return null;
    }
  });
}
