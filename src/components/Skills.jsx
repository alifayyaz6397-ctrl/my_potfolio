import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills">
      <p className="sec-label">
        <span className="file">04_skills.json</span>
      </p>
      <div className="json-block">
        <div>
          <span className="punct">{"{"}</span>
        </div>
        {skills.map((group, i) => (
          <div className="json-line" key={group.category}>
            <span className="key">"{group.category}"</span>
            <span className="punct">: [</span>
            {group.items.map((item, j) => (
              <span key={item}>
                <span className="str">"{item}"</span>
                {j < group.items.length - 1 ? ", " : ""}
              </span>
            ))}
            <span className="punct">]</span>
            {i < skills.length - 1 ? <span className="punct">,</span> : null}
          </div>
        ))}
        <div>
          <span className="punct">{"}"}</span>
        </div>
      </div>
    </section>
  );
}
