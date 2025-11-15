import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OnlyPngs - Financial Autonomy. Execution Velocity.",
  description: "The AI Agent that buys your NFTs the instant your price target is met. Gasless. Non-Custodial. Always On.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caesar+Dressing&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

