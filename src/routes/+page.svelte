<svelte:head>
  <title>Let Me GPT That For You - Create AI Chat Links</title>
  <meta name="description" content="Create shareable links that automatically ask questions to ChatGPT with pre-filled prompts." />
  <meta property="og:title" content="Let Me GPT That For You" />
  <meta property="og:description" content="Create shareable links that demonstrate AI chat interfaces" />
  <meta property="og:type" content="website" />
</svelte:head>

<script>
  let aiProvider = 'chatgpt';
  let query = '';
  let generatedLink = '';
  let showLink = false;

  const providerConfig = {
    chatgpt: {
      name: 'ChatGPT',
      description: 'OpenAI\'s conversational AI'
    }
  };

  function generateLink() {
    if (!query.trim()) return;
    generatedLink = `${window.location.origin}/chat/${aiProvider}?q=${encodeURIComponent(query)}`;
    showLink = true;
  }

  function copyLink() {
    navigator.clipboard.writeText(generatedLink);
    // You could add a toast notification here
  }

  function resetForm() {
    query = '';
    showLink = false;
    generatedLink = '';
  }
</script>

<div class="min-h-screen bg-white flex items-center justify-center p-4">
  <div class="max-w-2xl w-full">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-5xl md:text-7xl font-light text-gray-700 mb-6">
        Let me <span class="text-green-600 font-normal">GPT</span> that for you
      </h1>
      <p class="text-xl text-gray-500">
        For all those people who find it more convenient to ask you rather than ChatGPT
      </p>
    </div>

    <!-- Main Form -->
    <div class="bg-white rounded-2xl shadow-xl p-8">
      {#if !showLink}
        <form on:submit|preventDefault={generateLink} class="space-y-6">
          <!-- Provider Info -->
          <div class="text-center mb-6">
            <div class="inline-flex items-center space-x-3 bg-green-50 border border-green-200 rounded-lg p-4">
              <div class="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                <span class="text-white font-bold text-lg">C</span>
              </div>
              <div class="text-left">
                <div class="font-semibold text-green-800">ChatGPT</div>
                <div class="text-sm text-green-700">OpenAI's conversational AI</div>
              </div>
            </div>
          </div>

          <!-- Question Input -->
          <div>
            <label for="question" class="block text-sm font-medium text-gray-700 mb-2">
              What question should the AI answer?
            </label>
            <textarea
              id="question"
              bind:value={query}
              placeholder="e.g., How do I center a div in CSS?"
              rows="3"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              required
            ></textarea>
          </div>

          <!-- Generate Button -->
          <button
            type="submit"
            disabled={!query.trim()}
            class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Generate Link
          </button>
        </form>
      {:else}
        <!-- Generated Link Display -->
        <div class="text-center space-y-6">
          <div class="text-green-600 text-lg font-semibold">
            ✓ Link Generated Successfully!
          </div>
          
          <div class="bg-gray-50 rounded-lg p-4 border">
            <div class="text-sm text-gray-600 mb-2">Your shareable link:</div>
            <div class="bg-white border rounded p-3 text-sm font-mono break-all">
              {generatedLink}
            </div>
          </div>

          <div class="flex space-x-3">
            <button
              on:click={copyLink}
              class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Copy Link
            </button>
            <a
              href={generatedLink}
              target="_blank"
              class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Try It Now
            </a>
          </div>

          <button
            on:click={resetForm}
            class="text-blue-600 hover:text-blue-700 underline"
          >
            Create Another Link
          </button>
        </div>
      {/if}
    </div>

    <!-- Footer -->
    <div class="text-center mt-8 text-gray-500 text-sm">
      <p>Inspired by "Let me Google that for you" • Built with SvelteKit</p>
    </div>
  </div>
</div>
