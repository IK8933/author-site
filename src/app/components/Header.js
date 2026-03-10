import Link from "next/link";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", marginBottom: 28 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, padding: "18px 0" }}>
        <div>
          <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ fontSize: 22, letterSpacing: 0.2 }}>Dr. Marti Kessack</div>
          </Link>
          <div style={{ fontSize: 14, opacity: 0.75 }}>Exploration • Ideas • Writing</div>
        </div>

        <nav style={{ display: "flex", gap: 14, flexWrap: "wrap", fontSize: 14 }}>
          <Link href="/books">Books</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
