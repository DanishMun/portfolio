import { person, siteUrl, services } from "../lib/content";

// "Structured data" (JSON-LD): a small, hidden description of me in a format
// Google understands. It helps Google connect this site, my name, LinkedIn and GitHub.
export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    url: siteUrl,
    email: `mailto:${person.email}`,
    jobTitle: "Full Stack Developer",
    address: { "@type": "PostalAddress", addressLocality: "Espoo", addressCountry: "FI" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Eastern Finland" },
    knowsLanguage: ["English", "Urdu", "Finnish"],
    knowsAbout: [
      ...services.map((s) => s.title),
      "React", "Next.js", "TypeScript", "Shopify", "WordPress", "Brand identity",
    ],
    sameAs: [person.github, person.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
