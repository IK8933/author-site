export default async function BlogPost({ params }) {
  const { slug } = await params;

  return (
    <section style={{ padding: "32px 0 24px" }}>
      <h1>Blog Post</h1>

      <p>
        Post: {slug}
      </p>
    </section>
  );
}