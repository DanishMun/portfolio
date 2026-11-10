import { person, intro } from "../lib/content";
import RegMark from "./RegMark";

// The name is set like a logo on a design sheet:
// cyan guide lines (cap height and baseline) sit behind each line of the name,
// and two construction circles are drawn next to it when the page loads.
export default function Hero() {
  return (
    <section className="hero" id="top">
      <RegMark className="corner tl" />
      <RegMark className="corner tr" />

      <p className="sheet-label">
        <span>Sheet 01 · Identity</span>
        <span>{person.location} · 60.21° N, 24.66° E</span>
      </p>

      <div className="name-wrap">
        <h1 className="name">
          Danish <br /> Munawar
        </h1>
        <span className="note note-cap">cap height</span>
        <span className="note note-base">baseline</span>

        <svg className="construction" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="90" pathLength="1" />
          <circle cx="140" cy="100" r="50" pathLength="1" />
          <path d="M10 190 L190 10" pathLength="1" />
          <path d="M100 0 V200 M0 100 H200" pathLength="1" />
        </svg>
      </div>

      <div className="hero-text">
        <p className="role">{person.role}</p>
        <p className="intro">{intro}</p>

        <ul className="contact-row">
          <li><a href={`mailto:${person.email}`}>{person.email}</a></li>
          <li><a href={person.github}>GitHub ↗</a></li>
          <li><a href={person.linkedin}>LinkedIn ↗</a></li>
          <li><a href={person.resume}>Résumé PDF ↓</a></li>
        </ul>

        <p className="status"><span className="dot" /> {person.status}</p>
      </div>
    </section>
  );
}
