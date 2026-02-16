import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Web Studio",
  description: "Более 3-х лет делаем сайты, чат-боты, web-приложения.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}
