import { Html, Head, Main, NextScript } from 'next/document'
import { YandexMetrika } from '../YandexMetrika' // Путь к вашему компоненту

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* Здесь могут быть другие мета-теги */}
        <YandexMetrika />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}