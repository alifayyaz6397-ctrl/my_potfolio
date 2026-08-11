import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education">
      <p className="sec-label">
        <span className="file">03_education.md</span>
      </p>
      <div className="edu-item">
        <div className="edu-time">{education.time}</div>
        <div>
          <h3 className="edu-school">{education.school}</h3>
          <p className="edu-degree">{education.degree}</p>
          <ul className="edu-notes">
            {education.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
