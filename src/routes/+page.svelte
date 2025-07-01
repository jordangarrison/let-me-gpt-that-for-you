<svelte:head>
  <title>Let Me GPT That For You - For all those people who find it more convenient to ask you rather than ChatGPT</title>
  <meta name="description" content="For all those people who find it more convenient to ask you rather than ChatGPT" />
  <meta name="keywords" content="AI chat, ChatGPT links, AI demo, artificial intelligence, share AI responses, ChatGPT demo, AI tool, free AI" />
  <link rel="canonical" href="https://letmegptthatforyou.com/" />
  
  <!-- Open Graph tags -->
  <meta property="og:title" content="Let Me GPT That For You" />
  <meta property="og:description" content="For all those people who find it more convenient to ask you rather than ChatGPT" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://letmegptthatforyou.com/" />
  <meta property="og:image" content="https://letmegptthatforyou.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Let Me GPT That For You - AI Chat Link Generator" />
  
  <!-- Twitter Card tags -->
  <meta name="twitter:title" content="Let Me GPT That For You" />
  <meta name="twitter:description" content="For all those people who find it more convenient to ask you rather than ChatGPT" />
  <meta name="twitter:image" content="https://letmegptthatforyou.com/og-image.png" />
  <meta name="twitter:image:alt" content="Let Me GPT That For You - AI Chat Link Generator" />
  
  <!-- Structured Data for Homepage -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Let Me GPT That For You",
      "alternateName": "LetMeGPT",
      "url": "https://letmegptthatforyou.com",
      "description": "For all those people who find it more convenient to ask you rather than ChatGPT",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "browserRequirements": "Requires JavaScript enabled",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Person",
        "name": "Jordan Garrison",
        "url": "https://jordangarrison.dev"
      },
      "featureList": [
        "Generate shareable AI chat links",
        "Support for ChatGPT, Gemini, and Claude",
        "Free to use",
        "No registration required",
        "Instant link generation"
      ],
      "screenshot": "https://letmegptthatforyou.com/screenshot.png",
      "softwareVersion": "1.0",
      "datePublished": "2024-01-01",
      "dateModified": "2024-01-01"
    }
  </script>
</svelte:head>

<script>
  import { encodeQuery } from '$lib/url-encoder';

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
    generatedLink = `${window.location.origin}/chat/${aiProvider}?q=${encodeQuery(query)}`;
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

<div class="min-h-screen bg-brutal-yellow flex items-center justify-center p-4">
  <div class="max-w-2xl w-full">
    <!-- Header -->
    <header class="text-center mb-12">
      <h1 class="text-4xl md:text-6xl text-brutal font-black text-black mb-6 transform -rotate-1">
        LET ME <span class="bg-black text-brutal-yellow px-2 py-1 border-5 border-black shadow-brutal transform rotate-2 inline-block">GPT</span> THAT FOR YOU
      </h1>
      <p class="text-xl font-bold text-black bg-brutal-pink border-3 border-black shadow-brutal px-4 py-2 inline-block transform rotate-1">
        FOR ALL THOSE PEOPLE WHO FIND IT MORE CONVENIENT TO ASK YOU RATHER THAN CHATGPT
      </p>
    </header>

    <!-- Main Form -->
    <main class="card-brutal p-8 transform -rotate-1">
      {#if !showLink}
        <form on:submit|preventDefault={generateLink} class="space-y-8">
          <!-- Provider Info -->
          <div class="text-center mb-8">
            <div class="inline-flex items-center space-x-4 bg-brutal-cyan border-5 border-black shadow-brutal p-6 transform rotate-2">
              <div class="w-16 h-16 bg-black flex items-center justify-center border-3 border-white shadow-brutal">
                <span class="text-brutal-yellow font-black text-2xl">C</span>
              </div>
              <div class="text-left">
                <div class="text-brutal text-2xl text-black">CHATGPT</div>
                <div class="text-lg font-bold text-black">OPENAI'S CONVERSATIONAL AI</div>
              </div>
            </div>
          </div>

          <!-- Question Input -->
          <div>
            <label for="question" class="block text-lg font-black text-black mb-4 uppercase tracking-wide">
              WHAT QUESTION SHOULD THE AI ANSWER?
            </label>
            <textarea
              id="question"
              bind:value={query}
              placeholder="E.G., HOW DO I CENTER A DIV IN CSS?"
              rows="4"
              class="input-brutal w-full resize-none"
              required
              aria-describedby="question-help"
            ></textarea>
            <div id="question-help" class="sr-only">
              Enter the question you want the AI to answer. This will be included in the shareable link.
            </div>
          </div>

          <!-- Generate Button -->
          <button
            type="submit"
            disabled={!query.trim()}
            class="btn-brutal-primary w-full text-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:transform-none"
          >
            GENERATE LINK
          </button>
        </form>
      {:else}
        <!-- Generated Link Display -->
        <div class="text-center space-y-8">
          <div class="bg-brutal-lime text-black text-2xl font-black border-5 border-black shadow-brutal p-4 transform rotate-1 uppercase">
            ✓ LINK GENERATED SUCCESSFULLY!
          </div>
          
          <div class="bg-white border-5 border-black shadow-brutal p-6 transform -rotate-1">
            <div class="text-lg font-black text-black mb-4 uppercase tracking-wide">YOUR SHAREABLE LINK:</div>
            <div class="bg-brutal-cyan border-3 border-black p-4 text-sm font-mono break-all font-bold">
              {generatedLink}
            </div>
          </div>

          <div class="flex space-x-4">
            <button
              on:click={copyLink}
              class="btn-brutal-secondary flex-1 text-lg"
            >
              COPY LINK
            </button>
            <a
              href={generatedLink}
              target="_blank"
              class="btn-brutal-accent flex-1 text-lg text-center inline-block"
            >
              TRY IT NOW
            </a>
          </div>

          <button
            on:click={resetForm}
            class="btn-brutal text-lg"
          >
            CREATE ANOTHER LINK
          </button>
        </div>
      {/if}
    </main>

    <!-- Footer -->
    <div class="text-center mt-8 space-y-4">
      <p class="bg-black text-brutal-yellow font-bold px-4 py-2 border-3 border-white shadow-brutal inline-block transform rotate-1 uppercase tracking-wide">
        INSPIRED BY "LET ME GOOGLE THAT FOR YOU" • BUILT WITH VIBES
      </p>
      
      <!-- Links -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="https://www.jordangarrison.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          class="bg-brutal-cyan text-black font-bold px-4 py-2 border-3 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200 uppercase tracking-wide transform -rotate-1"
        >
          👨‍💻 JORDANGARRISON.DEV
        </a>
        
        <a 
          href="https://github.com/jordangarrison/let-me-gpt-that-for-you" 
          target="_blank" 
          rel="noopener noreferrer"
          class="bg-brutal-pink text-black font-bold px-4 py-2 border-3 border-black shadow-brutal hover:shadow-brutal-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-200 uppercase tracking-wide transform rotate-1"
        >
          🚀 VIEW ON GITHUB
        </a>
      </div>
    </div>
  </div>
</div>
