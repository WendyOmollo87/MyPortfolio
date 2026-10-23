import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wendy Leah Omollo | Software Engineer Portfolio",
  description:
    "The portfolio of Wendy Leah Omollo — software development, backend systems, intelligent applications, and AI/ML learning.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
