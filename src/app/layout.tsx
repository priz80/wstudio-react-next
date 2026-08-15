import type { Metadata } from "next";
import Script from "next/script";
import "./global.css";

const YANDEX_METRIKA_ID = "104145184"; // Ваш ID

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
        
        <Script
          id="ym-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${YANDEX_METRIKA_ID}, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true,
                 webvisor:true
            });`,
          }}
        />
        {/* 
          Блок <noscript> с <img> удален, так как:
          1. Он вызывает ошибку линтера next/no-img-element.
          2. Он не влияет на сбор данных для пользователей с включенным JS.
          3. Яндекс.Метрика не требует этого тега для работы.
        */}
        
      </body>
    </html>
  );
}