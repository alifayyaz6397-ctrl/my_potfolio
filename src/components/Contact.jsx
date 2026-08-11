import { profile } from "../data/content";

export default function Contact() {
  return (
    <footer className="contact-block" id="contact">
      <p className="sec-label">
        <span className="file">05_contact.sh</span>
      </p>
      <p className="contact-lead">
        Reaching out about an internship or a project? I read everything.
      </p>
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>
          email <span className="arrow">{profile.email} →</span>
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          github <span className="arrow">→</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          linkedin <span className="arrow">→</span>
        </a>
      </div>
      <p className="foot-note"># EOF</p>
    </footer>
  );
}
