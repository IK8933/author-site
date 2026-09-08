export default function Contact() {
  return (
    <>
      <h1 className="page-title">Contact</h1>

      <p className="page-intro">
        For questions, comments, or inquiries regarding Dr. Marti Kessack and
        her work, please use the form below.
      </p>

      <div className="page-divider" />

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" className="form-field" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" className="form-field" />
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" className="form-field" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={6}
            className="form-field"
          />
        </div>

        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </>
  );
}