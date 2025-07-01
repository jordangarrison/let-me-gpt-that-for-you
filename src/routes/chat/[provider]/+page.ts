import type { PageLoad } from './$types';

export const load: PageLoad = ({ params, url }) => {
  const provider = params.provider;
  const query = url.searchParams.get('q') || '';
  
  const providerInfo = {
    chatgpt: {
      name: 'ChatGPT',
      description: 'OpenAI\'s conversational AI assistant',
      baseUrl: 'https://chatgpt.com'
    },
    gemini: {
      name: 'Gemini',
      description: 'Google\'s AI assistant',
      baseUrl: 'https://gemini.google.com'
    },
    claude: {
      name: 'Claude',
      description: 'Anthropic\'s AI assistant',
      baseUrl: 'https://claude.ai'
    }
  };

  const currentProvider = providerInfo[provider] || providerInfo.chatgpt;
  
  return {
    provider,
    query,
    providerInfo: currentProvider,
    meta: {
      title: query 
        ? `Redirecting to ${currentProvider.name}: "${query.slice(0, 60)}${query.length > 60 ? '...' : ''}"` 
        : `Redirecting to ${currentProvider.name}`,
      description: query 
        ? `Automatically redirecting to ${currentProvider.name} to answer: "${query.slice(0, 120)}${query.length > 120 ? '...' : ''}"`
        : `Automatically redirecting to ${currentProvider.name} - ${currentProvider.description}`,
      canonicalUrl: `https://letmegptthatforyou.com/chat/${provider}${query ? `?q=${encodeURIComponent(query)}` : ''}`,
      ogImage: 'https://letmegptthatforyou.com/og-image-chat.png'
    }
  };
};
