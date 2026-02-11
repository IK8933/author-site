import Link from "next/link";

const books = [
  {
    title: "Example Book Title",
    slug: "example-book-title",
    description: [
      "This is where you expand beyond the short summary. One or two paragraphs that feel like the inside flap of a hardcover.",
      "You can talk about themes, tone, or what kind of reader will enjoy it—without spoiling the story.",
    ],
    buyLinks: [
      { label: "Amazon", url: "https://example.com" },
      { label: "Barnes & Noble", url: "https://example.com" },
    ],
  },
  {
    title: "Second Example Title",
    slug: "second-example-title",
    description: [
      "A longer description for the second book.",
      "If it’s not available yet, say so here.",
    ],
    buyLinks: [],
  },
];

export default function BookDetailPage({ params }) {
  const slug = params?.slug ?? "";
  const book = books.find((b) => b.slug === slug);

  if (!book) {
    return (
      <>
        <h1>Book not found</h1>
        <p className="muted">Slug received: {String(slug)}</p>
        <p>
          <Link href="/books">← Back to Books</Link>
        </p>
      </>
    );
  }

  return (
    <>
      <p className="muted">
        <Link href="/books">← Back to Books</Link>
      </p>

      <h1>{book.title}</h1>

      <hr />

      {book.description.map((para, i) => (
        <p key={i}>{para}</p>
      ))}

      {book.buyLinks.length > 0 && (
        <>
          <h2>Buy</h2>
          <ul>
            {book.buyLinks.map((l) => (
              <li key={l.label}>
                <a href={l.url} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
