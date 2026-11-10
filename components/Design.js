import { logos, designStats, designTypes, featuredBrand } from "../lib/content";

// My design work: what I design, a featured brand, and a grid like a specimen sheet.
export default function Design() {
  return (
    <section className="section" id="design">
      <h2 className="section-title">
        <span className="mono">03</span> Design
      </h2>
      <p className="section-lead">
        Before I wrote code, I designed for small businesses around the world:
        from the first logo sketch to the website and the box it ships in. That is where I learned
        to care about every pixel, and about the client.
      </p>

      <ul className="design-types">
        {designTypes.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>

      <ul className="stats">
        {designStats.map((s) => (
          <li key={s.label}>
            <strong>{s.value}</strong>
            <span className="mono">{s.label}</span>
          </li>
        ))}
      </ul>

      <FeaturedBrand brand={featuredBrand} />

      {logos.length > 0 && (
        <ul className="logo-grid">
          {logos.map((logo) => (
            <li key={logo.file}>
              <img src={`/logos/${logo.file}`} alt={logo.caption} loading="lazy" />
              <span className="mono">{logo.caption}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

// One brand project, shown bigger, with a link to the full case on Behance.
// If there are no images yet, it still shows the name and the link.
function FeaturedBrand({ brand }) {
  return (
    <article className="brand-case">
      <div className="brand-head">
        <span className="mono">Featured · {brand.kind}</span>
        <h3>{brand.title}</h3>
        <p>{brand.text}</p>
        <a href={brand.link} className="brand-link">See the full project on Behance ↗</a>
      </div>

      {brand.images.length > 0 && (
        <div className="brand-images">
          {brand.images.map((file) => (
            <img key={file} src={`/logos/${file}`} alt={`${brand.title}: ${brand.kind}`} loading="lazy" />
          ))}
        </div>
      )}
    </article>
  );
}
