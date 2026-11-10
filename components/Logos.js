import { logos, designStats } from "../lib/content";

// My logo work, shown on a grid like a type specimen sheet.
export default function Logos() {
  return (
    <section className="section" id="logos">
      <h2 className="section-title">
        <span className="mono">03</span> Logos
      </h2>
      <p className="section-lead">
        Before I wrote code, I drew marks for small businesses around the world.
        That is where I learned to care about every pixel, and about the client.
      </p>

      <ul className="stats">
        {designStats.map((s) => (
          <li key={s.label}>
            <strong>{s.value}</strong>
            <span className="mono">{s.label}</span>
          </li>
        ))}
      </ul>

      {logos.length > 0 && (
        <ul className="logo-grid">
          {logos.map((logo) => (
            <li key={logo.file}>
              <img src={`/logos/${logo.file}`} alt={`Logo for ${logo.caption}`} loading="lazy" />
              <span className="mono">{logo.caption}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
