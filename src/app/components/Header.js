import Link from "next/link";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "18px 0" }}>
        <div>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div
              style={{
                fontFamily: '"Palatino Linotype", Palatino, "Book Antiqua", serif',
                fontSize: 24,
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "#3b303f",
              }}
            >
              Dr. Marti Kessack
            </div>

          </Link>
          <div
            style={{
              fontSize: 14,
              letterSpacing: "0.04em",
              color: "#66536f",
              marginTop: 3,
            }}
          >
            Exploration • Ideas • Writing
          </div>
        </div>

        <nav
  style={{
    display: "flex",
    gap: 18,
    flexWrap: "wrap",
    fontSize: 14,
  }}
>
  <Link href="/" className="nav-link">Home</Link>
  <Link href="/books" className="nav-link">Books</Link>
  <Link href="/blog" className="nav-link">Blog</Link>
  <Link href="/about" className="nav-link">About</Link>
  <Link href="/contact" className="nav-link">Contact</Link>
</nav>
      </div>
    </header>
  );
}


