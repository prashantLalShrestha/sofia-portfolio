import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { stories } from "../data/portfolio";
import { NotFoundPage } from "./NotFoundPage";
export function StoryPage() {
  const { slug } = useParams();
  const story = stories.find((item) => item.slug === slug);
  if (!story) return <NotFoundPage />;
  return (
    <>
      <Link className="text-link back-link" to="/work">
        <ArrowLeft size={16} /> Back to my work
      </Link>
      <section className="page-heading">
        <p className="eyebrow">
          {story.company} / {story.category}
        </p>
        <h1>{story.title}</h1>
        <p>{story.description}</p>
      </section>
      <div className="story-detail">
        <div className={`result-panel ${story.tone}`}>
          <p className="eyebrow">THE RESULT</p>
          <span>{story.metric}</span>
          <p>{story.metricLabel}</p>
        </div>
        <div>
          <p className="eyebrow">THE STARTING POINT</p>
          <h2>A bit of context.</h2>
          <p className="body-copy">{story.context}</p>
          <h3 className="actions-title">What I worked on</h3>
          <ul className="action-list">
            {story.actions.map((item) => (
              <li key={item}>
                <Check size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className="outcome">
        <p className="eyebrow">WHAT CHANGED</p>
        <p>{story.outcome}</p>
        <Link className="text-link" to="/contact">
          Let’s talk about your team <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}
