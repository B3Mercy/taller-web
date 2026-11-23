import { useEffect } from 'react';
import { siteConfig } from '../data/siteConfig';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  schema?: object | object[];
}

export const SEOHead = ({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  ogImage = siteConfig.images.heroBackground,
  schema,
}: SEOHeadProps) => {
  useEffect(() => {
    // Título de la pestaña sin duplicación de marca
    const displayTitle = title.includes(siteConfig.brandName) ? title : `${title} | ${siteConfig.brandName}`;
    document.title = displayTitle;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical link
    const baseUrl = siteConfig.siteUrl;
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const fullUrl = `${baseUrl}${cleanPath}`;
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Open Graph
    const setMeta = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('og:title', displayTitle);
    setMeta('og:description', description);
    setMeta('og:url', fullUrl);
    setMeta('og:type', ogType);
    setMeta('og:image', ogImage);

    // Schema.org JSON-LD
    const existingSchema = document.getElementById('route-schema-jsonld');
    if (existingSchema) {
      existingSchema.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'route-schema-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById('route-schema-jsonld');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonicalPath, ogType, ogImage, schema]);

  return null;
};
