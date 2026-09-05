export default function Contact() {
  return (
    <section style={{ padding: "32px 0 24px" }}>
      <h1>Contact Dr. Marti Kessack</h1>

      <p style={{ maxWidth: 700, lineHeight: 1.7 }}>
        For questions, comments, or inquiries regarding Dr. Marti Kessack and
        her work, please use the form below.
      </p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          maxWidth: 600,
          marginTop: 24,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label>Name</label>
          <input
            type="text"
            style={{
              padding: 10,
              fontSize: 16,
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label>Email</label>
          <input
            type="email"
            style={{
              padding: 10,
              fontSize: 16,
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label>Subject</label>
          <input
            type="text"
            style={{
              padding: 10,
              fontSize: 16,
              border: "1px solid #ccc",
              borderRadius: 4,
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <label>Message</label>
          <textarea
            rows={6}
            style={{
              padding: 10,
              fontSize: 16,
              border: "1px solid #ccc",
              borderRadius: 4,
              resize: "vertical",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            fontSize: 16,
            cursor: "pointer",
            alignSelf: "flex-start",
          }}
        >
          Send Message
        </button>
      </form>
    </section>
  );
} 