import { useEffect, useState } from "react";
import { profile, nav } from "../data/content";

export default function Sidebar() {
  const [active, setActive] = useState(nav[0].id);

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div className="brand-row">
        <div className="mark" aria-hidden="true">
          {">_"}
        </div>
        <div>
          <div className="brand-name">ALI FAYYAZ</div>
          <div className="brand-role">CS — backend &amp; systems</div>
        </div>
      </div>

      <nav className="side-nav">
        {nav.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={active === n.id ? "active" : ""}
          >
            <span className="idx">$</span> {n.file}
          </a>
        ))}
      </nav>

      <div className="side-contact">
        <a href={`mailto:${profile.email}`}>mail {profile.email}</a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          open github
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          open linkedin
        </a>
      </div>
    </aside>
  );
}
