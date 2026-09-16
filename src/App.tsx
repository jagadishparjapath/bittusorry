import { useState } from "react";

const PETALS = ["🌸", "🌹", "💕", "🌷", "🍓", "🍇", "🍓", "🍇"];

function FloatingPetals() {
  const petals = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    emoji: PETALS[i % PETALS.length],
    left: `${4 + (i * 4.8) % 92}%`,
    duration: `${7 + (i * 1.1) % 7}s`,
    delay: `${(i * 0.7) % 9}s`,
    size: `${0.85 + (i % 3) * 0.28}rem`,
  }));
  return (
    <>
      {petals.map((p) => (
        <span key={p.id} className="petal" style={{ left: p.left, animationDuration: p.duration, animationDelay: p.delay, fontSize: p.size }}>
          {p.emoji}
        </span>
      ))}
    </>
  );
}

const memories = [
  {
    icon: "🛕",
    title: "Our Visit to the Temple",
    desc: "Where our journey started — blessed by Sri Krishna and Shiva Ji. That sacred moment when we stood together under the same roof of God, and somehow everything felt meant to be.",
  },
  {
    icon: "☕",
    title: "A Café Date",
    desc: "Where we spent the most precious time together. Just us, a warm corner, and conversations that made hours feel like minutes. Every sip felt sweeter because you were across the table.",
  },
  {
    icon: "🎬",
    title: "A Movie Date — Dhamaal 4",
    desc: "We were getting comfortable with each other, laughing through every scene. But honestly? I was watching you more than the movie — your smile was the best part of the whole evening.",
  },
  {
    icon: "🍽️",
    title: "A Restaurant Date",
    desc: "That warm evening when words weren't even needed — I was feeding you with my own hands, sharing every bite from my plate. It was such a small thing, but it felt like the most natural, loving moment in the world.",
  },
];



export default function App() {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <div className="app-root">
      <FloatingPetals />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="sorry-badge fade-1">
          <span className="sorry-icon">🥹</span>
        </div>

        <h1 className="hero-heading fade-2">
          I Am So <em>Sorry</em>
        </h1>

        <p className="hero-sub fade-3">
          I couldn't be there on your birthday.<br />
          And that breaks my heart more than words can say.
        </p>

        <div className="divider fade-4" />
      </section>

      {/* ── Apology letter ── */}
      <section className="letter-section fade-5">
        <div className="letter-card">
          <div className="letter-top-roses">🌹 &nbsp;&nbsp; 🌹</div>

          <p className="script-lead">My dearest love,</p>

          <p className="letter-body">
            Today was supposed to be the day I stood beside you, held your hand, and looked into your eyes to say — <em>"Happy Birthday."</em> Instead, I am far away, staring at the same sky and wishing it could somehow carry me to you.
          </p>

          <p className="letter-body">
            I know that "I'm sorry" does not fill the empty chair at your dinner table. It does not hand you flowers. It does not replace a hug, a kiss, or the warmth of being together. And I am sorry for that too — for every little thing that distance has stolen from us today.
          </p>

          <p className="letter-body">
            Please know that you were <strong>my only thought</strong> today. Every hour. Every minute. You deserve to be celebrated, adored, and surrounded by love — and it kills me that I couldn't be the one to do that in person.
          </p>

          <p className="letter-body">
            Forgive me. Not because I had a choice, but because my love for you is bigger than any distance, and I refuse to let this day pass without you knowing how deeply, completely, and endlessly <strong>you are loved.</strong>
          </p>

          <p className="letter-sign">Forever yours, across every mile 💕</p>
        </div>
      </section>



      {/* ── Memories ── */}
      <section className="memories-section">
        <div className="divider" style={{ maxWidth: "200px", margin: "0 auto 3rem" }} />
        <div className="memories-label">💭 Our Story</div>
        <h2 className="memories-title">Moments I Hold Close</h2>
        <p className="memories-sub">The little chapters of us that live in my heart forever</p>

        <div className="memories-grid">
          {memories.map(({ icon, title, desc }) => (
            <div key={title} className="memory-card">
              <div className="memory-icon">{icon}</div>
              <h3 className="memory-title">{title}</h3>
              <div className="memory-divider" />
              <p className="memory-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="strawberry-note">
          <span className="strawberry-emoji">🍓</span>
          <p className="strawberry-text">
            I love you so much,<br />
            <em>my strawberry</em> 🍓
          </p>
          <span className="strawberry-emoji">🍓</span>
        </div>
      </section>

      {/* ── Open Card ── */}
      <section className="promise-section" style={{ paddingTop: 0 }}>
        <div className="divider" style={{ maxWidth: "200px", margin: "0 auto 3rem" }} />

        {!cardOpen ? (
          <div className="text-center">
            <p className="promise-intro">Something straight from the heart, just for you 💌</p>
            <button className="reveal-btn open-card-btn" onClick={() => setCardOpen(true)}>
              💝 &nbsp; Open Card
            </button>
          </div>
        ) : (
          <div className="special-card fade-in">
            <div className="special-card-roses">🌸 &nbsp; 🌹 &nbsp; 🌸</div>
            <h2 className="special-card-heading">
              taare bina maan ni laage bittu
            </h2>
            <div className="special-card-divider" />
            <p className="special-card-body">
              Chahe kitni bhi door ho, dil mein teri jagah koi nahi le sakta. Aaj teri yaad mein aankhein bhar aayi, par teri muskaan ki kami ne dil bhi bhar diya. Tu mere liye woh sitaara hai jiske bina yeh duniya adhuri lagti hai.
            </p>
            <p className="special-card-body">
              Maafi maang ke bhi chain nahi aata — kyunki jaanta hoon tu deserve karti thi ki main wahaan hota. Teri khushi mere liye sab se zaruri hai, aur aaj woh khushi dene se chook gaya.
            </p>
            <p className="special-card-sign">I Love you so much Jaanudi, My swthrt, My rasmalai, my bittu, my baby, my everything 💕</p>
            <div className="special-card-roses" style={{ marginTop: "1.5rem" }}>🌷 &nbsp; 🌸 &nbsp; 🌷</div>
          </div>
        )}
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-heart">💝</div>
        <p className="footer-script">Please forgive me, my babebuu</p>
        <p className="footer-sub">
          No distance is ever too great for a love like ours.
        </p>
      </footer>
    </div>
  );
}
