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
  const base = (import.meta as any).env?.BASE_URL || "/"; // includes trailing slash in Vite
  const normalize = (p: string) => (p.startsWith("/") ? p : `/${p}`);
  const baseNormalized = base.endsWith("/") ? base.slice(0, -1) : base;
  const canonical = origin + (path ? `${baseNormalized}${normalize(path)}` : (typeof window !== "undefined" ? window.location.pathname : "/"));

  const metaTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
  const metaDescription = description?.slice(0, 160) || "Kennedy Equity is a real estate holding company focused on strategic investments, value creation, and trusted property management.";
  const ogImage = image || origin + "/favicon.png";

  return (
    <Helmet>
      <title>{metaTitle}</title>
      {metaDescription && <meta name="description" content={metaDescription} />}
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Kennedy Equity" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Kennedy Equity" />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
