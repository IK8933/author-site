export default function Footer() {
  return (
    <footer style={{ marginTop: 42, paddingTop: 18, borderTop: "1px solid rgba(0,0,0,0.08)", fontSize: 13, opacity: 0.75 }}>
      <div>© {new Date().getFullYear()} Ian Kessack</div>
    </footer>
  );
}
