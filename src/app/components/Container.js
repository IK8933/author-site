export default function Container({ children }) {
    return (
        <div
            style={{
                maxWidth: 860,
                margin: "36px auto 48px",

                // Shadow cast by the entire sheet of parchment
                    filter: `
                drop-shadow(0 3px 3px rgba(45, 30, 20, 0.18))
                drop-shadow(0 12px 12px rgba(45, 30, 20, 0.16))
                drop-shadow(0 22px 22px rgba(45, 30, 20, 0.18))
        `,
            }}
        >
            <div
                style={{
                    padding: "38px 42px",

                    background: `
                radial-gradient(ellipse at center, transparent 60%, rgba(120, 85, 45, 0.06) 100%),
                radial-gradient(circle at 15% 20%, rgba(120, 85, 45, 0.06), transparent 28%),
                radial-gradient(circle at 85% 70%, rgba(120, 85, 45, 0.05), transparent 30%),
                linear-gradient(135deg, #fffaf0 0%, #f8efd9 48%, #f1e2c4 100%)
        `,

                    border: "1px solid rgba(100, 70, 40, 0.25)",

                    clipPath: `polygon(
            0.3% 0.2%,
            24% 0%,
            51% 0.2%,
            76% 0%,
            99.7% 0.3%,
            100% 25%,
            99.8% 52%,
            100% 78%,
            99.6% 99.7%,
            74% 100%,
            49% 99.8%,
            23% 100%,
            0.2% 99.6%,
            0% 74%,
            0.3% 48%,
            0% 22%
        )`,

                    boxShadow: `
                inset 0 0 45px rgba(120, 85, 45, 0.14),
                inset 0 0 8px rgba(90, 60, 30, 0.10)

        `,
                }}
            >
                {children}
            </div>
        </div>
    );
}