import React from "react";
import { Helmet } from "react-helmet";

export default function PublicPageHelmet() {
  const title = "AI Business Tools Workshop | Emerson Academy Vancouver FAQs";
  const description = "Get answers to frequently asked questions about the AI Business Tools Zero to Hero workshop for entrepreneurs and business owners in Vancouver. Learn about the event, speakers, and more.";
  const url = "https://faqs.emersonacademy.org";
  const pageThumbnail = `${url}/public/site-faqs.png`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="AI workshop, business tools, entrepreneurs, Vancouver, Emerson Academy, ChatGPT, AI automation"
      />
      <link rel="canonical" href={url} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={pageThumbnail} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:site_name" content="Emerson Academy" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={pageThumbnail} />

      {/* Additional meta tags */}
      <meta name="author" content="Emerson Academy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      {/* Structured data for event */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationEvent",
          name: "AI Business Tools Zero to Hero: For Entrepreneurs & Business Owners",
          description:
            "Transforming Your Business with AI: A Hands-On Workshop",
          startDate: "2024-08-31T09:00",
          endDate: "2024-08-31T14:00",
          location: {
            "@type": "Place",
            name: "Simon Fraser University, Downtown Vancouver Campus",
            address: {
              "@type": "PostalAddress",
              streetAddress: "515 W Hastings St",
              addressLocality: "Vancouver",
              addressRegion: "BC",
              postalCode: "V6B 5K3",
              addressCountry: "CA",
            },
          },
          offers: {
            "@type": "Offer",
            price: "89.99",
            priceCurrency: "CAD",
          },
          organizer: {
            "@type": "Organization",
            name: "Emerson Academy",
            url: "https://faqs.emersonacademy.org",
          },
          performer: {
            "@type": "Person",
            name: "Eduardo Garza",
          },
        })}
      </script>
    </Helmet>
  );
}