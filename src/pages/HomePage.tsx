import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { profile, stories, strengths } from "../data/portfolio";
import { SectionHeading } from "../components/SectionHeading";
import { StoryCard } from "../features/stories/StoryCard";
export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            SALES · BUSINESS DEVELOPMENT · ACCOUNT MANAGEMENT
          </p>
          <h1>
            Good relationships.
            <br />
            <em>Room to grow.</em>
          </h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/work">
              A look at my work <ArrowUpRight size={17} />
            </Link>
            <a className="text-link" href={profile.cv} download>
              Download my CV <Download size={16} />
            </a>
          </div>
          <p className="location">
            <MapPin size={14} /> Based in Amsterdam
          </p>
        </div>
        <figure className="portrait">
          <img
            src={profile.picture}
            alt="Sofia Gusakova"
            width={853}
            height={1280}
            fetchPriority="high"
          />
          <figcaption>
            <span>Sofia Gusakova</span>
            <span>A people person, with a plan.</span>
          </figcaption>
          <div className="portrait-flower" aria-hidden="true">
            ✳
          </div>
        </figure>
      </section>
      <div className="profile-strip">
        <span>
          <ShieldCheck size={17} />
          {profile.workPermit}
        </span>
        <span>8 years of commercial experience</span>
        <a href="#selected-work" aria-label="Explore selected work">
          <ArrowDown size={18} />
        </a>
      </div>
      <section className="section introduction">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <div>
          <h2>
            Curious about people.
            <br />
            <em>Serious about follow-through.</em>
          </h2>
          <p>
            {profile.summary}
            <Link className="text-link" to="/about">
              Meet the person behind the CV <ArrowUpRight size={16} />
            </Link>
          </p>
        </div>
      </section>
      <section className="section" id="selected-work">
        <SectionHeading
          label="A FEW STORIES FROM WORK"
          title="Turning possibilities into progress."
          action={
            <Link className="text-link" to="/work">
              See my work <ArrowUpRight size={16} />
            </Link>
          }
        />
        <div className="story-grid">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </section>
      <section className="section strengths-section">
        <SectionHeading
          label="HOW I CAN HELP"
          title="From the first hello to what’s next."
        />
        <div className="strengths-grid">
          {strengths.map((item, index) => (
            <article className="strength-card" key={item.title}>
              <span className="strength-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="contact-banner">
        <p className="eyebrow">A ROLE, A PROJECT, OR A GOOD CONVERSATION</p>
        <div>
          <h2>
            Let’s see <em>what’s possible.</em>
          </h2>
          <Link className="round-link" to="/contact" aria-label="Get in touch">
            <ArrowUpRight size={28} />
          </Link>
        </div>
      </section>
    </>
  );
}
