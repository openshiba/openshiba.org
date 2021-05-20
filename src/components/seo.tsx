import { Helmet } from 'react-helmet';

// eslint-disable-next-line
function Seo({
  author, description, lang, meta, title,
}) {
  const metaDescription = description || 'Open Shiba Foundation';
  const defaultTitle = title || 'Open Shiba Foundation';
  const defaultAuthor = author || 'Open Shiba Foundation';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title || defaultTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: defaultAuthor,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

export default Seo;
