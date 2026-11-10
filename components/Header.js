import { person } from "../lib/content";

// The "DM" monogram, drawn like a logo on a construction circle.
function Monogram() {
  return (
    <svg className="monogram" viewBox="0 0 48 48" aria-hidden="true">
      <circle className="guide" cx="24" cy="24" r="21" />
      <path className="guide" d="M24 1v46M1 24h46" />
      <text x="24" y="30" textAnchor="middle">DM</text>
    </svg>
  );
}

export default function Header() {
  return (
    <header className="topbar">
      <a href="#top" className="brand" aria-label="Back to top">
        <Monogram />
        <span>{person.name}</span>
      </a>
      <nav>
        <a href="#work">Work</a>
        <a href="#design" className="hide-sm">Design</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href={person.resume} className="resume">Résumé (PDF)</a>
      </nav>
    </header>
  );
}
