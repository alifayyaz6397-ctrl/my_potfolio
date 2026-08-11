import { profile } from "../data/content";

export default function About() {
  return (
    <section id="about">
      <p className="sec-label">
        <span className="file">01_about.md</span>
      </p>
      <p className="about-text">{profile.aboutText}</p>
      <div className="fact-list">
        {profile.facts.map((f) => (
          <div className="fact-row" key={f.key}>
            <div className="fact-key">{f.key}</div>
            <div className="fact-val">{f.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
