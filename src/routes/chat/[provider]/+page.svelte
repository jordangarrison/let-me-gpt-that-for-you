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

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
  <div class="max-w-2xl w-full text-center">
    <div class="bg-white rounded-2xl shadow-xl p-8">
      <!-- Loading animation -->
      <div class="mb-6">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
      </div>

      <!-- Header -->
      <h1 class="text-3xl font-bold text-gray-800 mb-4">
        Redirecting to {providerInfo[provider]?.name}
      </h1>
      
      <p class="text-lg text-gray-600 mb-6">
        {providerInfo[provider]?.description}
      </p>

      <!-- Query display -->
      {#if query}
        <div class="bg-gray-50 rounded-lg p-4 mb-6">
          <p class="text-sm text-gray-600 mb-2">You'll be asked to respond to:</p>
          <p class="text-lg font-semibold text-gray-800 italic">"{query}"</p>
          {#if queryCopied}
            <p class="text-sm text-green-600 mt-2">✓ ChatGPT URL copied to clipboard!</p>
          {/if}
        </div>
      {/if}

      <!-- Instructions -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 class="font-semibold text-blue-800 mb-2">Instructions:</h3>
        <ol class="text-left text-blue-700 space-y-1">
          <li>1. You'll be redirected to {providerInfo[provider]?.name}</li>
          {#if query}
            <li>2. The question is pre-filled for you: "{query}"</li>
          {/if}
          <li>{query ? '3' : '2'}. Get a real AI response!</li>
        </ol>
      </div>

      <!-- Countdown -->
      <p class="text-gray-600 mb-4">
        Redirecting in <span class="font-bold text-blue-600">{countdown}</span> seconds...
      </p>

      <!-- Manual redirect button -->
      <button 
        on:click={redirectNow}
        class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Go to {providerInfo[provider]?.name} Now
      </button>

      <!-- Back to home -->
      <div class="mt-6">
        <a 
          href="/" 
          class="text-blue-600 hover:text-blue-700 underline"
        >
          ← Create another link
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
