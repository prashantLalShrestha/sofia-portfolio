import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { Story } from "../../data/types";
export function StoryCard({ story }: { story: Story }) {
  return (
    <Link className="story-card" to={`/work/${story.slug}`}>
      <div className={`story-art ${story.tone}`}>
        <span className="eyebrow">{story.company}</span>
        <div className="story-metric">{story.metric}</div>
        <p>{story.metricLabel}</p>
        <div className="story-lines" aria-hidden="true" />
        <ArrowUpRight className="story-arrow" size={25} />
      </div>
      <div className="story-content">
        <p className="eyebrow">{story.category}</p>
        <h3>{story.title}</h3>
        <p>{story.description}</p>
      </div>
    </Link>
  );
}
