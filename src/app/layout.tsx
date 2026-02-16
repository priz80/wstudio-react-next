import type { Metadata } from "next";
import "../styles/global.scss";
import "../styles/fonts.scss";
import "../styles/aside-menu.scss";

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
      <body className="min-h-screen bg-black text-white relative font-family">
        {children}
      </body>
    </html>
  );
}
