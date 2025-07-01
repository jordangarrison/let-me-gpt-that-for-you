export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  robots?: string;
}

export const DEFAULT_SEO: SEOData = {
  title: 'Let Me GPT That For You',
  description: 'For all those people who find it more convenient to ask you rather than ChatGPT',
  keywords: 'AI chat, ChatGPT links, AI demo, artificial intelligence, share AI responses, ChatGPT demo, AI tool, free AI',
  canonical: 'https://www.lmgpt4u.com/',
  ogImage: 'https://www.lmgpt4u.com/og-image.png',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
};

export const SITE_CONFIG = {
  siteName: 'Let Me GPT That For You',
  siteUrl: 'https://www.lmgpt4u.com',
  author: 'Jordan Garrison',
  authorUrl: 'https://jordangarrison.dev',
  twitterHandle: '@jordangarrison',
  themeColor: '#FFD700'
};

export function generateSEOTags(seoData: Partial<SEOData> = {}): SEOData {
  return {
    ...DEFAULT_SEO,
    ...seoData,
    canonical: seoData.canonical || DEFAULT_SEO.canonical
  };
}

export function generatePageTitle(pageTitle?: string): string {
  if (!pageTitle) return DEFAULT_SEO.title;
  return `${pageTitle} | ${SITE_CONFIG.siteName}`;
}

export function generateStructuredData(type: 'WebApplication' | 'WebPage', additionalData: Record<string, any> = {}) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.siteUrl,
    description: DEFAULT_SEO.description,
    author: {
      '@type': 'Person',
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.authorUrl
    }
  };

  if (type === 'WebApplication') {
    return {
      ...baseData,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web Browser',
      browserRequirements: 'Requires JavaScript enabled',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD'
      },
      featureList: [
        'Generate shareable AI chat links',
        'Support for ChatGPT, Gemini, and Claude',
        'Free to use',
        'No registration required',
        'Instant link generation'
      ],
      ...additionalData
    };
  }

  return {
    ...baseData,
    ...additionalData
  };
}
