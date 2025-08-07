import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  structuredData?: Record<string, any>;
}

export const SEO = ({ title, description, path, image, structuredData }: SEOProps) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonical = origin + (path ?? (typeof window !== "undefined" ? window.location.pathname : "/"));

  const metaTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
  const metaDescription = description?.slice(0, 160);

  return (
    <Helmet>
      <title>{metaTitle}</title>
      {metaDescription && <meta name="description" content={metaDescription} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={metaTitle} />
      {metaDescription && <meta property="og:description" content={metaDescription} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      {image && <meta name="twitter:image" content={image} />}

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
