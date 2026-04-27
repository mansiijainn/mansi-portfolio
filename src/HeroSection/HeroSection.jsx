import { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";

const BADGES = [
  { label: "Available for work", icon: "✦", style: { top: "8%", left: "5%" } },
  { label: "React Developer", icon: "⭐", style: { top: "12%", right: "7%" } },
  { label: "UI / UX", icon: "◈", style: { top: "35%", left: "2%" } },
  { label: "Open to collab", icon: "↗", style: { top: "30%", right: "3%" } },
  { label: "AI Builder", icon: "⚡", style: { bottom: "30%", left: "8%" } },
  { label: "Full Stack", icon: "🛠", style: { bottom: "25%", right: "6%" } },
  { label: "Product Thinker", icon: "💡", style: { bottom: "12%", left: "22%" } },
  { label: "Teen Tech", icon: "🚀", style: { top: "55%", right: "18%" } },
];

const PROJECTS = [
  { name: "Teenspace", desc: "AI chat app built for teens.", tag: "AI / React", year: "2025", link: "https://github.com/mansiijainn", color: "#7c3aed" },
  { name: "Portfolio", desc: "This site buid deployed on Vercel.", tag: "React / CSS", year: "2025", link: "#", color: "#6d28d9" },
];

export default function HeroSection({ name = "Mansi", role = "Frontend Developer & AI Builder" }) {
  const bgTextRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bgTextRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      bgTextRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <span ref={bgTextRef} className={styles.bgWord} aria-hidden="true">PORTFOLIO</span>
        <div className={styles.ring} aria-hidden="true" />
        {BADGES.map((b, i) => (
          <div key={b.label} className={styles.badge} style={{ ...b.style, animationDelay: `${-i * 1.1}s`, animationDuration: `${6 + i * 0.5}s` }}>
            <span className={styles.badgeIcon}>{b.icon}</span>
            {b.label}
          </div>
        ))}
        <div className={styles.photoWrap}>
          <div className={styles.photoGlow} />
          <img src="/mansi.png" alt="Mansi" className={styles.photo} onError={(e) => { e.target.style.display = "none"; }} />
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Hello, I am</p>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.role}>{role}</p>
          <div className={styles.ctas}>
            <a href="#projects" className={styles.ctaPrimary}>See my work</a>
            <a href="https://github.com/mansiijainn" target="_blank" rel="noreferrer" className={styles.ctaGhost}>GitHub</a>
          </div>
        </div>
      </section>
      <section className={styles.projects} id="projects">
        <p className={styles.secEyebrow}>what I have built</p>
        <h2 className={styles.secTitle}>Projects</h2>
        <div className={styles.projectGrid}>
          {PROJECTS.map((p) => (
            <a key={p.name} href={p.link} target="_blank" rel="noreferrer" className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardTag}>{p.tag}</span>
                <span className={styles.cardYear}>{p.year}</span>
              </div>
              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.cardArrow}>View</div>
              <div className={styles.cardGlow} style={{ background: p.color }} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
