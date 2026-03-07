import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Personal Shopper App",
  description: "A makeup personal shopper app tailored to your needs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
