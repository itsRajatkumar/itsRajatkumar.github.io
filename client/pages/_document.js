import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en-us">
            <Head />
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" crossorigin="anonymous" />
            <body  class="template-color-1 spybody" data-spy="scroll" data-target=".navbar-example2" data-offset="70">
                <Main />
                <NextScript />
                <script src="https://unpkg.com/feather-icons/dist/feather.min.js"> </script>
                <script src="https://unpkg.com/aos@next/dist/aos.js" cross-origin="anonymous"></script>
  <script>
    AOS.init();
  </script>
            </body>
        </Html>
    )
}