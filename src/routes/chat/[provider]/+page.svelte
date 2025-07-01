<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { encodeQuery } from '$lib/url-encoder';
  import type { PageData } from './$types';

  export let data: PageData;
  
  $: provider = data.provider;
  $: query = data.query;
  $: providerInfo = data.providerInfo;
  $: meta = data.meta;

  const allProviders = {
    chatgpt: {
      name: 'ChatGPT',
      baseUrl: 'https://chatgpt.com',
      description: 'OpenAI\'s conversational AI'
    },
    gemini: {
      name: 'Gemini',
      baseUrl: 'https://gemini.google.com',
      description: 'Google\'s AI assistant'
    },
    claude: {
      name: 'Claude',
      baseUrl: 'https://claude.ai',
      description: 'Anthropic\'s AI assistant'
    }
  };

  let countdown = 5;
  let redirectUrl = '';
  let queryCopied = false;

  onMount(() => {
    if (!allProviders[provider as keyof typeof allProviders]) {
      console.error('Unsupported provider!');
      return;
    }

    // Build AI provider URL with query parameter
    const currentProvider = allProviders[provider as keyof typeof allProviders];
    redirectUrl = query 
      ? `${currentProvider.baseUrl}?q=${encodeQuery(query)}`
      : currentProvider.baseUrl;

    // Copy the full URL to clipboard if available
    if (navigator.clipboard) {
      navigator.clipboard.writeText(redirectUrl).then(() => {
        queryCopied = true;
      }).catch(err => {
        console.log('Could not copy to clipboard:', err);
      });
    }

    const timer = setInterval(() => {
      countdown--;
      if (countdown <= 0) {
        clearInterval(timer);
        window.location.href = redirectUrl;
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  function redirectNow() {
    window.location.href = redirectUrl;
  }
</script>

<svelte:head>
  <title>{meta.title}</title>
  <meta name="description" content="{meta.description}" />
  <link rel="canonical" href="{meta.canonicalUrl}" />
  
  <!-- Open Graph tags -->
  <meta property="og:title" content="{meta.title}" />
  <meta property="og:description" content="{meta.description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{meta.canonicalUrl}" />
  <meta property="og:image" content="{meta.ogImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Let Me GPT That For You - {providerInfo.name} Redirect" />
  
  <!-- Twitter Card tags -->
  <meta name="twitter:title" content="{meta.title}" />
  <meta name="twitter:description" content="{meta.description}" />
  <meta name="twitter:image" content="{meta.ogImage}" />
  <meta name="twitter:image:alt" content="Let Me GPT That For You - {providerInfo.name} Redirect" />
  
  <!-- Additional meta tags -->
  <meta name="robots" content="noindex, follow" />
  <meta name="referrer" content="no-referrer-when-downgrade" />
</svelte:head>

<div class="min-h-screen bg-brutal-cyan flex items-center justify-center p-4">
  <div class="max-w-2xl w-full text-center">
    <div class="card-brutal p-8 transform -rotate-1">
      <!-- Loading animation -->
      <div class="mb-8">
        <div class="w-20 h-20 border-6 border-black border-t-brutal-yellow mx-auto animate-spin bg-white shadow-brutal"></div>
      </div>

      <!-- Header -->
      <h1 class="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-wide">
        REDIRECTING TO {providerInfo.name}
      </h1>
      
      <p class="text-xl font-bold text-black bg-brutal-pink border-3 border-black shadow-brutal px-4 py-2 inline-block transform rotate-1 uppercase mb-8">
        {providerInfo.description}
      </p>

      <!-- Query display -->
      {#if query}
        <div class="bg-white border-5 border-black shadow-brutal p-6 mb-8 transform rotate-1">
          <p class="text-lg font-black text-black mb-4 uppercase tracking-wide">YOU'LL BE ASKED TO RESPOND TO:</p>
          <p class="text-xl font-bold text-black bg-brutal-yellow border-3 border-black p-3 font-mono">"{query}"</p>
          {#if queryCopied}
            <p class="text-lg font-black text-brutal-lime mt-4 uppercase">✓ CHATGPT URL COPIED TO CLIPBOARD!</p>
          {/if}
        </div>
      {/if}

      <!-- Instructions -->
      <div class="bg-brutal-orange border-5 border-black shadow-brutal p-6 mb-8 transform -rotate-1">
        <h3 class="text-2xl font-black text-black mb-4 uppercase tracking-wide">INSTRUCTIONS:</h3>
        <ol class="text-left text-black space-y-2 font-bold text-lg">
          <li class="bg-white border-3 border-black p-2 shadow-brutal mb-2">1. YOU'LL BE REDIRECTED TO {providerInfo.name}</li>
          {#if query}
            <li class="bg-white border-3 border-black p-2 shadow-brutal mb-2">2. THE QUESTION IS PRE-FILLED FOR YOU: "{query}"</li>
          {/if}
          <li class="bg-white border-3 border-black p-2 shadow-brutal mb-2">{query ? '3' : '2'}. GET A REAL AI RESPONSE!</li>
        </ol>
      </div>

      <!-- Countdown -->
      <p class="text-2xl font-black text-black mb-6 bg-white border-3 border-black shadow-brutal px-4 py-2 inline-block uppercase">
        REDIRECTING IN <span class="text-brutal-pink">{countdown}</span> SECONDS...
      </p>

      <!-- Manual redirect button -->
      <button 
        on:click={redirectNow}
        class="btn-brutal-primary text-xl mb-6"
      >
        GO TO {providerInfo.name} NOW
      </button>

      <!-- Back to home -->
      <div class="mt-6">
        <a 
          href="/" 
          class="btn-brutal text-lg"
        >
          ← CREATE ANOTHER LINK
        </a>
      </div>
    </div>
  </div>
</div>

{#if query}
  <!-- Hidden text for easy copying -->
  <textarea 
    id="query-text" 
    class="sr-only" 
    readonly 
    value={query}
  ></textarea>
{/if}
