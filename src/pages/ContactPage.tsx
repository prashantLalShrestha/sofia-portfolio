import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { profile } from "../data/portfolio";
export function ContactPage() {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setState("copied");
    } catch {
      setState("error");
    }
  }
  return (
    <>
      <section className="page-heading">
        <p className="eyebrow">GET IN TOUCH</p>
        <h1>
          It starts with
          <br />
          <em>a conversation.</em>
        </h1>
        <p>
          Looking for someone to grow relationships, open a new market, or look
          after your clients? I’d love to hear about your team.
        </p>
      </section>
      <div className="contact-grid">
        <section className="email-card">
          <Mail size={28} strokeWidth={1.5} />
          <p className="eyebrow">MY INBOX IS A GOOD PLACE TO START</p>
          <a className="email-address" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={24} />
          </a>
          <div className="email-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              Write an email <ArrowUpRight size={16} />
            </a>
            <button className="text-link" onClick={() => void copy()}>
              {state === "copied" ? <Check size={16} /> : <Copy size={16} />}{" "}
              {state === "copied" ? "Copied!" : "Copy address"}
            </button>
          </div>
          <p className="copy-feedback" role="status">
            {state === "error"
              ? "You can select and copy the email address above."
              : state === "copied"
                ? "Email copied to clipboard."
                : ""}
          </p>
        </section>
        <div className="contact-details">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={22} />
            <div>
              <h3>Let’s connect on LinkedIn</h3>
              <p>A little more about my professional journey.</p>
            </div>
            <ArrowUpRight size={20} />
          </a>
          <div>
            <MapPin size={22} />
            <div>
              <h3>Amsterdam, Netherlands</h3>
              <p>Based here. Happy to connect from anywhere.</p>
            </div>
          </div>
          <div>
            <ShieldCheck size={22} />
            <div>
              <h3>No sponsorship required</h3>
              <p>Netherlands work permit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
