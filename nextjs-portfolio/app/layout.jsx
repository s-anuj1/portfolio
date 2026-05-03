import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Anuj Kumar — Product Manager  ·  Founder's Office  ·  Builder",
  description:
    "Premium portfolio of Anuj Kumar. Product thinking, GTM playbooks and founder's office work.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Anuj Kumar — Portfolio",
    description:
      "Product thinker and builder. Founder's Office, GTM and 0→1 work.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0a0a0b] text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
