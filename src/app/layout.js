import "./globals.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "The Scholarly Quill | Dr. Marti Kessack",
  description:
    "Books, essays, reflections, and updates from Dr. Marti Kessack.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header />
          <main>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
