import { projects, inProgress } from "../lib/content";
import ProjectSheet from "./ProjectSheet";

export default function Work() {
  return (
    <section className="section" id="work">
      <h2 className="section-title">
        <span className="mono">02</span> Work
      </h2>
      <p className="section-lead">
        Real projects, each built for a real business problem. Every one is live,
        and small enough to read in an evening.
      </p>

      {projects.map((project, i) => (
        <ProjectSheet key={project.id} project={project} index={i} total={projects.length} />
      ))}

      <aside className="wip">
        <span className="mono">In progress</span>
        <h3>{inProgress.title}</h3>
        <p>{inProgress.text}</p>
      </aside>
    </section>
  );
}
