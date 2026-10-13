import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Launchpad — Find your next AI workflow",
  description: "Discover AI models, tools, and workflows in one considered space.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
