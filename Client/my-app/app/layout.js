import "./globals.css";

export const metadata = {
  title: "Minimal URL Shortener",
  description: "arjun/iu24t67",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
