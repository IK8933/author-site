import Link from "next/link";

/*
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
*/

const books = [];

export default function BooksPage() {
  return (
    <>
      <h1 className="page-title">Books</h1>

      <p className="page-intro">
        Books and upcoming works by Dr. Marti Kessack will be featured here.
        Check back soon for future releases.
      </p>

      <div className="page-divider" />

      <div style={{ display: "grid", gap: 16 }}>
        {books.map((b) => (
          <article
            key={b.slug}
            style={{
              padding: 16,
              border: "1px solid rgba(102, 83, 111, 0.2)",
              borderRadius: 8,
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

              <span style={{ fontSize: 13, color: "#66536f" }}>
                {b.status}
              </span>
            </div>

            <p style={{ marginTop: 10, lineHeight: 1.6 }}>
              {b.summary}
            </p>

            <Link href={`/books/${b.slug}`}>View details →</Link>
          </article>
        ))}
      </div>
    </>
  );
}