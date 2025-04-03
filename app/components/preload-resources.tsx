export function PreloadResources() {
  return (
    <>
      {/* Preload social media icons */}
      <link
        rel="preload"
        href="/social/linkedin.svg"
        as="image"
        type="image/svg+xml"
      />
      <link
        rel="preload"
        href="/social/twitter.svg"
        as="image"
        type="image/svg+xml"
      />
      <link
        rel="preload"
        href="/social/youtube.svg"
        as="image"
        type="image/svg+xml"
      />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="https://www.linkedin.com" />
      <link rel="dns-prefetch" href="https://x.com" />
      <link rel="dns-prefetch" href="https://www.youtube.com" />
    </>
  )
} 