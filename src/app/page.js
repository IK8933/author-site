export default function Home() {
  return (
    <>
      <section style={{ padding: "32px 0 24px" }}>
        <p
          style={{
            margin: 0,
            fontSize: 14,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Welcome
        </p>

        <h1
          style={{
            marginTop: 12,
            marginBottom: 16,
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            lineHeight: 1.1,
          }}
        >
          The Scholarly Quill
        </h1>

        <p
          style={{
            maxWidth: 700,
            fontSize: 18,
            lineHeight: 1.7,
            opacity: 0.9,
          }}
        >
          The Scholarly Quill is a space for personal storytelling, reflection,
          and the sharing of ideas through books, essays, and blog posts.
        </p>
      </section>

      <section style={{ padding: "16px 0 24px" }}>
        <h2>What You’ll Find Here</h2>
        <p style={{ maxWidth: 700, lineHeight: 1.7 }}>
          This site is designed to share meaningful writing, personal journeys,
          and thoughtful ideas. Visitors will be able to explore books, read
          blog posts, and learn more about the author and the purpose behind the
          work.
        </p>
      </section>

      <section style={{ padding: "16px 0 24px" }}>
        <h2>Explore</h2>
        <ul style={{ lineHeight: 1.9, paddingLeft: 20 }}>
          <li>Browse published and upcoming books</li>
          <li>Read blog posts and reflections</li>
          <li>Learn more about the author</li>
          <li>Get in touch through the contact page</li>
        </ul>
      </section>
    </>
  );
}