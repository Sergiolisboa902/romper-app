import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "App Romper",
  description: "Sua jornada de estudo bíblico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
