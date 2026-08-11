import { work } from "../data/content";

export default function Work() {
  return (
    <section id="work">
      <p className="sec-label">
        <span className="file">02_work/</span>
      </p>
      <div className="work-list">
        {work.map((item) => (
          <article className="work-item" key={item.title}>
            <p className="work-head">$ git show --stat {slug(item.title)}</p>
            <div className="work-body">
              <h3 className="work-title">{item.title}</h3>
              <p className="work-meta">
                {item.category}
                <span className="sep">·</span>
                {item.context}
                <span className="sep">·</span>
                <span className="status">{item.status}</span>
              </p>
              <p className="work-desc">{item.description}</p>
              <p className="work-highlight">
                <strong>{item.highlightLabel}:</strong> {item.highlight}
              </p>
              <div className="work-stack">
                <span className="k">dependencies:</span>{" "}
                {item.stack.map((t, i) => (
                  <span key={t}>
                    <span className="v">{t}</span>
                    {i < item.stack.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
              <a
                className="work-link"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                view source →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function slug(title) {
  return title
    .toLowerCase()
    .split(" — ")[0]
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
