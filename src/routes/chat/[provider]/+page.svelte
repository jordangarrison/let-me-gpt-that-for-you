<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { encodeQuery } from '$lib/url-encoder';

  $: provider = $page.params.provider;
  $: query = $page.url.searchParams.get('q') || '';

  const providerInfo = {
    chatgpt: {
      name: 'ChatGPT',
      baseUrl: 'https://chatgpt.com',
      description: 'OpenAI\'s conversational AI'
    }
  };

  let countdown = 5;
  let redirectUrl = '';
  let queryCopied = false;

  onMount(() => {
    if (!providerInfo[provider]) {
      console.error('Unsupported provider!');
      return;
    }

    // Build ChatGPT URL with query parameter
    redirectUrl = query 
      ? `${providerInfo[provider].baseUrl}?q=${encodeQuery(query)}`
      : providerInfo[provider].baseUrl;

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
  <title>Redirecting to {providerInfo[provider]?.name || 'AI Provider'}...</title>
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
        REDIRECTING TO {providerInfo[provider]?.name}
      </h1>
      
      <p class="text-xl font-bold text-black bg-brutal-pink border-3 border-black shadow-brutal px-4 py-2 inline-block transform rotate-1 uppercase mb-8">
        {providerInfo[provider]?.description}
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
          <li class="bg-white border-3 border-black p-2 shadow-brutal mb-2">1. YOU'LL BE REDIRECTED TO {providerInfo[provider]?.name}</li>
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
        GO TO {providerInfo[provider]?.name} NOW
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
