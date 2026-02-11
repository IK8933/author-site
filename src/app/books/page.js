import Link from "next/link";

const books = [
  {
    title: "Example Book Title",
    slug: "example-book-title",
    summary:
      "Two or three sentences that sound like the back cover. Intrigue, tone, stakes. No spoilers.",
    status: "Available",
  },
  {
    title: "Second Example Title",
    slug: "second-example-title",
    summary:
      "Short, confident summary. The goal is: make someone want to click.",
    status: "Coming soon",
  },
];

export default function BooksPage() {
  return (
    <>
      <h1>Books</h1>
      <p className="muted">Short summaries and links to purchase.</p>

      <hr />

      <div style={{ display: "grid", gap: 16 }}>
        {books.map((b) => (
          <article
            key={b.slug}
            style={{
              padding: 16,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                alignItems: "baseline",
                flexWrap: "wrap",
              }}
            >
              <h2 style={{ margin: 0 }}>
                <Link href={`/books/${b.slug}`}>{b.title}</Link>
              </h2>
              <span className="muted" style={{ fontSize: 13 }}>
                {b.status}
              </span>
            </div>

            <p className="muted" style={{ marginTop: 10 }}>
              {b.summary}
            </p>

            <Link href={`/books/${b.slug}`}>View details →</Link>
          </article>
        ))}
      </div>
    </>
  );
}
