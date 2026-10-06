import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { profile, languages, education, certificates } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
export function AboutPage() {
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">HELLO, I’M SOFIA</p>
        <h1>
          A curious mind.
          <br />
          <em>A people-first approach.</em>
        </h1>
        <p>{profile.intro}</p>
      </section>
      <section className="about-grid">
        <div className="about-photo">
          <img
            src={profile.picture}
            alt="Sofia Gusakova"
            width={853}
            height={1280}
            loading="lazy"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">FROM CHEMISTRY TO CONVERSATIONS</p>
          <h2>
            Different questions.
            <br />
            The same curiosity.
          </h2>
          <p>
            I studied chemistry before building my career in client service,
            sales, and business development. That analytical background still
            helps me ask questions, look at the details, and work through a
            problem.
          </p>
          <p>
            My work has taken me through laboratory equipment, chemicals,
            fintech, and performance marketing. I’m comfortable getting to know
            a new industry and working with people across teams to move things
            forward.
          </p>
          <p>
            Today I’m based in Amsterdam, with a Netherlands work permit that
            doesn’t require sponsorship.
          </p>
          <Link className="text-link" to="/experience">
            See my experience <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="section">
        <SectionHeading
          label="WAYS TO CONNECT"
          title="A few languages, plenty of conversations."
        />
        <div className="languages-grid">
          {languages.map((item) => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.level}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="learning-grid section">
        <div>
          <SectionHeading label="EDUCATION" title="Where it started." />
          {education.map((item) => (
            <article className="learning-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.institution}</p>
              <span>{item.dates}</span>
            </article>
          ))}
        </div>
        <div>
          <SectionHeading
            label="CONTINUING TO LEARN"
            title="A few things I’ve studied."
          />
          {certificates.map((item) => (
            <p className="certificate" key={item}>
              {item}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
