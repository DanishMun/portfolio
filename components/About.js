import { path, skills } from "../lib/content";

// The path so far, shown as a ruler: one mark per step.
export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">
        <span className="mono">04</span> About
      </h2>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm Danish. I have a bachelor's in computer science, and since 2015 I have
            worked as a designer for clients around the world, most of whom I never met in
            person. In 2022 I moved to Finland for my master's degree, and I live in Espoo.
          </p>
          <p>
            Design taught me to start from the client's problem, not from the tool. I build
            the same way now: find one real problem, solve it in the simplest code I can
            explain, test it, ship it.
          </p>

          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="mono">{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="ruler" aria-label="Timeline">
          {path.map((step) => (
            <li key={step.year}>
              <span className="year">{step.year}</span>
              <span className="step">{step.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
