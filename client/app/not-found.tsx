import React from "react";
import Link from "next/link";

const NotFound = () => {
  const primaryBg = "#071025";
  const accent = "#7c3aed";
  const accent2 = "#4f46e5";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(180deg, ${primaryBg} 0%, #0f172a 100%)`,
        color: "#e6eef8",
        padding: "2rem",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: 760,
          padding: "3rem",
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(2,6,23,0.6)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
          border: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div
          style={{
            fontSize: 112,
            fontWeight: 800,
            lineHeight: 1,
            color: accent,
            textShadow: `0 12px 40px ${accent}33`,
          }}
        >
          404
        </div>

        <h1 style={{ fontSize: 28, marginTop: 8, marginBottom: 8 }}>
          Page not found
        </h1>
        <p style={{ opacity: 0.9, marginTop: 8 }}>
          We couldnt find the page you were looking for. It may have been moved
          or removed.
        </p>

        <div style={{ marginTop: 28 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                display: "inline-block",
                padding: "12px 22px",
                borderRadius: 10,
                background: `linear-gradient(90deg, ${accent}, ${accent2})`,
                color: "white",
                fontWeight: 700,
                boxShadow: `0 8px 30px ${accent}22`,
                transition: "transform .15s ease, box-shadow .15s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-3px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              Return Home
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
