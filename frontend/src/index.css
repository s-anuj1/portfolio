@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap");

html, body, #root {
  background: #0a0a0b;
}

body {
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e4e4e7;
  background: #0a0a0b;
  font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
}

/* ====== Ambient backgrounds ====== */
.ambient-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(900px 520px at 12% 8%, rgba(245, 158, 11, 0.08), transparent 60%),
    radial-gradient(820px 520px at 92% 28%, rgba(249, 115, 22, 0.06), transparent 62%),
    radial-gradient(700px 500px at 22% 58%, rgba(245, 158, 11, 0.05), transparent 65%),
    radial-gradient(900px 580px at 88% 82%, rgba(234, 88, 12, 0.06), transparent 62%);
  animation: ambientShift 18s ease-in-out infinite alternate;
}

@keyframes ambientShift {
  0%   { transform: translate3d(0, 0, 0) scale(1); }
  50%  { transform: translate3d(-1.2%, 0.8%, 0) scale(1.03); }
  100% { transform: translate3d(1%, -0.6%, 0) scale(1.02); }
}

/* subtle site-wide grid that matches the hero aesthetic */
.ambient-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.05;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.85) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.85) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 0%, rgba(0,0,0,0.55) 55%, transparent 90%);
  mask-image: radial-gradient(ellipse at 50% 30%, #000 0%, rgba(0,0,0,0.55) 55%, transparent 90%);
}

.ambient-noise {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.06;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  background-size: 180px 180px;
}

/* ====== Section title: premium gradient + subtle shimmer ====== */
.section-title {
  background-image: linear-gradient(
    110deg,
    #ffffff 0%,
    #fff7ed 25%,
    #fcd34d 50%,
    #fff7ed 75%,
    #ffffff 100%
  );
  background-size: 220% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: titleShimmer 10s linear infinite;
}

@keyframes titleShimmer {
  0%   { background-position: 0% 50%; }
  100% { background-position: -220% 50%; }
}

/* ====== Marquee ====== */
.marquee-track {
  animation: marquee 38s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

/* ====== Custom cursor ====== */
@media (pointer: fine) {
  html.has-custom-cursor,
  html.has-custom-cursor body,
  html.has-custom-cursor * {
    cursor: none !important;
  }
}

.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.2s ease;
  will-change: transform;
}

.cursor-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #f59e0b;
  box-shadow: 0 0 14px rgba(245, 158, 11, 0.65);
}

.cursor-ring {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(245, 158, 11, 0.55);
  background: rgba(245, 158, 11, 0.05);
  transition: width 0.22s ease, height 0.22s ease, background 0.22s ease,
    border-color 0.22s ease, opacity 0.2s ease;
}

.cursor-ring-hover {
  width: 52px;
  height: 52px;
  background: rgba(245, 158, 11, 0.12);
  border-color: rgba(245, 158, 11, 0.9);
  box-shadow: 0 0 24px rgba(245, 158, 11, 0.25);
}

@media (pointer: coarse) {
  .cursor-dot,
  .cursor-ring {
    display: none;
  }
}

@layer base {
  :root {
    --background: 240 6% 5%;
    --foreground: 0 0% 98%;
    --card: 240 6% 7%;
    --card-foreground: 0 0% 98%;
    --popover: 240 6% 7%;
    --popover-foreground: 0 0% 98%;
    --primary: 38 92% 50%;
    --primary-foreground: 24 95% 8%;
    --secondary: 240 4% 12%;
    --secondary-foreground: 0 0% 98%;
    --muted: 240 4% 12%;
    --muted-foreground: 240 5% 64%;
    --accent: 38 92% 50%;
    --accent-foreground: 24 95% 8%;
    --destructive: 0 72% 51%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 4% 16%;
    --input: 240 4% 16%;
    --ring: 38 92% 50%;
    --radius: 0.75rem;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
