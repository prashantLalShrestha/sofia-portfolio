import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <section className="page-heading">
      <p className="eyebrow">404 / A LITTLE DETOUR</p>
      <h1>
        Let’s find our
        <br />
        <em>way back.</em>
      </h1>
      <p>This page isn’t here. You can start again from the homepage.</p>
      <Link className="button primary" to="/">
        Back home →
      </Link>
    </section>
  );
}
