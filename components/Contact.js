import { person } from "../lib/content";
import RegMark from "./RegMark";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">
        <span className="mono">05</span> Contact
      </h2>
      <p className="section-lead">
        Looking for a developer who also thinks like a designer? Write to me. I reply quickly.
      </p>
      <a className="big-mail" href={`mailto:${person.email}`}>{person.email}</a>
      <p className="mono small">
        {person.location} · English (professional) · Finnish (learning) ·{" "}
        <a href={person.linkedin}>LinkedIn</a> · <a href={person.github}>GitHub</a>
      </p>

      <footer className="footer">
        <RegMark />
        <span className="mono">
          Set in Gloock, IBM Plex Sans and Plex Mono · Built with Next.js ·{" "}
          <a href="https://github.com/DanishMun/portfolio">Source</a>
        </span>
      </footer>
    </section>
  );
}
