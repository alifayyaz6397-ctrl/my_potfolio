import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content";

// Signature element: a small terminal window "boots" with a typed
// command sequence on load. It's the one deliberate motion moment on
// the page; everything else stays static. Respects reduced-motion by
// rendering the final state immediately.
const LINES = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "ali_fayyaz — b.s. computer science, uet lahore" },
  { type: "cmd", text: "cat focus.txt" },
  { type: "out", text: "backend engineering · database systems · applied cryptography" },
  { type: "cmd", text: "status --check" },
  { type: "out", text: "open_to_internships: true" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [typedChars, setTypedChars] = useState(0);
  const doneRef = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisibleLines(LINES);
      setTypedChars(-1);
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId;

    function step() {
      if (lineIndex >= LINES.length) {
        doneRef.current = true;
        return;
      }

      const line = LINES[lineIndex];

      if (line.type === "out") {
        // Output lines appear instantly once their command has typed out
        setVisibleLines((prev) => [...prev, line]);
        lineIndex += 1;
        charIndex = 0;
        timeoutId = setTimeout(step, 260);
        return;
      }

      // Command lines type out character by character
      charIndex += 1;
      setTypedChars(charIndex);

      if (charIndex >= line.text.length) {
        setVisibleLines((prev) => [...prev, line]);
        lineIndex += 1;
        charIndex = 0;
        setTypedChars(0);
        timeoutId = setTimeout(step, 180);
      } else {
        timeoutId = setTimeout(step, 28);
      }
    }

    timeoutId = setTimeout(step, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  const typingLineIndex = visibleLines.length;
  const isTypingCmd =
    typingLineIndex < LINES.length && LINES[typingLineIndex].type === "cmd";

  return (
    <section className="hero" id="hero" style={{ borderTop: "none" }}>
      <div className="terminal">
        <div className="terminal-bar">
          <span className="terminal-dot" aria-hidden="true" />
          <span className="terminal-dot" aria-hidden="true" />
          <span className="terminal-dot" aria-hidden="true" />
          <span className="terminal-title">Ali Fayyaz: ~/portfolio</span>
        </div>
        <div className="terminal-body">
          {visibleLines.map((line, i) =>
            line.type === "cmd" ? (
              <div key={i}>
                <span className="prompt">$</span>{" "}
                <span className="cmd">{line.text}</span>
              </div>
            ) : (
              <div key={i} className="out">
                {line.text}
              </div>
            )
          )}
          {isTypingCmd && (
            <div>
              <span className="prompt">$</span>{" "}
              <span className="cmd">
                {LINES[typingLineIndex].text.slice(0, typedChars)}
              </span>
              <span className="cursor" aria-hidden="true" />
            </div>
          )}
          {typingLineIndex >= LINES.length && (
            <div>
              <span className="prompt">$</span>
              <span className="cursor" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>

      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-role">{profile.role}</p>
      <p className="hero-desc">{profile.heroDesc}</p>

      <div className="hero-cta">
        <a className="btn btn-primary" href="#work">
          View my work
        </a>
        <a className="btn btn-line" href={`mailto:${profile.email}`}>
          Get in touch
        </a>
      </div>
    </section>
  );
}
