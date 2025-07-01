<script>
  import '../app.css';
</script>

<svelte:head>
  <!-- Canonical URL will be set by individual pages -->
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Jordan Garrison" />
  <meta name="theme-color" content="#FFD700" />
  
  <!-- Open Graph defaults -->
  <meta property="og:site_name" content="Let Me GPT That For You" />
  <meta property="og:locale" content="en_US" />
  
  <!-- Twitter Card defaults -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="@jordangarrison" />
  
  <!-- JSON-LD structured data -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Let Me GPT That For You",
      "url": "https://letmegptthatforyou.com",
      "description": "For all those people who find it more convenient to ask you rather than ChatGPT",
      "applicationCategory": "Utility",
      "operatingSystem": "Web Browser",
      "author": {
        "@type": "Person",
        "name": "Jordan Garrison",
        "url": "https://jordangarrison.dev"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  </script>
</svelte:head>

<main class="min-h-screen">
  <slot />
</main>
