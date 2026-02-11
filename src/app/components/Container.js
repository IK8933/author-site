export default function Container({ children }) {
    return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "28px 18px" }}>
        {children}
    </div>
    );
}
