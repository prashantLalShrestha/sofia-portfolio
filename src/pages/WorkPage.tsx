import { stories } from "../data/portfolio";
import { StoryCard } from "../features/stories/StoryCard";
export function WorkPage() {
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">MY WORK</p>
        <h1>
          Relationships first.
          <br />
          <em>Results follow.</em>
        </h1>
        <p>
          A few stories about opening new markets, growing accounts, and making
          life a little easier for clients and colleagues.
        </p>
      </section>
      <div className="story-grid">
        {stories.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
      <p className="page-note">
        A snapshot of my contributions. Results and context are drawn from my
        CV.
      </p>
    </>
  );
}
