import "./globals.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Ian Kessack — Author",
  description: "Books, summaries, and updates.",
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
