"use client";

import '@/styles/mixins.scss'
import '@/styles/globals.scss'
import '@/styles/shared.scss'
import Script from 'next/script'
import { ReduxProvider } from '@/store/provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='page'>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
      <Script defer={false} src='/SmoothScroll.min.js' />
      <Script defer={false} src='/librariesInit.js' />
      <link rel="icon" href="/favicon.png" />
      <title>Oleksii Reznichenko | Web Developer</title>
      <meta name="title" content="Oleksii Reznichenko | Web Developer" />
      <meta name="keywords" content="frontend development, web developer, HTML, CSS, JavaScript, React, Vue.js, responsive design, web applications, Git, TypeScript, Sass, Nuxt.js, Next.js, user experience, portfolio showcase" />
      <meta name="description" content="
      Explore the portfolio of Oleksii Reznichenko, a passionate front-end web developer 
      with 3 years of experience. Specializing in React, Vue.js, Next.js, HTML, CSS, JavaScript and TypeScript, 
      I craft high-performance websites with a focus on user-friendliness and 
      contribute to the development of dynamic and responsive web applications.
" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:title" content="Oleksii Reznichenko | Web Developer" />
      <meta property="og:description" content="
      Explore the portfolio of Oleksii Reznichenko, a passionate front-end web developer 
      with 3 years of experience. Specializing in HTML, CSS, Sass, JavaScript, and TypeScript, 
      I craft high-performance websites with a focus on user-friendliness and 
      contribute to the development of dynamic and responsive web applications.
" />
      <meta property="og:image" content="/seoImage.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content="Oleksii Reznichenko | Web Developer" />
      <meta property="twitter:description" content="
      Explore the portfolio of Oleksii Reznichenko, a passionate front-end web developer 
      with 3 years of experience. Specializing in HTML, CSS, Sass, JavaScript, and TypeScript, 
      I craft high-performance websites with a focus on user-friendliness and 
      contribute to the development of dynamic and responsive web applications.
" />
      <meta property="twitter:image" content="/seoImage.png" />
    </html>
  )
}