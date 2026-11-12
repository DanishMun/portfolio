// One project, laid out like a spec sheet from a design studio:
// a numbered header, the screenshot with crop marks, and the details as a list.

export default function ProjectSheet({ project, index, total }) {
  const number = String(index + 1).padStart(2, "0");
  const flip = index % 2 === 1; // every second sheet puts the image on the right

  return (
    <article className={`sheet ${flip ? "flip" : ""}`} id={project.id}>
      <header className="sheet-head">
        <span className="sheet-no">{number}</span>
        <span className="mono">{number} / {String(total).padStart(2, "0")}</span>
      </header>

      <div className="sheet-body">
        <figure className="shot">
          <figcaption className="mono">{project.imageSize}</figcaption>
          <a href={project.live} className="crop">
            <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" />
          </a>
        </figure>

        <div className="specs">
          <h3>{project.title}</h3>
          <p className="one-line">{project.oneLine}</p>

          <dl>
            <dt>Problem</dt>
            <dd>{project.problem}</dd>

            <dt>Decisions</dt>
            <dd>
              <ul>
                {project.decisions.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </dd>

            <dt>Next</dt>
            <dd>{project.next}</dd>

            <dt>Stack</dt>
            <dd className="mono">{project.stack.join(" · ")}</dd>

            {/* Not every project has tests (a Shopify theme, for example) */}
            {project.tests && (
              <>
                <dt>Tests</dt>
                <dd className="mono">{project.tests} passing</dd>
              </>
            )}
          </dl>

          <p className="links">
            <a href={project.live}>Open it live ↗</a>
            {project.code && <a href={project.code}>Read the code ↗</a>}
          </p>
          {project.note && <p className="mono note-small">{project.note}</p>}
        </div>
      </div>
    </article>
  );
}
