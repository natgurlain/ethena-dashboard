import { ImageResponse } from "next/og";

export const alt = "Ethena Explained: A plain-English dashboard for Ethena’s dollars and yield.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const topics = ["USDe supply", "sUSDe yield", "Backing", "ENA buybacks"];

// Decorative supply-style curve for the right side of the card.
const curve =
  "M0 250 C60 240 100 210 150 214 S240 170 300 160 S390 120 440 96 S520 60 560 40";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(ellipse at 80% 0%, #1d2a42 0%, #080a0e 60%), #080a0e",
          color: "#edf2fb",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <svg
          width="300"
          height="150"
          viewBox="0 0 560 280"
          style={{ position: "absolute", right: 80, top: 56 }}
        >
          <path d={`${curve} L560 280 L0 280 Z`} fill="#b9d2ff" fillOpacity="0.08" />
          <path d={curve} fill="none" stroke="#b9d2ff" strokeWidth="5" strokeLinecap="round" />
          <circle cx="560" cy="40" r="10" fill="#b9d2ff" />
        </svg>

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg width="76" height="76" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="16" fill="#10141c" />
            <rect x="1" y="1" width="62" height="62" rx="15" fill="none" stroke="#7288aa" strokeWidth="2" />
            <path
              d="M35 28H18c0-8 16-11 17 0Zm-17 0c-2 15 13 21 20 9M39 21c5 0 6 5 11 0M39 27c5 0 6 5 11 0M39 33c5 0 6 5 11 0"
              fill="none"
              stroke="#b9d2ff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
            />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#a6b0c1", letterSpacing: 1 }}>
            Independent dashboard
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, letterSpacing: -2 }}>
            Ethena Explained
          </div>
          <div style={{ fontSize: 42, color: "#b9d2ff", maxWidth: 680, lineHeight: 1.25 }}>
            A plain-English dashboard for Ethena’s dollars and yield.
          </div>
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          {topics.map((topic) => (
            <div
              key={topic}
              style={{
                display: "flex",
                padding: "12px 24px",
                borderRadius: 999,
                border: "2px solid #293140",
                background: "#10141c",
                color: "#edf2fb",
                fontSize: 28,
              }}
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
