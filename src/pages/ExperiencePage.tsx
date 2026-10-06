import { Download } from "lucide-react";
import { experience, profile, strengths, tools } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
export function ExperiencePage() {
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">THE JOURNEY SO FAR</p>
        <h1>
          Different industries.
          <br />
          <em>The same human connection.</em>
        </h1>
        <p>
          From chemistry and client service to fintech and business development.
          Here’s where I’ve been, and what I’ve helped make happen.
        </p>
        <a className="button secondary" href={profile.cv} download>
          Download the full CV <Download size={16} />
        </a>
      </section>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-row" key={item.company}>
            <div className="timeline-meta">
              <p>{item.dates}</p>
              <span>{item.location}</span>
            </div>
            <div>
              <p className="eyebrow">{item.sector}</p>
              <h2>{item.role}</h2>
              <p className="company-name">{item.company}</p>
              <ul>
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <section className="section">
        <SectionHeading
          label="MY TOOLKIT"
          title="Skills that travel with me."
        />
        <div className="strengths-grid">
          {strengths.map((item) => (
            <article className="skill-card" key={item.title}>
              <h3>{item.title}</h3>
              <div className="tags">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="tools-label">Tools I use</p>
        <div className="tags tools">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>
      <p className="page-note">
        Sales approaches include SPIN and MEDDPIC, alongside ROI-led negotiation
        and product demos.
      </p>
    </>
  );
}
