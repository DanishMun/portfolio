import { services } from "../lib/content";

// What I build, in the words people search for. Laid out as a numbered list,
// like the parts list on a design sheet.
export default function Services() {
  return (
    <section className="section" id="services">
      <h2 className="section-title">
        <span className="mono">05</span> Services
      </h2>
      <p className="section-lead">
        I'm open to developer roles. I also build for businesses in Espoo, Helsinki and across Finland.
      </p>

      <ol className="services">
        {services.map((service, i) => (
          <li key={service.title}>
            <span className="mono">{String.fromCharCode(97 + i)}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
